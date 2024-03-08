// input 태그를 통해서 사용자에게 어떤 숫자를 받을 것입니다!
// 사용자가 숫자를 입력한 후 "입력"버튼을 클릭하게되면, 다음과 같은 조건에 따라서 아래와 같은 결과가 출력되도록 할 것 입니다!
//만약, 10보다 큰 숫자를 입력했다면, 알림창을 통해서 "10보다 작은 숫자를 입력하세요!"라는 메세지가 출력되게 할 것이고
//만약, 10보다 작은 숫자를 입력했다면, result라는 공간에 해당 숫자가 출력되도록 할 것 입니다!

//단, 해당 코드를 어제 배운 try, catch, finally문을 활용해서 코드를 작성해보세요
// try문 : 실행문을 작성하는 공간
// catch함수 : 만약 에러가 발생하게 되었을 때, 에러 메세지를 출력시켜줄 수 있는 함수
// finally문 : 상단 실행문이 정상 혹은 에러와 관계없이 무조건 실행되는 공간

// 썜 답 나중에 가져오기!

const user = document.querySelector("#user-number");
const form = document.querySelector("form");

const resultNum = (e) => {
  e.preventDefault();
  let userNum = user.value;

  try {
    // if (userNum < 10) {
    //   result.innerText = userNum;
    // } else {
    //   result.innerHTML = `10보다 작은 숫자를 입력하세요!`;
    // }
    if (userNum === "" || isNaN(userNum)) {
      throw "숫자를 입력하세요!";
    }
    userNum = Number(userNum);
    if (n < 10) {
      document.querySelector("#result").innerText = userNum;
    }
    if (userNum >= 10) {
      throw "10보다 작은 숫자를 입력하세요!";
    }
  } catch (err) {
    alert(err);
  } finally {
    user.value = "";
  }
};

form.addEventListener("submit", resultNum);
