// script.js

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
  if (!lines.length) return { byHex: {} };

  const headers = lines[0].split(",").map(h => h.trim().toLowerCase());
  const idxHex     = headers.indexOf("hex");
  const idxDisplay = headers.indexOf("display");
  const idxFaction = headers.indexOf("faction");
  const idxName    = headers.indexOf("name");
  const idxLoc     = headers.indexOf("location");

  const get = (cells, idx) =>
    idx < 0 || idx >= cells.length ? "" : cells[idx].trim();

  const byHex = {};

  for (let i = 1; i < lines.length; i++) {
    const row = lines[i].split(",");
    if (row.length === 1 && row[0].trim() === "") continue;

    const hexStr  = get(row, idxHex);
    if (!hexStr) continue;
    const hexNum = parseInt(hexStr, 10);
    if (Number.isNaN(hexNum)) continue;

    byHex[hexNum] = {
      display: get(row, idxDisplay),
      faction: get(row, idxFaction),
      name:    get(row, idxName),
      location:get(row, idxLoc)
    };
  }

  console.log("map.csv entries:", Object.keys(byHex).length);
  return { byHex };
}

// factions.csv: Faction,Hex (hex color) OR faction,color (rgba)
function parseFactionsCsv(text) {
  const lines = text.split(/\r?\n/).filter(l => l.trim().length > 0);
  if (!lines.length) return { ...DEFAULT_FACTION_COLORS };

  const headers = lines[0].split(",").map(h => h.trim());
  const lower   = headers.map(h => h.toLowerCase());

  let idxFaction = lower.indexOf("faction");
  if (idxFaction === -1) idxFaction = lower.indexOf("name"); // just in case

  // color can be "color" or "hex"
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
    let   color   = get(row, idxColor);
    if (!faction || !color) continue;

    // convert #rrggbb → rgba(..., 0.4)
    if (color.startsWith("#")) {
      const rgba = hexToRgba(color, 0.4);
      if (rgba) color = rgba;
    }

    colors[faction] = color;
  }

  console.log("factions colors (merged):", colors);
  return colors;
}

// ---------- build grid ----------

function buildHexMap(mapLookup, factionColors) {
  if (!Array.isArray(HEX_DATA)) {
    console.error("HEX_DATA missing – check map-data.js");
    return;
  }

  const overrides = mapLookup.byHex || {};
  hexMapEl.innerHTML = "";

  let currentCol = -1;
  let colEl = null;

  HEX_DATA.forEach(cell => {
    if (cell.col !== currentCol) {
      currentCol = cell.col;
      colEl = document.createElement("div");
      colEl.className = "hex-col";
      colEl.dataset.col = cell.col;
      hexMapEl.appendChild(colEl);
    }

    const baseFaction  = cell.faction  || "";
    const baseName     = cell.name     || "";
    const baseLocation = cell.location || "";
    const baseDisplay  = cell.display  || String(cell.hex);

    const o = overrides[cell.hex];

    const faction  = o && ("faction" in o)  ? (o.faction  || "") : baseFaction;
    const name     = o && ("name" in o)     ? (o.name     || "") : baseName;
    const location = o && ("location" in o) ? (o.location || "") : baseLocation;
    const display  = o && ("display" in o)  ? (o.display  || baseDisplay) : baseDisplay;

    const hexBtn = document.createElement("button");
    hexBtn.className = "hex";
    hexBtn.type = "button";

    hexBtn.dataset.row = cell.row;
    hexBtn.dataset.col = cell.col;
    hexBtn.dataset.hex = cell.hex;
    hexBtn.dataset.display = display;
    if (location) hexBtn.dataset.location = location;
    if (faction)  hexBtn.dataset.faction = faction;
    if (name)     hexBtn.dataset.name = name;

    const inner = document.createElement("div");
    inner.className = "hex-inner";
    inner.textContent = display;

    const color = faction && factionColors[faction];
    inner.style.backgroundColor = color || "rgba(0,0,0,0)";

    hexBtn.appendChild(inner);
    colEl.appendChild(hexBtn);
  });

  console.log("Hex map built.");
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
      console.warn("Could not load map.csv; using only map-data.js values.", err);
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
