// const str = "hello";
// const greeting = "안녕하세요!";
// const str01 = "Good Mornig!";

// console.log(str.length);
// console.log(greeting.length);
// console.log(str01.charAt(11));

// const string = prompt("문자열을 입력하세요!");
// const letter = prompt("어떤 문자를 체크하겠습니까?");

// const counting = (str, ch) => {
//   let count = 0;

//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === ch) {
//       count += 1;
//     }
//   }
//   return count;
// };

// const result = counting(string, letter);
// document.write(`${string}에는 ${letter}가 ${result}번 사용되었습니다!`);

const str1 = "Good morning, everyone. Beautiful morning.";
console.log(str1.indexOf("morning"));
console.log(str1.indexOf("evening"));
// console.log(str1.indexOf("morning", firstIndex + 1));

const str2 = "Hello, everyone";
console.log("==== startsWith ====");
console.log(str2.startsWith("Hello")); // true
console.log(str2.startsWith("hello")); // false
console.log(str2.startsWith("He")); // true
console.log(str2.startsWith("Hello, ev")); // true
console.log(str2.startsWith("el", 1)); // true > 인덱스 몇번째에서 시작하는지 ("string", indexNum)
console.log(str2.startsWith("o", 4)); // true > 인덱스 몇번째에서 시작하는지 ("string", indexNum)

console.log("==== endsWith ====");
console.log(str2.endsWith("everyone")); // true
console.log(str2.endsWith("everyone.")); // false
console.log(str2.endsWith("Everyone.")); // false
console.log(str2.endsWith("one")); // true
console.log(str2.endsWith("lo, everyone")); // true

console.log("==== includes ====");
console.log(str2.includes("every")); // true
console.log(str2.includes("one")); // true

console.log("==== trim methods ====");
const str3 = "ab cd ef";
const str3_1 = " ab cd ef ";
console.log(str3);
console.log(str3_1);
console.log(str3_1.trim());
console.log(str3_1.trimStart());
console.log(str3_1.trimEnd());

console.log("==== Uppercase / Lowercase ====");
let str4 = "Good Morning";
console.log(str4.toUpperCase());
console.log(str4.toLowerCase());

console.log("==== substring ====");
console.log(str4.substring(5, 8));
console.log(str4.substring(-5, 11));
// 음수값을 전혀 인식하지 못함! => 음수값이 들어오는 순간 바로 0으로 치환!

console.log("==== slice ===="); // 음수값을 쓸수있음
console.log(str4.slice(0, 4));
console.log(str4.slice(0));
console.log(str4.slice(-5, 11));
// 0 1 2 3 4 5 6 7 8 9 10 11
// G o o d ˇ M o r n i n  g
//-12-11-10-9-8-7-6-5-4-3-2-1

console.log("==== split ====");
const str5 = "Hello everyone";
const array1 = str5.split(" "); // 공백을 기준으로 배열 아이템 따로
const array2 = str5.split(""); // 공백을 기준으로 배열 아이템 따로
console.log(array2);
