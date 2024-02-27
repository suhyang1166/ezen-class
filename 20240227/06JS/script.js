const form = document.querySelector("form");
const input = document.querySelector("input");
const ul = document.querySelector("ul");

let todos = [];

const save = () => {
  localStorage.setItem("todos", JSON.stringify(todos)); // 객체의 값을 서버가 인식할수있게!
};

const delItem = (e) => {
  const target = e.target.parentElement;
  todos = todos.filter((todo) => todo.id != target.id);
  save();
  target.remove();
};

const addItem = (todo) => {
  if (todo.text !== "") {
    const li = document.createElement("li");
    const span = document.createElement("span");
    const button = document.createElement("button");

    span.innerText = todo.text;
    button.innerText = "삭제";
    button.addEventListener("click", delItem);

    li.appendChild(span);
    li.appendChild(button);
    ul.appendChild(li);
    li.id = todo.id;
    // li태그에 아이디 값을 부여해줘야 함 > 특정 요소를 삭제할 때 아이디값으로 확인해서 삭제시켜라라는 명령을 주기위해
  }
};

const handler = (e) => {
  e.preventDefault();
  const todo = {
    id: Date.now(), // 이벤트가 작동되는 순간의 밀리초의 값 > 동일한 시간이 생길수없음
    text: input.value,
  };
  todos.push(todo); // 배열에 값을 뒤쪽부터 추가하는 메서드 함수
  addItem(todo);
  // console.log(todos);
  save(); // 로컬스토리지로 저장
  input.value = "";
};

// 로컬스토리지의 데이터값을 끌어오게 하는 함수
const init = () => {
  const userTodos = JSON.parse(localStorage.getItem("todos"));
  // UI에 구현될수있는 언어로 변환

  if (userTodos) {
    userTodos.forEach((todo) => {
      addItem(todo);
    });
  } else {
    handler();
  }

  todos = userTodos;
};

// if > forEach 무슨말일까나,,

init();

form.addEventListener("submit", handler);

// localStorage.setItem("Hello", "World");
// const myData = localStorage.getItem("Hello");
// console.log(myData);
