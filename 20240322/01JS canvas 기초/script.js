// const canvas = document.querySelector("canvas");
// const ctx = canvas.getContext("2d");

// canvas는 API 태그라고 함!

// // 전체화면 설정방법
// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;

// 400*300 > 2차원의 도형 형성
// const ctx = canvas.getContext("2d");
// ctx.fillStyle = "rgb(200,0,0)";
// ctx.fillRect(10, 10, 50, 100);

// JS 세계관
// 시간 : 1초 / 밀리초 1000
// 각도 1도 45도 => deg X
// Radian => 라디언 / 래디언
// 호도법
// 1래디언 = 우리가 일상에서 이야기하는 180도 = PI/180
// 1래디언 = PI / 180 = 180도 = (PI / 180) * 180 => (PI * 1)
// Math.PI * 1

// 90도 > Math.PI * 0.5
// 270도 > Math.PI * 1.5

// 2래디언 = 360도 = PI * 2
// Math.PI * 2

// const radians = (Math.PI / 180) * 180;

const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

let triangle = new Path2D();
triangle.moveTo(180, 190);
triangle.lineTo(220, 190);
triangle.lineTo(200, 220);
triangle.closePath();

let circle = new Path2D();
circle.arc(200, 250, 30, 0, Math.PI * 2);

ctx.stroke(triangle);
ctx.stroke(circle);

ctx.beginPath();
ctx.moveTo(150, 60);
ctx.bezierCurveTo(90, 120, 240, 10, 270, 80);
ctx.stroke();

ctx.beginPath();
// ctx.moveTo(100, 180);
// ctx.quadraticCurveTo(100, 50, 120, 180);
ctx.moveTo(50, 200);
ctx.quadraticCurveTo(100, 50, 150, 200);
ctx.quadraticCurveTo(200, 150, 250, 200);
ctx.quadraticCurveTo(300, 50, 350, 200);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(180, 100);
ctx.quadraticCurveTo(200, 130, 220, 100);
ctx.stroke();

ctx.strokeStyle = "blue";
ctx.scale(1, 0.7);
ctx.beginPath();
ctx.arc(200, 150, 80, 0, Math.PI * 2, true);
ctx.stroke();

ctx.fillStyle = "balck";
ctx.beginPath();
ctx.arc(160, 120, 10, 0, Math.PI * 2, true);
ctx.arc(240, 120, 10, 0, Math.PI * 2, true);
// ctx.arc(200, 180, 10, 0, Math.PI * 2, true);
ctx.fill();

// // 타원
// ctx.strokeStyle = "red";
// ctx.beginPath();
// ctx.ellipse(200, 70, 80, 50, 0, 0, Math.PI * 2);
// ctx.stroke();

// ctx.strokeStyle = "blue";
// ctx.beginPath();
// ctx.ellipse(150, 200, 80, 50, (Math.PI / 180) * -30, 0, Math.PI * 2);
// ctx.stroke();

// // 반원
// ctx.fillStyle = "pink";
// ctx.beginPath();
// ctx.arc(120, 100, 50, 0, Math.PI * 1, true);
// ctx.arc(200, 100, 50, 0, Math.PI * 1, false);
// ctx.fill();

// ctx.beginPath();
// ctx.arc(120, 200, 50, Math.PI * 0.5, Math.PI * 1.5, false);
// ctx.stroke();
// ctx.closePath();

// // 호
// ctx.strokeStyle = "skyblue";
// ctx.beginPath();
// ctx.arc(200, 200, 50, 0, (Math.PI / 180) * 60, false);
// ctx.stroke();

// // 원
// ctx.fillStyle = "pink";
// ctx.strokeStyle = "red";

// ctx.beginPath();
// // true는 반시계방향
// // html에서 인라인요소로 너비높이 넣어야함 CSS X
// // arc(x, y , 반지름, 시작각도, 끝나는 각도, 시작방향)
// ctx.arc(200, 150, 100, 0, Math.PI * 2, true);
// ctx.closePath();
// ctx.fill();
// ctx.stroke();

// 삼각형
// ctx.beginPath();
// ctx.moveTo(50, 50);
// ctx.lineTo(150, 100);
// ctx.lineTo(50, 150);
// ctx.closePath();
// // ctx.lineTo(50, 50);
// ctx.stroke();

// ctx.beginPath();
// ctx.moveTo(150, 100);
// ctx.lineTo(250, 50);
// ctx.lineTo(250, 150);
// ctx.closePath();
// ctx.fillStyle = "pink";
// ctx.fill();
// // ctx.stroke();

// 선
// ctx.beginPath();
// ctx.moveTo(50, 50);
// ctx.lineTo(200, 200);
// ctx.stroke();

// 사각형
// ctx.fillStyle = "rgb(200,0,0)";
// ctx.fillRect(10, 10, 200, 100);

// ctx.strokeStyle = "black";
// ctx.strokeRect(10, 10, 200, 100);

// ctx.fillStyle = "blue";
// ctx.fillRect(50, 50, 120, 100);

// ctx.clearRect(70, 80, 80, 45);
