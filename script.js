// Grid dimensions
const ROWS = 26;
const COLS = 76;

// Current color mode for clicks
let currentMode = "highlight-1"; // default

const hexMapEl = document.getElementById("hex-map");

// ---- Build the hex grid ----

let id = 1;
for (let row = 0; row < ROWS; row++) {
  const rowEl = document.createElement("div");
  rowEl.className = "hex-row";
  rowEl.dataset.row = row;

  for (let col = 0; col < COLS; col++) {
    const hexBtn = document.createElement("button");
    hexBtn.className = "hex highlight-none";
    hexBtn.type = "button";
    hexBtn.dataset.row = row;
    hexBtn.dataset.col = col;
    hexBtn.dataset.id = id;

    const inner = document.createElement("div");
    inner.className = "hex-inner";
    inner.textContent = id; // display number; you can swap to row/col labels if you want

    hexBtn.appendChild(inner);
    rowEl.appendChild(hexBtn);

    id++;
  }

  hexMapEl.appendChild(rowEl);
}

// ---- Color mode buttons ----

const buttons = {
  none: document.getElementById("mode-none"),
  highlight1: document.getElementById("mode-highlight1"),
  highlight2: document.getElementById("mode-highlight2"),
};

function setMode(mode) {
  currentMode = mode;
  Object.values(buttons).forEach((btn) => btn.classList.remove("active"));
  if (mode === "highlight-none") buttons.none.classList.add("active");
  if (mode === "highlight-1") buttons.highlight1.classList.add("active");
  if (mode === "highlight-2") buttons.highlight2.classList.add("active");
}

// Initialize
setMode("highlight-1");

buttons.none.addEventListener("click", () => setMode("highlight-none"));
buttons.highlight1.addEventListener("click", () => setMode("highlight-1"));
buttons.highlight2.addEventListener("click", () => setMode("highlight-2"));

// ---- Click handling on hexes ----

hexMapEl.addEventListener("click", (e) => {
  const hex = e.target.closest(".hex");
  if (!hex) return;

  // Remove existing highlight classes
  hex.classList.remove("highlight-none", "highlight-1", "highlight-2");
  // Apply current mode
  hex.classList.add(currentMode);

  // Example: log which hex was clicked
  const id = hex.dataset.id;
  const row = hex.dataset.row;
  const col = hex.dataset.col;
  console.log(`Clicked hex ID=${id} (row=${row}, col=${col})`);
});
