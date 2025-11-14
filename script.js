// script.js
// NO map-data.js required. We build everything from map.csv + factions.csv.

const hexMapEl = document.getElementById("hex-map");
const infoEl = document.getElementById("hex-info");
const container = document.getElementById("hex-map-container");

// Safety net colors in case factions.csv is missing
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

// ---------- helpers ----------

function hexToRgba(hex, alpha) {
  if (!hex) return null;
  hex = hex.trim();
  if (hex.startsWith("#")) hex = hex.slice(1);
  if (hex.length !== 6) return null;
  const r = parseInt(hex.slice(0, 2), 16);
  const g = parseInt(hex.slice(2, 4), 16);
  const b = parseInt(hex.slice(4, 6), 16);
  if ([r, g, b].some(n => Number.isNaN(n))) return null;
  return `rgba(${r},${g},${b},${alpha})`;
}

// ---------- CSV parsers ----------

// map.csv: hex,display,faction,name,location
function parseMapCsv(text) {
  const lines = text.split(/\r?\n/).filter(l => l.trim().length > 0);
  if (!lines.length) return [];

  const headers = lines[0].split(",").map(h => h.trim().toLowerCase());
  const idxHex     = headers.indexOf("hex");
  const idxDisplay = headers.indexOf("display");
  const idxFaction = headers.indexOf("faction");
  const idxName    = headers.indexOf("name");
  const idxLoc     = headers.indexOf("location");

  const get = (cells, idx) =>
    idx < 0 || idx >= cells.length ? "" : cells[idx].trim();

  const result = [];

  for (let i = 1; i < lines.length; i++) {
    const row = lines[i].split(",");
    if (row.length === 1 && row[0].trim() === "") continue;

    const hexStr  = get(row, idxHex);
    if (!hexStr) continue;
    const hexNum = parseInt(hexStr, 10);
    if (Number.isNaN(hexNum)) continue;

    const display = get(row, idxDisplay) || String(hexNum);
    const faction = get(row, idxFaction);
    const name    = get(row, idxName);
    const loc     = get(row, idxLoc);

    // derive col & row from the hex code: e.g. 1307 → col=13, row=7
    const col = Math.floor(hexNum / 100);
    const rowNum = hexNum % 100;

    result.push({
      hex: hexNum,
      display,
      faction,
      name,
      location: loc,
      row: rowNum,
      col
    });
  }

  console.log("map.csv rows parsed:", result.length);
  return result;
}

// factions.csv: Faction,Hex (hex color) or faction,color
function parseFactionsCsv(text) {
  const lines = text.split(/\r?\n/).filter(l => l.trim().length > 0);
  if (!lines.length) return { ...DEFAULT_FACTION_COLORS };

  const headers = lines[0].split(",").map(h => h.trim());
  const lower   = headers.map(h => h.toLowerCase());

  let idxFaction = lower.indexOf("faction");
  if (idxFaction === -1) idxFaction = lower.indexOf("name");

  let idxColor = lower.indexOf("color");
  if (idxColor === -1) idxColor = lower.indexOf("hex");

  if (idxFaction === -1 || idxColor === -1) {
    console.warn("factions.csv headers not recognized, using built-in colors only");
    return { ...DEFAULT_FACTION_COLORS };
  }

  const get = (cells, idx) =>
    idx < 0 || idx >= cells.length ? "" : cells[idx].trim();

  const colors = { ...DEFAULT_FACTION_COLORS };

  for (let i = 1; i < lines.length; i++) {
    const row = lines[i].split(",");
    if (row.length === 1 && row[0].trim() === "") continue;

    const faction = get(row, idxFaction);
    let color     = get(row, idxColor);
    if (!faction || !color) continue;

    if (color.startsWith("#")) {
      const rgba = hexToRgba(color, 0.4); // Ensure transparency is applied to hex codes
      if (rgba) color = rgba;
    }

    colors[faction] = color;
  }

  console.log("factions colors:", colors);
  return colors;
}

// ---------- build grid from CSV only ----------

function buildHexMap(mapData, factionColors) {
  hexMapEl.innerHTML = "";

  if (!Array.isArray(mapData) || mapData.length === 0) {
    console.error("No map data to build from.");
    return;
  }

  // Group cells by column
  const colsMap = new Map();
  let minCol = Infinity;
  let maxCol = -Infinity;

  for (const cell of mapData) {
    if (!colsMap.has(cell.col)) colsMap.set(cell.col, []);
    colsMap.get(cell.col).push(cell);
    if (cell.col < minCol) minCol = cell.col;
    if (cell.col > maxCol) maxCol = cell.col;
  }

  for (let col = minCol; col <= maxCol; col++) {
    const colCells = colsMap.get(col);
    if (!colCells) continue;

    // sort by row ascending (top to bottom)
    colCells.sort((a, b) => a.row - b.row);

    const colEl = document.createElement("div");
    colEl.className = "hex-col";
    colEl.dataset.col = col;
    hexMapEl.appendChild(colEl);

    for (const cell of colCells) {
      const hexBtn = document.createElement("button");
      hexBtn.className = "hex";
      hexBtn.type = "button";

      hexBtn.dataset.row = cell.row;
      hexBtn.dataset.col = cell.col;
      hexBtn.dataset.hex = cell.hex;
      hexBtn.dataset.display = cell.display;
      if (cell.location) hexBtn.dataset.location = cell.location;
      if (cell.faction)  hexBtn.dataset.faction = cell.faction;
      if (cell.name)     hexBtn.dataset.name = cell.name;

      // **FIX**: Apply faction color to the outer .hex element.
      const color = cell.faction && factionColors[cell.faction];
      hexBtn.style.backgroundColor = color || "rgba(0,0,0,0)";

      const inner = document.createElement("div");
      inner.className = "hex-inner";
      inner.textContent = cell.display;

      // The inner content's background is now redundant/transparent.
      inner.style.backgroundColor = "rgba(0,0,0,0)"; 

      hexBtn.appendChild(inner);
      colEl.appendChild(hexBtn);
    }
  }

  console.log("Hex map built purely from CSV.");
}

// ---------- init ----------

function init() {
  const mapPromise = fetch("map.csv")
    .then(res => {
      if (!res.ok) throw new Error("map.csv failed to load");
      return res.text();
    })
    .then(parseMapCsv)
    .catch(err => {
      console.error("Could not load map.csv:", err);
      return [];
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
    ([mapData, factionColors]) => buildHexMap(mapData, factionColors)
  );
}

init();

// ---------- click info ----------

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

// ---------- CTRL + scroll zoom ----------

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
