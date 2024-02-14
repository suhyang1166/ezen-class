// 사용자에게 키와 몸무게의 정보를 받아서 사용자가 현재 적정체중인지 확인 후 웹 브라우저 화면에 다음과 같이 출력해주세요!
// 만약, 적정체중이라면 "적정체중이시네요. 축하드립니다"라는 메세지가 출력되게 해주시고, 만약, 적정체중이 아니라면 "조금만 더 노력해주세요!"라는 메세지가 출력되게 해주세요!

// 적정체중 구하는 공식 = (본인키 - 100) * 0.9
// 적정체중 구하는 공식을 통한 값 +- 5kg까지 허용!

// 키/몸무게을 받아와야함 >> 적정체중인지 확인해야함 >> 어떻게 ??
// 화면에 출력 >> write >> 함수 작성?

// const hight = Number(prompt("본인의 키를 입력해주세요!"));
// const weight = Number(prompt("본인의 몸무게를 입력해주세요!"));
// const result = (hight - 100) * 0.9;

// result는 적정체중
// 받은값은 새롭게 적어야함
// 적정체중입니다 = 입력자의 result < 기준이되는 값
// 적정체중X = 입력자의 result > 기준이되는 값
// 어떻게 구하지,, 기준,,
// 입력자값 = x라고 할때 x < normal 크면 적정체중
//

// document.write();

// 1.사용자에게 키값을 받아온다
// 2.사용자에게 몸무게값을 받아온다
// 3.사용자에게 받아온 키 & 몸무게값을 가지고 적정체중을 구한다
// 4.적정체중을 구한 이후에 +-5kg의 범위를 설정한다
// 5.적정체중 여부의 조건에 따라서 출력할 문자열을 구분한다
// 6.최종 결과값을 웹 브라우저 화면에 출력한다

// const userName = prompt("당신의 이름을 말씀해주세요", "ex.홍길동");
// const userHeight = Number(prompt("당신의 키는 어떻게 되십니까?", "ex.180"));
// const userWeight = Number(prompt("당신의 몸무게는 어떻게 되십니까?", "ex.70"));

// const normalWeight = (userHeight - 100) * 0.9;
// let result = normalWeight >= userWeight - 5 && normalWeight <= userWeight + 5;
// result = result
//   ? "적정체중이시네요! 축하드립니다."
//   : "적정체중이 아닙니다. 노력해주세요";
// document.write(`${userName}님, ${result}`);

// 사용자로부터 오늘하루동안 교통비와 식비, 음료비를 받아서 계산한 후 해당 값이 1만원을 초과한 경우에는 "00원 초과하였습니다. 조금만 더 노력해주세요!"라고 웹 브라우저 화면에 출력해주시고, 만약 1만원을 초과하지 않은 경우에는 "00원 남았습니다. 돈관리를 잘하셨습니다!" 라고 웹 브라우저 화면에 출력해주세요!

// 사용자에게 값 받아옴 > 교통비+식비+음료비 값 = price이 필요 > price > 1만원 , price < 1만원 인데 초과 금액 연산 필요 >> price -10000값 / 10000 - price > 남은 금액이 음수? 양수?
// 10000 - price 가 양수일때는 적게씀 / 음수일때는 많이 씀

const traffic = Number(prompt("오늘 하루 사용한 교통비를 입력해주세요!"));
const eat = Number(prompt("오늘 하루 사용한 식비를 입력해주세요!"));
const drink = Number(prompt("오늘 하루 사용한 음료비를 입력해주세요!"));
const userPrice = traffic + eat + drink;

// let result = 10000 - userPrice >= 0 || 10000 - userPrice < 0;
// // 양수일때는 true / 음수일때는 false
// result = userPrice ? 10000 - userPrice >= 0 : 10000 - userPrice < 0;
// result = result
//   ? `${result}원 남았습니다. 돈관리를 잘하셨습니다!`
//   : `${result}원 초과하였습니다. 조금만 더 노력해주세요!`;

// document.write(result);

let result = userPrice < 10000;
const result1 = 10000 - userPrice;
const result2 = userPrice - 10000;

result = result
  ? `${result1}원 남았어요! 돈관리 잘하셨어요!`
  : `${result2}원 초과했어요! 조금만 더 노력해주세요`;
document.write(result);
