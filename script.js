// script.js
// Uses:
//   map-data.js   (defines HEX_ROWS, HEX_COLS, HEX_DATA, geometry & display)
//   map.csv       (hex -> faction, name, location)
//   factions.csv  (faction -> color)

// DOM references
const hexMapEl = document.getElementById("hex-map");
const infoEl = document.getElementById("hex-info");
const container = document.getElementById("hex-map-container");

console.log("Loaded HEX_ROWS =", typeof HEX_ROWS !== "undefined" ? HEX_ROWS : "?",
            "HEX_COLS =", typeof HEX_COLS !== "undefined" ? HEX_COLS : "?");
console.log("HEX_DATA length:", Array.isArray(HEX_DATA) ? HEX_DATA.length : "?");

// ------------------------------------------------------------
// CSV PARSERS
// ------------------------------------------------------------

// Ownership / labels from map.csv
function parseMapCsv(text) {
  const lines = text.split(/\r?\n/).filter(l => l.trim().length > 0);
  if (!lines.length) return { byHex: {}, byDisplay: {} };

  const headers = lines[0].split(",").map(h => h.trim().toLowerCase());

  const idxHex     = headers.findIndex(h => h === "hex" || h === "id" || h === "number" || h === "hexid");
  const idxDisplay = headers.findIndex(h => h === "display" || h === "label" || h === "hex_display");
  const idxFaction = headers.findIndex(h => h === "faction" || h === "owner" || h === "factionname");
  const idxName    = headers.findIndex(h => h === "name" || h === "town" || h === "city" || h === "settlement");
  const idxLoc     = headers.findIndex(h => h === "location" || h === "region" || h === "area");

  const byHex = {};
  const byDisplay = {};

  const getField = (cells, idx) => (idx < 0 || idx >= cells.length) ? "" : cells[idx].trim();

  for (let i = 1; i < lines.length; i++) {
    const row = lines[i].split(",");
    if (row.length === 1 && row[0].trim() === "") continue;

    const hexStr     = getField(row, idxHex);
    const displayStr = getField(row, idxDisplay);
    const faction    = getField(row, idxFaction);
    const name       = getField(row, idxName);
    const location   = getField(row, idxLoc);

    if (!hexStr && !displayStr) continue; // nothing to key on

    const hexNum = hexStr ? parseInt(hexStr, 10) : NaN;
    const value = { faction, name, location };

    if (!Number.isNaN(hexNum)) {
      byHex[hexNum] = value;
    }
    if (displayStr) {
      byDisplay[displayStr] = value;
    }
  }

  console.log("map.csv overrides:", {
    byHex: Object.keys(byHex).length,
    byDisplay: Object.keys(byDisplay).length
  });

  return { byHex, byDisplay };
}

// Faction colors from factions.csv
function parseFactionsCsv(text) {
  const lines = text.split(/\r?\n/).filter(l => l.trim().length > 0);
  if (!lines.length) return {};

  const headers = lines[0].split(",").map(h => h.trim().toLowerCase());
  const idxFaction = headers.findIndex(h => h === "faction" || h === "name");
  const idxColor   = headers.findIndex(h => h === "color" || h === "colour");

  const getField = (cells, idx) => (idx < 0 || idx >= cells.length) ? "" : cells[idx].trim();

  const colors = {};

  for (let i = 1; i < lines.length; i++) {
    const row = lines[i].split(",");
    if (row.length === 1 && row[0].trim() === "") continue;

    const faction = getField(row, idxFaction);
    const color   = getField(row, idxColor);

    if (!faction || !color) continue;
    colors[faction] = color;
  }

  console.log("factions.csv colors:", colors);
  return colors;
}

// ------------------------------------------------------------
// BUILD HEX MAP
// ------------------------------------------------------------

function buildHexMap(mapLookup, factionColors) {
  if (!Array.isArray(HEX_DATA)) {
    console.error("HEX_DATA is not available – check map-data.js");
    return;
  }

  hexMapEl.innerHTML = ""; // clear existing

  let currentCol = -1;
  let colEl = null;

  HEX_DATA.forEach(cell => {
    // Start a new column when col index changes
    if (cell.col !== currentCol) {
      currentCol = cell.col;
      colEl = document.createElement("div");
      colEl.className = "hex-col";
      colEl.dataset.col = cell.col;
      hexMapEl.appendChild(colEl);
    }

    // Ownership overrides from map.csv
    const override =
      (mapLookup.byHex && mapLookup.byHex[cell.hex]) ||
      (mapLookup.byDisplay && mapLookup.byDisplay[String(cell.display)]);

    const faction = (override && override.faction) || cell.faction || "";
    const name    = (override && override.name)    || cell.name    || "";
    const location = (override && override.location) || cell.location || "";

    // Create hex button
    const hexBtn = document.createElement("button");
    hexBtn.className = "hex";
    hexBtn.type = "button";

    hexBtn.dataset.row = cell.row;
    hexBtn.dataset.col = cell.col;
    hexBtn.dataset.hex = cell.hex;
    hexBtn.dataset.display = cell.display;

    if (location) hexBtn.dataset.location = location;
    if (faction)  hexBtn.dataset.faction  = faction;
    if (name)     hexBtn.dataset.name     = name;

    // Label
    const inner = document.createElement("div");
    inner.className = "hex-inner";
    inner.textContent = cell.display;

    // Apply faction color from factions.csv (option A: translucent overlay)
    if (faction && factionColors[faction]) {
      inner.style.backgroundColor = factionColors[faction];
    } else {
      inner.style.backgroundColor = "rgba(0,0,0,0)"; // fully transparent
    }

    hexBtn.appendChild(inner);
    colEl.appendChild(hexBtn);
  });

  console.log("Hex map built.");
}

// ------------------------------------------------------------
// INITIALISE: load map.csv + factions.csv, then build map
// ------------------------------------------------------------

function init() {
  const mapCsvPromise = fetch("map.csv")
    .then(res => {
      if (!res.ok) throw new Error("map.csv failed to load");
      return res.text();
    })
    .then(parseMapCsv)
    .catch(err => {
      console.warn("Could not load map.csv, using defaults from map-data.js only:", err);
      return { byHex: {}, byDisplay: {} };
    });

  const factionsCsvPromise = fetch("factions.csv")
    .then(res => {
      if (!res.ok) throw new Error("factions.csv failed to load");
      return res.text();
    })
    .then(parseFactionsCsv)
    .catch(err => {
      console.warn("Could not load factions.csv, using no faction colors:", err);
      return {};
    });

  Promise.all([mapCsvPromise, factionsCsvPromise])
    .then(([mapLookup, factionColors]) => {
      buildHexMap(mapLookup, factionColors);
    });
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
  // Only zoom while CTRL is held
  if (!e.ctrlKey) return;

  e.preventDefault();

  const zoomFactor = e.deltaY < 0 ? 1.1 : 0.9; // up = in, down = out
  zoom *= zoomFactor;

  if (zoom < 0.3) zoom = 0.3;
  if (zoom > 6)   zoom = 6;

  hexMapEl.style.transformOrigin = "0 0";
  hexMapEl.style.transform = `scale(${zoom})`;
}, { passive: false });
