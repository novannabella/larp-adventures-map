// script.js
// Requires: map-data.js

// DOM references
const hexMapEl = document.getElementById("hex-map");
const infoEl = document.getElementById("hex-info");

console.log("Loaded HEX_ROWS =", HEX_ROWS, "HEX_COLS =", HEX_COLS);
console.log("HEX_DATA length:", HEX_DATA.length);

// Build the hex map
let currentRow = -1;
let rowEl = null;

HEX_DATA.forEach(cell => {
  // Start a new visual row when row index changes
  if (cell.row !== currentRow) {
    currentRow = cell.row;
    rowEl = document.createElement("div");
    rowEl.className = "hex-row";
    rowEl.dataset.row = cell.row;
    hexMapEl.appendChild(rowEl);
  }

  // Create hex element
  const hexBtn = document.createElement("button");
  hexBtn.className = "hex";
  hexBtn.type = "button";

  // Data attributes for use later
  hexBtn.dataset.row = cell.row;
  hexBtn.dataset.col = cell.col;
  hexBtn.dataset.hex = cell.hex;
  hexBtn.dataset.display = cell.display;

  if (cell.location) hexBtn.dataset.location = cell.location;
  if (cell.faction) hexBtn.dataset.faction = cell.faction;
  if (cell.name) hexBtn.dataset.name = cell.name;

  // Inner label
  const inner = document.createElement("div");
  inner.className = "hex-inner";
  inner.textContent = cell.display;

  hexBtn.appendChild(inner);
  rowEl.appendChild(hexBtn);
});

// Attach click handler
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

  // Show data in the info box
  let msg = `Hex ${details.display}`;
  if (details.location) msg += ` (${details.location})`;
  if (details.faction) msg += ` — Faction: ${details.faction}`;
  if (details.name) msg += ` — Name: ${details.name}`;

  infoEl.textContent = msg;

  // Log details to console for debugging
  console.log("Clicked hex:", details);
});
