// script.js
// Requires: map-data.js (defines HEX_ROWS, HEX_COLS, HEX_DATA)

// DOM references
const hexMapEl = document.getElementById("hex-map");
const infoEl = document.getElementById("hex-info");

console.log("Loaded HEX_ROWS =", HEX_ROWS, "HEX_COLS =", HEX_COLS);
console.log("HEX_DATA length:", HEX_DATA.length);

// Build the hex map as COLUMNS (101–126, 201–226, etc.)
let currentCol = -1;
let colEl = null;

HEX_DATA.forEach(cell => {
  // When column changes, start a new .hex-col
  if (cell.col !== currentCol) {
    currentCol = cell.col;
    colEl = document.createElement("div");
    colEl.className = "hex-col";
    colEl.dataset.col = cell.col;
    hexMapEl.appendChild(colEl);
  }

  // Create the hex button
  const hexBtn = document.createElement("button");
  hexBtn.className = "hex";
  hexBtn.type = "button";

  // Attach data for later
  hexBtn.dataset.row = cell.row;        // 0..25
  hexBtn.dataset.col = cell.col;        // 0..75
  hexBtn.dataset.hex = cell.hex;        // raw number, e.g. 101
  hexBtn.dataset.display = cell.display; // label, e.g. 101 or E2701

  if (cell.location) hexBtn.dataset.location = cell.location;
  if (cell.faction) hexBtn.dataset.faction = cell.faction;
  if (cell.name) hexBtn.dataset.name = cell.name;

  // Inner label
  const inner = document.createElement("div");
  inner.className = "hex-inner";
  inner.textContent = cell.display;

  hexBtn.appendChild(inner);
  colEl.appendChild(hexBtn);
});

// Click handler: show details of clicked hex
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
  if (details.faction) msg += ` — Faction: ${details.faction}`;
  if (details.name) msg += ` — Name: ${details.name}`;
  infoEl.textContent = msg;

  console.log("Clicked hex:", details);
});
