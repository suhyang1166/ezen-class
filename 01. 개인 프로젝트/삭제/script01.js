const phone = document.querySelector(".hello-content");
const target = document.querySelector(".text-ani");
const gnb = document.querySelector("#main-bar");

ScrollOut();

// 텍스트 타이핑
const textArr = ["H", "E", "L", "L", "O", ",", " ", "I", "'", "m"];

function textAni(randomArr) {
  if (randomArr.length > 0) {
    target.textContent += randomArr.shift();
    setTimeout(function () {
      textAni(randomArr);
    }, 150);
  }
}

textAni(textArr);

// 커서 깜빡임
function blink() {
  target.classList.toggle("active");
}
setInterval(blink, 400);
