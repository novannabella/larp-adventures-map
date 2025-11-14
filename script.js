// script.js
// Requires map-data.js (defines HEX_ROWS, HEX_COLS, HEX_DATA)

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

  // Attach data attributes
  hexBtn.dataset.row = cell.row;
  hexBtn.dataset.col = cell.col;
  hexBtn.dataset.hex = cell.hex;
  hexBtn.dataset.display = cell.display;

  if (cell.location) hexBtn.dataset.location = cell.location;
  if (cell.faction) hexBtn.dataset.faction = cell.faction;
  if (cell.name) hexBtn.dataset.name = cell.name;

  // Label inside hex
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


// ------------------------------------------------------------
// CTRL + SCROLL ZOOM
// ------------------------------------------------------------

const container = document.getElementById("hex-map-container");
let zoom = 1;

// Only zoom when the user holds CTRL
container.addEventListener("wheel", (e) => {
  if (!e.ctrlKey) return;          // ← this line makes zoom require Ctrl
  e.preventDefault();

  const zoomFactor = e.deltaY < 0 ? 1.1 : 0.9;
  zoom *= zoomFactor;

  // Clamp zoom to prevent it from getting tiny or huge
  if (zoom < 0.3) zoom = 0.3;
  if (zoom > 6) zoom = 6;

  hexMapEl.style.transformOrigin = "0 0";
  hexMapEl.style.transform = `scale(${zoom})`;

}, { passive: false });
