// 무작위로 이벤트 당첨자를 뽑는 프로그램을 만들려고 합니다. 전체 명 몇인지, 그리고 그중에서 몇 명을 뽑을 것인지 입력한 후 [추첨] 버튼을 클릭하면 해당 숫자만큼 당첨자를 뽑아서 화면에 출력하는 UI를 구현해주세요!!

// *참고사항
// 당첨자들을 모아 둘 빈 문자열을 준비하세요
// 1부터 전체 값 사이에서 무작위 수를 선택하는데, 이 과정을 뽑아야 할 숫자만큼 반복합니다.
// 반복할 때마다 문자열에 하나씩 추가합니다.
// 반복이 끝나면 #result 영역에 문자열을 표시합니다.
// 미리 만들어 둔.show 스타일도 추가합니다.

// const form = document.querySelector("form");
// const inputs = document.querySelectorAll("form input[type='text']");
// const btn = document.querySelectorAll(".pick");
// const removeBtn = document.querySelectorAll(".remove");

// const users = [];

// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   const allUsers = inputs[0].value;
//   const pickedUsers = inputs[1].value;

//   for (let i = 0; i < allUsers; i++) {
//     const randomNum = Math.floor(Math.random() * Number(allUsers));
//     // const setNum = new Set(randomNum);
//     // console.log(setNum);
//     if (randomNum <= Number(pickedUsers)) {
//       const result = document.querySelector(".result");
//       const p = result.querySelector("p");
//       const span = document.createElement("span");

//       span.innerText = `${randomNum}번 `;

//       p.appendChild(span);
//       result.appendChild(p);
//     }
//   }

//   inputs[0].value = "";
//   inputs[1].value = "";
// });

// const raffle = document.querySelector("#raffle");
const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const seed = document.querySelector("#seed");
  const total = document.querySelector("#total");
  const result = document.querySelector("#result");

  let winner = new Set();
  for (let i = 0; i < total.value; i++) {
    let picked = Math.floor(Math.random() * seed.value + 1);
    winner.add(`${picked}번, `);
  }

  // result.innerText = `당첨자 : ${Array.from(winner).join("")}`;

  if (winner.size !== Number(total.value)) {
    for (let i = 0; i < total.value; i++) {
      let picked = Math.floor(Math.random() * seed.value + 1);
      winner.add(`${picked}번, `);
    }
  } else {
    result.innerText = `당첨자 : ${Array.from(winner).join("")}`;
  }
});
