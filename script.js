// script.js

const hexMapEl = document.getElementById("hex-map");
const infoEl = document.getElementById("hex-info");
const container = document.getElementById("hex-map-container");

// Built-in faction colors (from your factions.csv) as a safety net
const DEFAULT_FACTION_COLORS = {
  "Cedar Hill": "rgba(181,99,255,0.40)",
  "Catalpa": "rgba(222,32,20,0.40)",
  "Kult of Tharros": "rgba(230,93,0,0.40)",
  "Wardens": "rgba(151,207,78,0.40)",
  "Black Sky": "rgba(48,122,168,0.40)",
  "The Order": "rgba(49,59,62,0.40)",
  "Haven": "rgba(164,40,194,0.40)",
  "Prismatic Troupe": "rgba(84,255,0,0.40)",
  "GrimFrost": "rgba(92,56,255,0.40)",
  "The Cast": "rgba(242,230,25,0.40)",
  "White Ravens": "rgba(255,255,255,0.40)",
  "The Grove": "rgba(126,82,8,0.40)",
  "Geth": "rgba(2,27,144,0.40)",
  "Vidaria": "rgba(147,14,0,0.40)",
  "Silver Branches": "rgba(44,133,14,0.40)",
  "Blackthorne": "rgba(230,77,94,0.40)",
  "Mellondor": "rgba(93,167,44,0.40)"
};

// ---------------------- CSV PARSERS ----------------------

// map.csv: headers should be something like: Location,Hex,Faction,Name
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

// factions.csv: faction,color (rgba string)
function parseFactionsCsv(text) {
  const lines = text.split(/\r?\n/).filter(l => l.trim().length > 0);
  if (!lines.length) return { ...DEFAULT_FACTION_COLORS };

  const headers = lines[0].split(",").map(h => h.trim().toLowerCase());
  const idxFaction = headers.indexOf("faction");
  const idxColor   = headers.indexOf("color");

  if (idxFaction === -1 || idxColor === -1) {
    console.warn("factions.csv headers not recognized, using built-in colors only");
    return { ...DEFAULT_FACTION_COLORS };
  }

  const get = (cells, idx) => (idx < 0 || idx >= cells.length) ? "" : cells[idx].trim();

  const colors = { ...DEFAULT_FACTION_COLORS };

  for (let i = 1; i < lines.length; i++) {
    const row = lines[i].split(",");
    if (row.length === 1 && row[0].trim() === "") continue;

    const faction = get(row, idxFaction);
    const color   = get(row, idxColor);
    if (!faction || !color) continue;

    colors[faction] = color;
  }

  console.log("factions colors (merged):", colors);
  return colors;
}

// ---------------------- BUILD GRID ----------------------

function buildHexMap(mapLookup, factionColors) {
  if (!Array.isArray(HEX_DATA)) {
    console.error("HEX_DATA missing – check map-data.js");
    return;
  }

  hexMapEl.innerHTML = "";

  let currentCol = -1;
  let colEl = null;

  HEX_DATA.forEach(cell => {
    // New column when col index changes
    if (cell.col !== currentCol) {
      currentCol = cell.col;
      colEl = document.createElement("div");
      colEl.className = "hex-col";
      colEl.dataset.col = cell.col;
      hexMapEl.appendChild(colEl);
    }

    // Only map.csv determines faction/name/location
    const override = (mapLookup.byHex && mapLookup.byHex[cell.hex]) || {};
    const faction  = override.faction || "";
    const name     = override.name || "";
    const location = override.location || "";

    // Hex button
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

    const inner = document.createElement("div");
    inner.className = "hex-inner";
    inner.textContent = cell.display;

    // Apply faction color (translucent) if we have one
    if (faction && factionColors[faction]) {
      inner.style.backgroundColor = factionColors[faction];
    } else {
      inner.style.backgroundColor = "rgba(0,0,0,0)";
    }

    hexBtn.appendChild(inner);
    colEl.appendChild(hexBtn);
  });

  console.log("Hex map built.");
}

// ---------------------- INIT ----------------------

function init() {
  const mapPromise = fetch("map.csv")
    .then(res => {
      if (!res.ok) throw new Error("map.csv failed to load");
      return res.text();
    })
    .then(parseMapCsv)
    .catch(err => {
      console.warn("Could not load map.csv; no factions will be assigned.", err);
      return { byHex: {} };
    });

  const factionsPromise = fetch("factions.csv")
    .then(res => {
      if (!res.ok) throw new Error("factions.csv failed to load");
      return res.text();
    })
    .then(parseFactionsCsv)
    .catch(err => {
      console.warn("Could not load factions.csv; using built-in colors only.", err);
      return { ...DEFAULT_FACTION_COLORS };
    });

  Promise.all([mapPromise, factionsPromise]).then(
    ([mapLookup, factionColors]) => buildHexMap(mapLookup, factionColors)
  );
}

init();

// ---------------------- CLICK INFO ----------------------

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

// ---------------------- CTRL + SCROLL ZOOM ----------------------

let zoom = 1;

container.addEventListener("wheel", (e) => {
  if (!e.ctrlKey) return;  // only zoom while CTRL is held
  e.preventDefault();

  const factor = e.deltaY < 0 ? 1.1 : 0.9;
  zoom *= factor;
  if (zoom < 0.3) zoom = 0.3;
  if (zoom > 6)   zoom = 6;

  hexMapEl.style.transformOrigin = "0 0";
  hexMapEl.style.transform = `scale(${zoom})`;
}, { passive: false });
