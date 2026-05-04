// ===== CURSEUR CUSTOM =====
document.addEventListener("mousemove", (e) => {
  const cursor = document.querySelector(".cursor");
  if (!cursor) return;

  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";
});


// ===== SLIDER MAP (SÉCURISÉ) =====
const slides = document.querySelectorAll(".map_slider img");
let index = 0;

function changeSlide() {
  slides.forEach(s => s.classList.remove("active"));

  index++;
  if (index >= slides.length) index = 0;

  if (slides[index]) {
    slides[index].classList.add("active");
  }
}

const map = document.querySelector(".map_box");

if (map && slides.length > 0) {
  let interval;

  map.addEventListener("mouseenter", () => {
    interval = setInterval(changeSlide, 2000);
  });

  map.addEventListener("mouseleave", () => {
    clearInterval(interval);
  });
}
document.addEventListener("mousemove", (e) => {
  document.body.style.setProperty("--x", e.clientX + "px");
  document.body.style.setProperty("--y", e.clientY + "px");
});


// ===== GRILLE INTERACTIVE =====
const bgEffect = document.querySelector('.bg-effect');
const squareSize = 40;
let columns = 0;
let rows = 0;
let squares = [];

function createGrid() {
  if (!bgEffect) return;
  bgEffect.innerHTML = '';
  
  columns = Math.floor(window.innerWidth / squareSize) + 2;
  rows = Math.floor(window.innerHeight / squareSize) + 4; // Marge pour l'animation
  squares = [];
  
  const totalSquares = columns * rows;

  for (let i = 0; i < totalSquares; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    bgEffect.appendChild(square);
    squares.push(square);
  }
}

createGrid();
window.addEventListener('resize', createGrid);

// Illuminer dynamiquement le carré ET ses voisins en temps réel
document.addEventListener("mousemove", (e) => {
  if (!bgEffect || squares.length === 0) return;
  
  // On calcule la position de la souris par rapport à la grille (même quand elle bouge)
  const rect = bgEffect.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  
  const col = Math.floor(x / squareSize);
  const row = Math.floor(y / squareSize);
  
  const radius = 2; // Rayon : 2 carrés autour de la souris
  
  for (let r = row - radius; r <= row + radius; r++) {
    for (let c = col - radius; c <= col + radius; c++) {
      if (r >= 0 && r < rows && c >= 0 && c < columns) {
        // Distance pour savoir si on est au centre ou sur les bords
        const dist = Math.sqrt(Math.pow(r - row, 2) + Math.pow(c - col, 2));
        
        if (dist <= radius) {
           const index = r * columns + c;
           const square = squares[index];
           
           if (square) {
             // Carré central vs carrés autour
             if (dist < 1) {
                square.classList.add("glow-center");
                square.classList.remove("glow-edge");
             } else {
                square.classList.add("glow-edge");
                square.classList.remove("glow-center");
             }
             
             // On annule le fade-out précédent s'il y en avait un
             if (square.glowTimeout) clearTimeout(square.glowTimeout);
             
             // On déclenche le fade-out CSS peu après le passage
             square.glowTimeout = setTimeout(() => {
                square.classList.remove("glow-center", "glow-edge");
             }, 100);
           }
        }
      }
    }
  }
});