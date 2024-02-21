// 첫번째수와 두번째 수를 받아옴 >> 두 수의 공약수 중 겹치는 수의 최대값 구하기 >> 베열??이용??
// 받은 수에서 공약수 구하기 어떻게?? 나눴을 때 나눈 값을 배열에 할당하기 방법 그중 가장 큰 공약수 겹치는 수 어떻게 구하지..?
// 공약수 구하기 곱해졌을떄 나오는 약수들 9 = 1, 3, 9 / 16 = 1,2,4,8,16 / 15= 1,3,5,15
// x = [1,....,x] 가운데 정의 방법 찾기
// x = [1,....,x] / y = [1,....,y] 의 공통되는 가장 큰 수 >> 어떻게 구해....
// / or % 어떤걸 이용 비교연산자?? 완전히 나눠져야함 num01 *= num02 >> x값 num01 = x/num02 x= num01*num02
// userNum = x

// 1. 사용자가 입력한 두개의 숫자를 찾아온다.
// 2. 출력될 공간을 정의한다
// 3. 계산하기 버튼을 클릭했을 때, result값을 공간에 출력해준다
// 4. 값을 출력시켜주기위한 연산작업이 필요하다
// 5. 최대공약수에 대한 개념이 필요하다

const firstNum = document.querySelector("#number1");
const secondNum = document.querySelector("#number2");
const button = document.querySelector("form input[type='submit']");
const result = document.querySelector("#result");

const getGCD = (firstNum, secondNum) => {
  const max = firstNum > secondNum ? firstNum : secondNum;
  let GCD = 0;
  for (let i = 1; i <= max; i++) {
    if (firstNum % i === 0 && secondNum % i === 0) {
      GCD = i;
    }
  }
  return GCD;
};

button.onclick = function (e) {
  e.preventDefault();
  result.innerText = getGCD(firstNum.value, secondNum.value);
};
