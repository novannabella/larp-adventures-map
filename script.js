// script.js
// Uses: map-data.js (for HEX_ROWS, HEX_COLS, HEX_DATA)
//       map.csv     (for up-to-date faction / name info)

// DOM references
const hexMapEl = document.getElementById("hex-map");
const infoEl = document.getElementById("hex-info");
const container = document.getElementById("hex-map-container");

console.log("Loaded HEX_ROWS =", typeof HEX_ROWS !== "undefined" ? HEX_ROWS : "?", 
            "HEX_COLS =", typeof HEX_COLS !== "undefined" ? HEX_COLS : "?");
console.log("HEX_DATA length:", Array.isArray(HEX_DATA) ? HEX_DATA.length : "?");

// ------------------------------------------------------------
// CSV PARSER – read map.csv for factions / names
// ------------------------------------------------------------

function parseCsv(text) {
  const lines = text.split(/\r?\n/).filter(l => l.trim().length > 0);
  if (!lines.length) return { byHex: {}, byDisplay: {} };

  const headers = lines[0].split(",").map(h => h.trim().toLowerCase());

  const idxHex     = headers.findIndex(h => h === "hex" || h === "id" || h === "number" || h === "hexid");
  const idxDisplay = headers.findIndex(h => h === "display" || h === "label" || h === "hex_display");
  const idxFaction = headers.findIndex(h => h === "faction" || h === "owner" || h === "factionname");
  const idxName    = headers.findIndex(h => h === "name" || h === "town" || h === "city" || h === "settlement");

  const byHex = {};
  const byDisplay = {};

  function getField(cells, idx) {
    if (idx < 0 || idx >= cells.length) return "";
    return cells[idx].trim();
  }

  for (let i = 1; i < lines.length; i++) {
    const row = lines[i].split(",");
    if (row.length === 1 && row[0].trim() === "") continue;

    const hexStr     = getField(row, idxHex);
    const displayStr = getField(row, idxDisplay);
    const faction    = getField(row, idxFaction);
    const name       = getField(row, idxName);

    // If no faction and no name, nothing to override
    if (!faction && !name) continue;

    const hexNum = hexStr ? parseInt(hexStr, 10) : NaN;
    const value = { faction, name };

    if (!Number.isNaN(hexNum)) {
      byHex[hexNum] = value;
    }
    if (displayStr) {
      byDisplay[displayStr] = value;
    }
  }

  console.log("CSV overrides:", {
    byHexKeys: Object.keys(byHex).length,
    byDisplayKeys: Object.keys(byDisplay).length
  });

  return { byHex, byDisplay };
}

// ------------------------------------------------------------
// BUILD HEX MAP – using HEX_DATA + CSV overrides
// ------------------------------------------------------------

function buildHexMap(lookup) {
  if (!Array.isArray(HEX_DATA)) {
    console.error("HEX_DATA is not available – check map-data.js");
    return;
  }

  hexMapEl.innerHTML = ""; // clear any existing content

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

    // Apply CSV overrides (faction/name from map.csv)
    const override =
      (lookup.byHex && lookup.byHex[cell.hex]) ||
      (lookup.byDisplay && lookup.byDisplay[String(cell.display)]);

    const faction = (override && override.faction) || cell.faction || "";
    const name    = (override && override.name)    || cell.name    || "";

    // Create the hex button
    const hexBtn = document.createElement("button");
    hexBtn.className = "hex";
    hexBtn.type = "button";

    // Attach data attributes
    hexBtn.dataset.row = cell.row;
    hexBtn.dataset.col = cell.col;
    hexBtn.dataset.hex = cell.hex;
    hexBtn.dataset.display = cell.display;

    if (cell.location) hexBtn.dataset.location = cell.location;
    if (faction)       hexBtn.dataset.faction  = faction;
    if (name)          hexBtn.dataset.name     = name;

    // Label inside hex
    const inner = document.createElement("div");
    inner.className = "hex-inner";
    inner.textContent = cell.display;

    hexBtn.appendChild(inner);
    colEl.appendChild(hexBtn);
  });

  console.log("Hex map built.");
}

// ------------------------------------------------------------
// INITIALISE – load map.csv, then build map
// ------------------------------------------------------------

function init() {
  // Try to fetch map.csv from the root of the site
  fetch("map.csv")
    .then(res => {
      if (!res.ok) {
        throw new Error("map.csv not found or failed to load");
      }
      return res.text();
    })
    .then(text => {
      const lookup = parseCsv(text);
      buildHexMap(lookup);
    })
    .catch(err => {
      console.warn("Falling back to factions from map-data.js only:", err);
      // No CSV available; build map using whatever is in map-data.js
      buildHexMap({ byHex: {}, byDisplay: {} });
    });
}

init();

// ------------------------------------------------------------
// CLICK HANDLER – show details of clicked hex
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
  // Only zoom when CTRL is held, otherwise let normal scrolling happen
  if (!e.ctrlKey) return;

  e.preventDefault();

  const zoomFactor = e.deltaY < 0 ? 1.1 : 0.9; // up = in, down = out
  zoom *= zoomFactor;

  // Clamp zoom range
  if (zoom < 0.3) zoom = 0.3;
  if (zoom > 6)   zoom = 6;

  hexMapEl.style.transformOrigin = "0 0";
  hexMapEl.style.transform = `scale(${zoom})`;
}, { passive: false });
