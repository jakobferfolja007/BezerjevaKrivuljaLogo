/* SEARCH FILTER */
const search = document.getElementById("search");
const items = document.querySelectorAll("#list li");

search.addEventListener("keyup", () => {
  const value = search.value.toLowerCase();
  items.forEach(item => {
    item.style.display = item.textContent.toLowerCase().includes(value)
      ? "block"
      : "none";
  });
});

/* SMOOTH SCROLL */
document.querySelectorAll("a[href^='#']").forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href"))
      .scrollIntoView({ behavior: "smooth" });
  });
});

const slike = [
  "img/akcija.jpg",
  "img/akcija2.jpg",
  "img/akcija3.jpg"
];

const heroImg = document.querySelector(".hero-img");

let index = 0;

function zamenjajSliko() {
  index = (index + 1) % slike.length;
  heroImg.src = slike[index];
}

setInterval(zamenjajSliko, 4000);

/* CANVAS LOGO */
const canvas = document.getElementById("logo");
const ctx = canvas.getContext("2d");

ctx.strokeStyle = "#ffcc00";
ctx.fillStyle = "#ffcc00";
ctx.lineWidth = 4;

// prilagoditev velikosti
ctx.scale(0.2, 0.2);
ctx.translate(-135, 0);

ctx.beginPath();
ctx.moveTo(464, 402);
ctx.bezierCurveTo(488, 11, 571, 18, 590, 427);
ctx.bezierCurveTo(591, 428, 640, 429, 640, 429);
ctx.bezierCurveTo(630, 35, 490, 12, 444, 201);
ctx.bezierCurveTo(375, 4, 257, 57, 247, 428);
ctx.bezierCurveTo(247, 429, 296, 431, 294, 431);
ctx.bezierCurveTo(306, 12, 406, 15, 415, 404);
ctx.bezierCurveTo(415, 404, 465, 404, 464, 402);
ctx.closePath();
ctx.fill();
