// 인풋의 밸류값 이용하기
// li 태그 생성하기
// li태그를 ul 태그의 자식 요소로 넣기
// 제목/저자의 인풋 밸류값 함수안에서 변수선언하기 >> 입력된값 받아야함
// 버튼은 전역스코프로 변수 선언하기
// 삭제버튼 활성와 리무브 이용

const title = document.querySelector("#title");
const author = document.querySelector("#author");
const save = document.querySelector("form");
const reset = document.querySelector(".btn[type='reset']");
const bookList = document.querySelector("#bookList");

save.addEventListener("submit", (e) => {
  e.preventDefault();
  const li = document.createElement("li");
  const userTitle = title.value;
  const userAuthor = author.value;
  li.innerHTML = `${userTitle} - ${userAuthor} <span>삭제</span>`;
  bookList.appendChild(li);
  // const delBtn = document.createElement("span");
  // delBtn.innerText = "삭제";
  // li.appendChild(delBtn);
  title.value = "";
  author.value = "";

  const delButtons = document.querySelectorAll("span");
  for (let delbutton of delButtons) {
    delbutton.addEventListener("click", function () {
      this.parentNode.parentNode.removeChild(this.parentNode);
    });
  }
});

// 1. 제목 & 저자 값을 찾아와야한다.
// - input > .value

// 2. 이벤트가 작동하도록 해주는 저장하기 버튼 정의
// button => click
// form => submit
// e.preventDefault()

// 3. 찾아온 값을 출력해주도록 도와주는 이벤트 함수
// addEventListener

// 4. 출력할 공간에 대한 정의
// querySelector

// 5. 삭제하기 버튼 정의
// createElement, appendChild

// 6. 삭제하기 버튼이 복수의 갯수로 생성 => 반복문을 사용해서 클릭한 삭제버튼을 찾아오기 위해서 => this(*클래스 함수 VS 화살표 함수)

// 7. 삭제하기 버튼 클릭 시, 목록삭제 이벤트 함수
// parentNode, removeChild
