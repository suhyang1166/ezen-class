const phone = document.querySelector(".hello-content");
const target = document.querySelector(".text-ani");
const gnb = document.querySelector("#main-bar");

console.log(gnb);

// gnb 컬러 변경
window.addEventListener("scroll", () => {
  if (window.scrollY > 680) {
    gnb.classList.add("active");
  } else {
    gnb.classList.remove("active");
  }
});

// 텍스트 타이핑
const textArr = ["H", "E", "L", "L", "O", ",", " ", "I", "'", "m"];

function textAni(randomArr) {
  if (randomArr.length > 0) {
    target.textContent += randomArr.shift();
    setTimeout(function () {
      textAni(randomArr);
    }, 500);
  }
}

textAni(textArr);

// 커서 깜빡임
function blink() {
  target.classList.toggle("active");
}
setInterval(blink, 400);
