const button = document.querySelector("button");
const result = document.querySelector("#result");

// 로또 규칙!
// 한번 추첨 시 : 6개의 숫자(*반드시 중복X)

// 각각의 6개의 숫자 : 최대 45까지 가능
// 1~45까지의 구간 숫자, 랜덤 = 수학객체 random() * 45

// 반복문이 필요 > 6번 반복 * 6

// 절대 중복X => Set()
// add()

// result 출력
// innerText

const luckyNumber = {
  digitCount: 6,
  maxNumber: 45,
};

const lottoPlay = () => {
  const { digitCount, maxNumber } = luckyNumber;
  const myNumber = new Set();
  for (let i = 0; i < digitCount; i++) {
    myNumber.add(Math.ceil(Math.random() * maxNumber));
  }
  if (myNumber.size !== 6) {
    for (let i = 0; i < digitCount; i++) {
      myNumber.add(Math.ceil(Math.random() * maxNumber));
    }
  } else {
    result.innerText = `${[...myNumber]}`;
  }
  console.log(myNumber);
};

button.addEventListener("click", lottoPlay);
