const canvas = document.getElementById("logoCanvas");
const ctx = canvas.getContext("2d");

ctx.strokeStyle = "#ffcc00";
ctx.lineWidth = 4;
ctx.beginPath();
ctx.translate(-78, -123);
ctx.scale(0.9, 0.9);

ctx.moveTo(553, 584);
ctx.bezierCurveTo(561, 333, 468, 98, 440, 561); 

ctx.moveTo(440, 561); 
ctx.bezierCurveTo(440, 561, 398, 559, 399, 561); 

ctx.moveTo(397,562);
ctx.bezierCurveTo( 384, 167, 284, 244, 282, 581);

ctx.moveTo(284, 582);
ctx.bezierCurveTo(285, 583, 240, 585, 243, 583);

ctx.moveTo(241, 584);
ctx.bezierCurveTo(248, 187, 390, 229, 418, 378);

ctx.moveTo(418, 378); 
ctx.bezierCurveTo(457, 222, 588, 193, 598, 588);


ctx.moveTo(555, 582); 
ctx.bezierCurveTo(555, 582, 594, 583, 595, 583);


ctx.stroke();
ctx.closePath();
ctx.fillStyle = "#ffcc00";
ctx.fill();


