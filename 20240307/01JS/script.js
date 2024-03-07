// 서버 & 통신

// JSON : Javascript Object Notation
// 자바스크립트 객체 표기법

// const obj = {
//   title: "title",
//   price: 15000,
// };

// 만약! JS 언어를 그대로 가지고, 서버 구현 & 데이터 베이스 구축!
// 1) 프론트엔드 개발 VS 백엔드 개발 => 연봉 차이X
// 2) 태초에 JS => 웹브라우저에서만 사용할 수 있도록 만든 한정적인 제약 언어!
// 3) 서버 구현 & 저장 데이터 관리할 수 있도록 해주는 언어 Java & C++ || C# || C 언어 전통적으로 서버에서 사용할 수 있는 언어들!
// 4) UI 영역 각광을 받은지 얼마안됨
// 5) 서버 측 언어! JS => 언어

const student = {
  name: "영심이",
  major: "체육교육",
  grade: 3,
};

const json = JSON.stringify(student);
console.log(student);
console.log(json);

const json_obj = JSON.parse(student_json);

// 서버와 우리가 통신한다
// 서버와 클라이언트가 통신규약 아래에서 통신한다!

// AJAX : 클라이언트 & 서버간 통신을 할 수 있도록 해주는 통신기법
// Asynchronous Javascript And XML
// Asynchronous : 비동기
// Javascript : 웹 사용가능 자바스크립트 언어
// JSON : 언어를 의미하는 것이 아니라, 자바스크립트 언어 <=> 서버가 이해할 수 있도록 변환시켜주는 표기법 / 서버에서 가져온 데이터 <=> 웹 브라우저가 이해할 수 있도록 변환시켜주는 표기법
// XML : 과거 서버에서 실질적으로 사용할 수 있는 언어
