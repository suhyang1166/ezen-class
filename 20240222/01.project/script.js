// const button = document.querySelector("button");

// // 변수 뒤에 붙을수 있는건 2가지
// // .속성 / .메서드

// const btnFnc = () => {
//   document.body.style.backgroundColor = "green";
// };

// button.onclick = btnFnc;

// const result = document.querySelector("#result");

// document.body.onkeydown = (e) => {
//   result.innerText = `code : ${e.code}, key : ${e.key}`;
// };

// const button = document.querySelector("button");

// // button.onclick = () => {
// //   document.body.style.backgroundColor = "crimson";
// // };

// // button.addEventListener("이벤트 요소", () => {

// // })
// button.addEventListener("click", () => {
//   document.body.style.backgroundColor = "pink";
// });

// const form = document.querySelector("form");
// const button = document.querySelector("input[type='submit']");

// // form.addEventListener("submit", () => {

// // });

// button.addEventListener("click", (e) => {
//   e.preventDefault();
//   const input = document.querySelector("input[type='text']");
//   const word = input.value;
//   const result = document.querySelector(".result");

//   const count = word.length;
//   result.innerText = count;
//   input.value = "";

//   if (count >= 10) {
//   } else {
//     alert("ID는 10자 이상이어야 합니다.");
//   }
// });

// const box = document.querySelector("#box");
// box.addEventListener("click", (e) => {
//   alert(`이벤트 발생 위치 : ${e.pageX}, ${e.pageY}`);
// });

document.body.addEventListener("keydown", (e) => {
  const result = document.querySelector(".result");
  result.innerText = `
  code: ${e.code},
  key: ${e.key}
  `;
});
