// if문 예시 >>
// if(조건식이 참이어야) {
//실행문 실행됨!
//}

// let x = 10;

// if (x > 5) {
//   console.log("x는 5보다 큽니다.");
// }

// if...else문 예시 >>
// const userInput = prompt("당신의 이름을 입력하세요");

// if (userInput === null) {
//   alert("취소하셨습니다!");
// } else {
//   alert(`${userInput}님 환영합니다!`);
// }

// // else if 예시 >>
// const score = Number(prompt("프로그램 점수 : "));

// // 예외조항 처리
// // 중첩 = 반복해서 사용할 수 있음
// // 중첩 if구문
// if (score != null) {
//   if (score >= 90) {
//     alert("A 학점");
//   } else if (score >= 80) {
//     alert("B 학점");
//   } else {
//     alert("C 학점");
//   }
// }

// 조건문을 활용해서 사용자에게 어떤 숫자를 하나 받아서 그 숫자가 짝수인지, 홀수인지를 확인한 이후 알림창을 활용해서 사용자에게 짝수 혹은 홀수입니다. 라는 메세지를 출력해주세요!

//숫자를 받아옴 >>
// 짝수 x / 홀수 x + 1 >>
// x = 0

// 가장 좋은 변수명 = 식별자는 명시적 & 직관적
// 1) 예약어 : 이미 JS & window에서 사용중인 고유명사
// 2) 변수명 작명 가장 앞에 사용할 수 있는 것들 : $, _, 영문자 가능 (*숫자 / 특수문자)
// 3) 변수명 반드시 대.소문자 구분

// camel표기법 : userPickNum
// sneak표기법 : user_picknum
// 헝가리언표기법 : Userpicknum
// const userNumber = prompt("숫자를 입력해주세요!");

// if (userNumber != null) {
//   const resetnum = Number(userNumber);
//   if (userNumber % 2 === 0) {
//     alert("짝수입니다");
//   } else {
//     alert("홀수입니다!");
//   }
// } else {
//   alert("취소하셨습니다!");
// }

// if (userNumber != null) {
//   const resetnum = Number(userNumber);
//   resetnum % 2 === 0 ? alert("짝수입니다") : alert("홀수입니다");
// } else {
//   alert("취소하셨습니다.");
// }

// 사용자에게 1~12까지의 숫자 중 하나를 받으세요. 그리고 전달받은 숫자에 따라서 다음과 같은 알림메세지가 출력되게 해주세요!
// 사용자가 입력한 숫자 : 9~11 : 독서의 계절 가을이네요!
// 사용자가 입력한 숫자 : 6~8 : 여행하기 좋은 여름이네요!
// 사용자가 입력한 숫자 : 3~5 : 햇살 가득한 봄이네요!
// 사용자가 입력한 숫자 : 12~2 : 스키의 계절 겨울이네요!

// 숫자를 받는다 >> 1~12의 숫자만 받는 조건필요>> 0 < x < 13 그외에는 no!  > 거기서 세부상세로 나누기
// >> 12가 아니면서 x > 8 / x > 5 / x > 2 나머지는 스키계절 >>

// let month = prompt("현재는 몇 월 인가요?", "ex. 2");

// if (month != null) {
//   let month = Number(month);
//   month < 13;
//   if (month >= 9 && month <= 11) {
//     alert("독서의 계절 가을이네요!");
//   } else if (month >= 6 && month <= 8) {
//     alert("여행하기 좋은 여름이네요!");
//   } else if (month >= 3 && month <= 5) {
//     alert("햇살 가득한 봄이네요!");
//   } else if (month >= 13) {
//     alert("존재하지 않는 월입니다!");
//   } else {
//     alert("스키의 계절 겨울이네요!");
//   }
// } else {
//   alert("취소하셨습니다.");
// }

// if (month != null) {
//   let month = Number(month);
//   month < 13;
//   if (month >= 9 && month <= 11) {
//     alert("독서의 계절 가을이네요!");
//   } else if (month >= 6 && month <= 8) {
//     alert("여행하기 좋은 여름이네요!");
//   } else if (month >= 3 && month <= 5) {
//     alert("햇살 가득한 봄이네요!");
//   } else {
//     alert("스키의 계절 겨울이네요!");
//   }
// } else {
//   alert("취소하셨습니다.");
// }

// 사용자에게 id와 pw값을 받으세요! 그리고 해당 id와 pw값이 다음과 같다면, "반갑습니다! 어서오세요!"라는 알림 메세지를 출력해주세요!
// id : ezenit / pw : 1234
// 그런데, 만약 id만 일치하고, pw가 틀렸을 경우에는 "비밀번호를 확인해주세요!"라는 알림 메세지를 출력해주시고, 만약 id와 pw 둘다 클렸을 경우에는 "아이디를 확인해주세요!"라는 알림 메세지를 출력해주세요!

//id/pw 값을 받음 >> 일치 / 하나만 일치 / 불일치 3가지의 조건이 필요 논리연산자>>

// const id = "ezenit";
// const pw = 1234;
// const userId = prompt("id를 입력해주세요!");

// if (userId === id) {
//   const userPw = prompt("pw를 입력해주세요!");
//   if (userPw === pw) {
//     alert(`${userId}님 반갑습니다!`);
//   } else {
//     alert("비밀번호가 일치하지 않습니다!");
//     window.location.reload();
//   }
// } else {
//   alert("아이디가 일치하지않습니다!");
//   window.location.reload();
// }

// switch(// 조건식 => 참) {
//   case 값 : 실행문
//   break;
//   case 1 : 실행문
//   break;
//   case 2 : 실행문
//   break;
//   case 3 : 실행문
//   break;
// }

// const subject = prompt("신청할 과목을 선택하세요!", "1-html, 2-CSS, 3-JS");

// if (subject !== null) {
//   switch (subject) {
//     case "1":
//       alert("html을 신청하셨습니다!");
//       break;
//     case "2":
//       alert("CSS을 신청하셨습니다!");
//       break;
//     case "3":
//       alert("JS을 신청하셨습니다!");
//       break;
//     default:
//       alert("잘못입력하셨습니다!");
//       location.reload();
//   }
// } else {
//   alert("취소하셨습니다!");
// }

// 사용자에게 즐겨찾는 쇼핑몰을 물어보시고 이에 대한 답을 받아주세요!
// 쇼핑몰 후보 : 쿠팡 / 지마켓 / 11번가 / 마켓컬리
// 사용자가 선택한 쇼핑몰이 후보군안에 존재한다면, prompt창에 "확인"버튼을 클릭하는 순간, 해당 쇼핑몰로 바로 이동하게 만들어주세요!

// window 객체안에 location 객체는 어딘가로 이동하도록 해주는 객체
// location 객체안에 href 속성 => 경로를 지정해주는 속성
// 쿠팡을 사용자가 선택했다면, location.href = "https://www.coupang.com" 결과값을 설정하면, 쿠팡 사이트로 이동

// const subject = prompt(
//   "즐겨찾는 쇼필몰을 선택하세요!",
//   "1-쿠팡, 2-G마켓, 3-11번가, 4-마켓컬리"
// );

// if (subject !== null) {
//   switch (subject) {
//     case "1":
//       alert("쿠팡을 선택하셨습니다!");
//       location.href = "https://www.coupang.com";
//       break;
//     case "2":
//       alert("G마켓을 선택하셨습니다!");
//       location.href = "https://www.gmarket.co.kr/";
//       break;
//     case "3":
//       alert("11번가을 선택하셨습니다!");
//       location.href = "https://www.11st.co.kr/";
//       break;
//     case "4":
//       alert("마켓컬리을 선택하셨습니다!");
//       location.href = "https://www.kurly.com/main";
//       break;
//     default:
//       alert("잘못입력하셨습니다!");
//       location.reload();
//   }
// } else {
//   alert("취소하셨습니다!");
// }
