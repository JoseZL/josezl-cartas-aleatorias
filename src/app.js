import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

const cartaDiv = document.getElementById("carta");

function cartaAleatoria() {
  const palos = [
    { nombre: "Corazones", simbolo: "♥", color: "red" },
    { nombre: "Picas", simbolo: "♠", color: "black" },
    { nombre: "Tréboles", simbolo: "♣", color: "black" },
    { nombre: "Diamantes", simbolo: "♦", color: "red" }
  ];
  const valores = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
  
  const palo = palos[Math.floor(Math.random() * palos.length)];
  const valor = valores[Math.floor(Math.random() * valores.length)];

  return { valor, palo };
}

function generarCarta() {
  const { valor, palo } = cartaAleatoria();
  cartaDiv.innerHTML = `
    <div class="esquina-arriba" style="color:${palo.color}">${palo.simbolo}</div>
    <div class="valor-centro">${valor}</div>
    <div class="esquina-abajo" style="color:${palo.color}">${palo.simbolo}</div>
  `;

  const ancho = document.getElementById("ancho").value;
  const alto = document.getElementById("alto").value;

  if (ancho) cartaDiv.style.width = ancho + "px";
  if (alto) cartaDiv.style.height = alto + "px";
}

generarCarta();

setInterval(generarCarta, 10000);
