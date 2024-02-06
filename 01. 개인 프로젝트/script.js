const phone = document.querySelector(".hello-content");
const move = document.querySelector(".text-ani");
const gnb = document.querySelector("#main-bar");
const like = document.querySelector(".like");

console.log(like);

// gnb 컬러 변경
window.addEventListener("scroll", () => {
  if (window.scrollY > 680) {
    gnb.classList.add("active");
  } else {
    gnb.classList.remove("active");
  }
});

// 스크롤
// const observer = new IntersectionObserver((move) => {
//   move.forEach((move) => {
//     if (move.isIntersecting) {
//       move.target.classList.add("click");
//     } else {
//       move.target.classList.remove("click");
//     }
//   });
// });

// move.forEach((move) => observer.observe(move));

// 텍스트 타이핑
const textArr = ["H", "E", "L", "L", "O", ",", " ", "I", "'", "m"];

function textAni(randomArr) {
  if (randomArr.length > 0) {
    move.textContent += randomArr.shift();
    setTimeout(function () {
      textAni(randomArr);
    }, 500);
  }
}

textAni(textArr);

// 커서 깜빡임
function blink() {
  move.classList.toggle("active");
}
setInterval(blink, 400);

// 좋아요
like.addEventListener("click", () => {
  like.classList.toggle("active");
});
