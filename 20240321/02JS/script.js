// li를 클릭했을때 > 이미지+컬러 교체
// li를 가져온다 > 클릭이벤트 > 반복문 사용
// 이미지의 인덱스와 버튼의 인덱스가 일치 할떄의 조건문으로 엑티브값 활성화

// const contents = document.querySelectorAll(".main");
// const btns = document.querySelectorAll("li");

// console.log(contents, btns);

// btns.forEach((btn) => {
//   btn.addEventListener("click", (e) => {
//     const target = e.target.dataset.index;
//     for (let i = 0; i < contents.length; i++) {
//       contents[i].classList.remove("active");
//       btns[i].classList.remove("active");
//     }
//     contents[target].classList.add("active");
//     btns[target].classList.add("active");
//   });
// });

const buttons = document.querySelectorAll("label");
const tabItems = document.querySelector(".tabs .items");
const h1 = tabItems.querySelectorAll("h1");

buttons.forEach((button, index) => {
  button.addEventListener("click", () => {
    tabItems.style.left = `${-index * 100}%`;
    button.classList.add("active");

    buttons.forEach((button) => button.classList.remove("active"));
    button.classList.add("active");

    h1.forEach((title) => title.classList.remove("active"));
    h1[index].classList.add("active");
  });
});
