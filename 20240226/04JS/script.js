// 사용자로부터 "오늘부터 며칠간 만보걷기"를 했는지 물어보고 임의 숫자를 받으세요!
// 00일 연속 달성 출력될 수 있도록 해주세요!

// 값을 받고 받은값을 일로 계산하기
// 작성자는 며칠간 했음을 알려줌 > 현재에서 사용자의 값을 뺀다 > 그 며칠을 밀리초에서 일로 바꾸기

const userQuery = prompt(
  "만보걷기를 시작한 날짜를 입력해주세요!",
  "ex.2024-01-09"
);

const today = new Date();
const userDate = new Date(userQuery);
const result = document.querySelector("#result");

const passedTime = today.getTime() - userDate.getTime();
const passedDay = Math.floor(passedTime / (24 * 60 * 60 * 1000));

result.innerText = passedDay;
