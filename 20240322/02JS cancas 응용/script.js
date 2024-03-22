const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

ctx.fillStyle = "rgb(248,189,145)";
ctx.beginPath();
ctx.arc(130, 180, 50, 0, Math.PI * 2);
ctx.arc(290, 160, 30, 0, Math.PI * 2);
ctx.fill();

// ctx.scale(1, 0.8);

// face
ctx.fillStyle = "rgb(248,189,145)";
ctx.beginPath();
ctx.arc(200, 140, 90, 0, Math.PI * 2);
ctx.fill();

// eye
ctx.beginPath();
ctx.fillStyle = "black";
ctx.arc(170, 120, 20, 0, Math.PI * 2);
ctx.arc(230, 120, 20, 0, Math.PI * 2);
ctx.moveTo(150, 200);
ctx.ellipse(180, 200, 1, 10, Math.PI * 0.5, 0, Math.PI * 2);
ctx.fill();

// eye
ctx.beginPath();
ctx.fillStyle = "white";
ctx.arc(170, 120, 8, 0, Math.PI * 2);
ctx.arc(230, 120, 8, 0, Math.PI * 2);
ctx.fill();

ctx.beginPath();
ctx.strokeStyle = "black";
ctx.lineWidth = 2;
ctx.arc(170, 100, 20, 0, Math.PI * 1, true);
ctx.moveTo(250, 100);
ctx.arc(230, 100, 20, 0, Math.PI * 1, true);
ctx.stroke();
