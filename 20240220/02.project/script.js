// DOM = 시스템
// Document Object Model
// = 문서 객체 모델 시스템
// Document = html 문서
// Object = 프로그래밍의 모든 전 과정 및 절차 => 객체화

// const h1 = document.querySelector("h1");
// const profile = document.querySelector("#profile");
// const img = document.querySelector("#profile img");
// const users = document.querySelectorAll(".user");
// const address = users[1];

// console.log(h1);
// console.log(profile);
// console.log(img);
// console.log(users);
// console.log(address);

// 예전 기본 문법
// const h1 = document.getElementsByTagName("h1");
// const profile = document.getElementById("profile");
// const users = document.getElementsByClassName("user");

// console.log(h1);
// console.log(profile);
// console.log(users);

// const desc = document.querySelector("#desc");
// // desc.innerText = "이름 : 홍길동";
// const descName = desc.innerText; //display none or 보여지지않을때는 보이는것만 가져옴
// console.log(descName);
// const descHtml = desc.innerHTML;
// console.log(descHtml);

// const descContext = desc.textContent; // 가려진 모든컨텐츠까지 다보여줌
// console.log(descContext);

// 이벤트 핸들러 => 이벤트 작동 실행!

// const title = document.querySelector("h1");
// // title.onclick = function () {
// //   title.innerText = "마이 프로필";
// // };
// title.onclick = () => (title.innerText = "마이 프로필");

// const userName = document.querySelector("#desc p");
// userName.onclick = () => (userName.innerHTML = "이름 : <b>영심이</b>");

// const pfImg = document.querySelector("#profile img");
// pfImg.onclick = () => (pfImg.src = "./images/pf2.png");

const title = document.querySelector("h1");
const userName = document.querySelectorAll(".user")[0];

title.onclick = () => {
  title.style.backgroundColor = "#000";
  title.style.color = "#fff";
};

// userName.onclick = () => {
//   userName.classList.add("clicked");
// };

// const clickedTrue = userName.classList.contains("clicked");
// console.log(clickedTrue);
// coctains() 함수는 참/거짓 위의 코드는 classList에 있으면 참 없으면 거짓 >> 조건문 사용가능

// userName.onclick = () => {
//   if (!userName.classList.contains("clicked")) {
//     userName.classList.add("clicked");
//   } else {
//     userName.classList.remove("clicked");
//   }
// };

// userName.onclick = () => {
//   userName.classList.toggle("clicked");
// };
