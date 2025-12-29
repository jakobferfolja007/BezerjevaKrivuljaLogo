const canvas = document.getElementById("logoCanvas");
const ctx = canvas.getContext("2d");

ctx.strokeStyle = "#ffcc00";
ctx.lineWidth = 4;
ctx.translate(-135, 0); // omogoči premik logota v levo
ctx.beginPath();
ctx.moveTo(464, 402);// en moveTo da se v celoti pobarva M
ctx.bezierCurveTo(488, 11, 571, 18, 590, 427);
ctx.bezierCurveTo(591, 428, 640, 429, 640, 429);
ctx.bezierCurveTo(630, 35, 490, 12, 444, 201);
ctx.bezierCurveTo(375, 4, 257, 57, 247, 428);
ctx.bezierCurveTo(247, 429, 296, 431, 294, 431);
ctx.bezierCurveTo(306, 12, 406, 15, 415, 404);
ctx.bezierCurveTo(415, 404, 465, 404, 464, 402);

ctx.closePath();// zapremo pot da je ena oblika
ctx.fillStyle = "#ffcc00";
ctx.fill();


