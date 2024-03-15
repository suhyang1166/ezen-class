// Game
const search = document.querySelector(".word_text form");
console.log(search);

const gameStart = (e) => {
  e.preventDefault();
  let word = document.querySelector("#word").innerText;
  let myword = document.querySelector("#myword").value;
  let lastword = word[word.length - 1];
  let firstword = myword[0];
  console.log(word, myword, lastword, firstword);

  if (lastword === firstword) {
    document.querySelector("#result").innerText = "와~대단해요🍒";
    document.querySelector("#word").innerText = myword;
    document.querySelector("#myword").value = "";
  } else {
    document.querySelector("#result").innerText = "ㅋ 노옵";
    document.querySelector("#myword").value = "";
  }
};

search.addEventListener("submit", gameStart);

// lotto Game
const button = document.querySelector(".wrapper_lotto_btn");
const result = document.querySelector(".game_lotto_number");
console.log(button, result);

const luckyNumber = {
  digitCount: 6,
  maxNumber: 45,
};

const startLotto = () => {
  const { digitCount, maxNumber } = luckyNumber;
  let myNumber = new Set();
  for (let i = 0; i < digitCount; i++) {
    myNumber.add(Math.ceil(Math.random() * maxNumber));
  }
  if (myNumber.size === 6) {
    result.innerText = `${[...myNumber]}`;
  } else {
    result.innerText = `다시!`;
  }
};

button.addEventListener("click", startLotto);
