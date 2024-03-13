// 동기 & 비동기
// 커피숍

// 외부에서 data 받아와서 웹브라우저 출력!
// JS 동기처리 방식의 언어

// JS 비동기 처리 방식 사용
// 1) 콜백함수(callback)
// setInterval()
// setTimeout()
// setClear()
// 콜백 지옥 => 콜백 > 콜백 > 콜백

// 2) Promise 객체
// promise = 약속
// 계획한 실행이 예정대로 진행되었을 때, 무언가를 추가로 실행하겠다! 라는 약속!

// const likePizza = false;

// const pizza = new Promise((resolve, reject) => {
//   if (likePizza) {
//     resolve("피자를 주문합니다.");
//   } else {
//     reject("피자를 주문하지 않습니다.");
//   }
// });

// // then이라는 메서드는 Promise로 정의한 첫번째 매개변수가 true인 경우에만 실행 > resolve 함수를 실행시켜주는 함수
// // result는 resolve의 매개변수
// // catch는 정상적이지 않을때 >> 매개변수 err
// pizza.then((result) => console.log(result)).catch((err) => console.log(err));

// 외부에서 데이터를 가져올 때, 예외조항 처리
// 에러가 발생했을 때, 미리 에러메세지를 커스텀!
// try / catch / finally

const likePizza = true;
const pizza = new Promise((resolve, reject) => {
  if (likePizza) {
    resolve("피자를 주문합니다.");
  } else {
    reject("피자를 주문하지 않습니다.");
  }
});

// method chaining 기법
// 1개의 객체 뒤에 연달아서 복수의 메서드 함수를 붙여서 실행시키도록 설계한 코딩 기법
pizza
  .then((result) => console.log(result))
  .catch((err) => console.log(err))
  .finally(() => console.log("완료"));
