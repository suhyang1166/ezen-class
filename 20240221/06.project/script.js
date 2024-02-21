// input박스 가져오기 / ul 태그 가져오기
// input 박스가 ""가 아닐때 등록버튼을 누르면 li 생성하기
// 버튼을 클릭할때 e 발생시 넘어가지 않게 하기

// const todo = document.querySelector("input[type='text']");
// const btn = document.querySelector("input[type='submit']");
// const ul = document.querySelector("ul");
// console.log(todo);
// console.log(btn);
// console.log(ul);

// const btn.addEventListener("click", () => {
// if (todo.value !== "") {
//   const li = document.createElement("li");
//   console.log(li);
//   ul.children();
//   li.innerText = todo.value;
// }
// })

// const button = (e) => {
//   e.preventDefault();
//   btn.onclick(button);
// };

// btn.addEventListener("click", button);

// 1.사용자가 입력하는 값을 찾아오기 위해 입력창 정의
// 2.사용자가 클릭할 버튼에 정의
// 3.버튼을 클릭했을때 이벤트에 대한 기능 정의
// 4.li 태그 DOM에서 생성 => 입력창을 통해서 전달받은 값을 li태그에 삽입 => ul 태그 자식요소
// 5.사용자가 입력한 값을 출력할 공간에 대한 정의

const form = document.querySelector("form");
const input = document.querySelector("form input[type='text']");
const ul = document.querySelector("ul");

const formFnc = (e) => {
  e.preventDefault();
  if (input.value !== "") {
    const li = document.createElement("li");
    li.innerText = input.value;
    ul.appendChild(li);
    input.value = "";
  }
};

form.onsubmit = formFnc;
