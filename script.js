// script.js
// Uses:
//   map-data.js   (HEX_DATA with row/col/hex/display)
//   map.csv       (hex -> faction/name/location overrides)
//   factions.csv  (faction -> rgba color)

// DOM references
const hexMapEl = document.getElementById("hex-map");
const infoEl = document.getElementById("hex-info");
const container = document.getElementById("hex-map-container");

// ------------------------------------------------------------
// CSV PARSERS
// ------------------------------------------------------------

// map.csv: Location,Hex,Faction,Name
function parseMapCsv(text) {
  const lines = text.split(/\r?\n/).filter(l => l.trim().length > 0);
  if (!lines.length) return { byHex: {} };

  const headers = lines[0].split(",").map(h => h.trim().toLowerCase());

  const idxLoc     = headers.indexOf("location");
  const idxHex     = headers.indexOf("hex");
  const idxFaction = headers.indexOf("faction");
  const idxName    = headers.indexOf("name");

  const byHex = {};
  const get = (cells, idx) => (idx < 0 || idx >= cells.length) ? "" : cells[idx].trim();

  for (let i = 1; i < lines.length; i++) {
    const row = lines[i].split(",");
    if (row.length === 1 && row[0].trim() === "") continue;

    const loc     = get(row, idxLoc);
    const hexStr  = get(row, idxHex);
    const faction = get(row, idxFaction);
    const name    = get(row, idxName);

    if (!hexStr) continue;
    const hexNum = parseInt(hexStr, 10);
    if (Number.isNaN(hexNum)) continue;

    byHex[hexNum] = { faction, name, location: loc };
  }

  console.log("map.csv entries:", Object.keys(byHex).length);
  return { byHex };
}

// factions.csv: faction,color (color = rgba(...) string)
function parseFactionsCsv(text) {
  const lines = text.split(/\r?\n/).filter(l => l.trim().length > 0);
  if (!lines.length) return {};

  const headers = lines[0].split(",").map(h => h.trim().toLowerCase());
  let idxFaction = headers.indexOf("faction");
  let idxColor   = headers.indexOf("color");

  // Backwards-compat: if someone still has "hex" column as color
  if (idxColor === -1) idxColor = headers.indexOf("hex");

  const get = (cells, idx) => (idx < 0 || idx >= cells.length) ? "" : cells[idx].trim();

  const colors = {};
  for (let i = 1; i < lines.length; i++) {
    const row = lines[i].split(",");
    if (row.length === 1 && row[0].trim() === "") continue;

    const faction = get(row, idxFaction);
    const color   = get(row, idxColor);
    if (!faction || !color) continue;

    colors[faction] = color;
  }

  console.log("factions.csv colors:", colors);
  return colors;
}

// ------------------------------------------------------------
// BUILD HEX GRID
// ------------------------------------------------------------

function buildHexMap(mapLookup, factionColors) {
  if (!Array.isArray(HEX_DATA)) {
    console.error("HEX_DATA missing – check map-data.js");
    return;
  }

  hexMapEl.innerHTML = "";

  let currentCol = -1;
  let colEl = null;

  HEX_DATA.forEach(cell => {
    // Start new column when col index changes
    if (cell.col !== currentCol) {
      currentCol = cell.col;
      colEl = document.createElement("div");
      colEl.className = "hex-col";
      colEl.dataset.col = cell.col;
      hexMapEl.appendChild(colEl);
    }

    // Use ONLY map.csv for faction/location/name.
    const override = mapLookup.byHex[cell.hex] || {};
    const faction  = override.faction || "";
    const name     = override.name || "";
    const location = override.location || "";

    // Create hex button
    const hexBtn = document.createElement("button");
    hexBtn.className = "hex";
    hexBtn.type = "button";

    hexBtn.dataset.row = cell.row;
    hexBtn.dataset.col = cell.col;
    hexBtn.dataset.hex = cell.hex;
    hexBtn.dataset.display = cell.display;

    if (location) hexBtn.dataset.location = location;
    if (faction)  hexBtn.dataset.faction = faction;
    if (name)     hexBtn.dataset.name = name;

    // Inner label + color
    const inner = document.createElement("div");
    inner.className = "hex-inner";
    inner.textContent = cell.display;

    if (faction && factionColors[faction]) {
      inner.style.backgroundColor = factionColors[faction]; // translucent color
    } else {
      inner.style.backgroundColor = "rgba(0,0,0,0)";       // fully transparent
    }

    hexBtn.appendChild(inner);
    colEl.appendChild(hexBtn);
  });

  console.log("Hex map built.");
}

// ------------------------------------------------------------
// INITIALISE: load both CSVs, then build
// ------------------------------------------------------------

function init() {
  const mapPromise = fetch("map.csv")
    .then(res => {
      if (!res.ok) throw new Error("map.csv failed to load");
      return res.text();
    })
    .then(parseMapCsv)
    .catch(err => {
      console.warn("Could not load map.csv:", err);
      return { byHex: {} };
    });

  const factionsPromise = fetch("factions.csv")
    .then(res => {
      if (!res.ok) throw new Error("factions.csv failed to load");
      return res.text();
    })
    .then(parseFactionsCsv)
    .catch(err => {
      console.warn("Could not load factions.csv:", err);
      return {};
    });

  Promise.all([mapPromise, factionsPromise]).then(
    ([mapLookup, factionColors]) => buildHexMap(mapLookup, factionColors)
  );
}

init();

// ------------------------------------------------------------
// CLICK HANDLER – show details
// ------------------------------------------------------------

hexMapEl.addEventListener("click", (e) => {
  const hex = e.target.closest(".hex");
  if (!hex) return;

  const details = {
    hex: hex.dataset.hex,
    display: hex.dataset.display,
    row: Number(hex.dataset.row),
    col: Number(hex.dataset.col),
    location: hex.dataset.location || "",
    faction: hex.dataset.faction || "",
    name: hex.dataset.name || ""
  };

  let msg = `Hex ${details.display}`;
  if (details.location) msg += ` (${details.location})`;
  if (details.faction)  msg += ` — Faction: ${details.faction}`;
  if (details.name)     msg += ` — Name: ${details.name}`;

  infoEl.textContent = msg;
  console.log("Clicked hex:", details);
});

// ------------------------------------------------------------
// CTRL + SCROLL ZOOM
// ------------------------------------------------------------

let zoom = 1;

container.addEventListener("wheel", (e) => {
  // Only zoom while CTRL is held; otherwise let normal scroll happen
  if (!e.ctrlKey) return;

  e.preventDefault();

  const factor = e.deltaY < 0 ? 1.1 : 0.9;
  zoom *= factor;
  if (zoom < 0.3) zoom = 0.3;
  if (zoom > 6)   zoom = 6;

  hexMapEl.style.transformOrigin = "0 0";
  hexMapEl.style.transform = `scale(${zoom})`;
}, { passive: false });
