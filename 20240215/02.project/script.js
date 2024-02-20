// for문
// for(초기값; 조건식; 증감문;) {
//   //실행문
// }

// const students = ["Park", "Kim", "Lee", "Kang"];

// for (let i = 0; i < students.length; i++) {
//   document.write(`${students[i]}, `);
// }

// forEach문 >> 배열만 사용가능
// 배열.forEach(function(배열 안에 있는 각각의 아이템) {
//   // 실행문
// })

// students.forEach(function (student) {
//   document.write(`${student}, `);
// });

// for문을 활용해서 구구단 출력하기!
// 중첩해서 쓸 수 있음

// for (let a = 2; a <= 9; a++) {
//   document.write("<h2>" + "[ 구구단 " + a + "단 ]" + "</h2>");
//   for (let b = 1; b <= 9; b++) {
//     document.write(a + "x" + b + "=" + a * b);
//     document.write("<br />");
//   }
// }

// 중첩 for문을 활용해서 5핼 5열 테이블
// let num = 1;
// let t = "<table border=1>";
// for (let i = 1; i <= 5; i++) {
//   t += "<tr>";
//   for (let k = 1; k <= 5; k++) {
//     t += "<td>" + num + "</td>";
//     num++;
//   }
//   t += "</tr>";
// }
// t += "</table>";
// document.write(t);

// for in => 객체 전용
// for of => 배열 전용

// const gitBook = {
//   title: "깃 & 깃허브",
//   pubDate: "2024-02-15",
//   pages: 272,
//   finished: true,
// };

// for (key in gitBook) {
//   document.write(`${key} : ${gitBook[key]}<br/>`);
// }

// const students = ["Park", "Kim", "Lee", "Kang"];

// for (student of students) {
//   document.write(`${student}, `);
// }

// while문
// while(조건식 => true) {
//   //실행문
// }

// let stars = Number(prompt("별점을 매겨주세요!"));

// while (stars > 0) {
//   document.write("*");
//   stars--;
// }

// do {
//   document.write("*");
//   stars--;
// } while (stars > 0);

// for (let i = 1; i <= 100; i++) {
//   if (i % 5 == 0 && i % 7 != 0) {
//     document.write("<p class='red'>" + i + "</p>");
//   } else if (i % 7 == 0 && i % 5 != 0) {
//     document.write("<p class='green'>" + i + "</p>");
//   } else {
//     document.write("<p class='aqua'>" + i + "</p>");
//   }
// }

// // break문 예시
// for (let i = 1; i <= 10; i++) {
//   if (i === 6) {
//     break;
//   } else {
//     document.write(i, "<br/>");
//   }
// }

// // continue문 예시
// for (let i = 1; i <= 10; i++) {
//   if (i % 2 === 0) {
//     continue;
//   } else {
//     document.write(i, "<br/>");
//   }
// }

// 단락회로평가 : 특정값이 논리형 값 => true / false

// const number = Number(prompt("숫자를 입력해주세요!"));
// let isPrime;

// if (number === 2) {
//   isPrime = true;
// } else {
//   for (let i = 2; i < number; i++) {
//     if (number % i === 0) {
//       isPrime = false;
//       6;
//       break;
//     } else {
//       isPrime = true;
//     }
//   }
// }

// if (isPrime) {
//   document.write(`${number}는 소수입니다.`);
// } else {
//   document.write(`${number}는 소수가 아닙니다.`);
// }

// 웹 브라우저 화면에 아래 보이는 배열 아이템 중 10 이상되는 숫자만 출력해주세요!
// const arr = [1, 3, 5, 7, 9, 11, 16, 15, 17, 19];

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] > 10) {
//     document.write(`${arr[i]}, `);
//   }
// }

// 사용자에게 1보다 큰 수를 하나 전달받으세요! 그리고 그 숫자안에 있는 짝수들만 모두 더해서 웹브라우저 화면에 출력해주세요!

const number = Number(prompt("1보다 큰 숫자를 입력하세요"));
let sum = 0;

for (let i = 1; i <= number; i++) {
  if (i % 2 === 1) {
    continue;
  } else {
    sum += i;
    document.write(`${i} ---- ${sum} <br/>`);
  }
}