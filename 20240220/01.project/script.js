// 자바스크립트에서 숫자를 어디까지 사용할 수 있을까?
// 컴퓨터가 처리할수있는 한계가 있음
// >> 비트와 바이트의 개념
// 비트 : 메모리의 최소단위
// 바이트 : 8비트 => 1바이트

// JS : 자료구조 & 알고리즘
// 제어문 : 반복문 => for, forEach, for in, for of

// const testNum = Number.MAX_SAFE_INTEGER; // 자바스크립트에서의 최대 정수값
// const testNum01 = Number.MIN_SAFE_INTEGER; // 자바스크립트에서의 최소 정수값
// console.log(testNum);
// console.log(testNum01);

// // if (inputData >= testNum) {
// //   alert("error");
// // }

// // BigInt는 타입
// const testNum02 = BigInt(Number.MAX_SAFE_INTEGER) + 1n;
// //자연수나 정수가 뒤에 붙지못함/BigInt 타입끼리만 계산가능>>금융이나 다뤄야할 데이터가 많은 회사에서 사용하고 보통은 사용X
// const testNum03 = BigInt(Number.MIN_SAFE_INTEGER);
// console.log(testNum02);
// console.log(testNum03);

// const testNum04 = 140000000000000000000000000;
// console.log(testNum04);
// // e는 10의 제곱근 >> 단위가 길어질때 사용

// const testNum05 = 14e-3;
// // e-는 소수점
// console.log(testNum05);

// DOM = 시스템
// Document Object Model
// = 문서 객체 모델 시스템
// Document = html 문서
// Object = 프로그래밍의 모든 전 과정 및 절차 => 객체화
