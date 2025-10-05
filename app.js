// Load saved points from localStorage or initialize
let points = JSON.parse(localStorage.getItem("peacemakerPoints")) || {
  Partents: 0,
  James: 0,
  Ruby: 0,
  Asa: 0,
  Juliette: 0,
  Oliver: 0,
};

// Update UI with stored points
function updateUI() {
  document.querySelectorAll(".card").forEach(card => {
    const name = card.dataset.name;
    const span = card.querySelector("span");
    span.textContent = points[name] || 0;
  });
}

updateUI();

// Add event listeners to cards
document.querySelectorAll(".card").forEach(card => {
  card.addEventListener("click", () => {
    const name = card.dataset.name;
    points[name] += 1;
    localStorage.setItem("peacemakerPoints", JSON.stringify(points));
    updateUI();
  });
});

// Reset button
document.getElementById("reset").addEventListener("click", () => {
  if (confirm("Are you sure you want to reset all points?")) {
    Object.keys(points).forEach(key => points[key] = 0);
    localStorage.setItem("peacemakerPoints", JSON.stringify(points));
    updateUI();
  }
});

// Register service worker
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("service-worker.js");
  });
}
