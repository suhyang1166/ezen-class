// 원기둥의 부피 = 밑면적 * 높이
// 밑면적 = 파이 * (지름 / 2)제곱

// 생성자 함수 혹은 class를 활용해서 코드작성

// 사용자에게 값을 받는다 > input의 value값
//
// 지름 / 높이 값을 프로퍼티로 만들기
// 지름은 함수로 정의
//

// function Cylinder(cyldiameter, cylheight) {
//   this.diameter = cyldiameter;
//   this.height = cylheight;
//   this.getVolume = function () {
//     let radius = this.diameter / 2;
//     return (Math.PI * radius * radius * this.height).toFixed(2);
//   };
// }

// const cylinder = new Cylinder(8, 10);
// console.log(`원기둥의 부피는 ${cylinder.getVolume()} 입니다.`);

const form = document.querySelector("form");
const button = document.querySelector("input[type='submit']");
const result = document.querySelector("#result");

class Cylinder {
  constructor(cylinderDiameter, cylinderHeight) {
    this.diameter = cylinderDiameter;
    this.height = cylinderHeight;
  }

  getVolume() {
    let radius = this.diameter / 2;
    return (Math.PI * radius * radius * this.height).toFixed(2);
  }
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const diameter = document.querySelector("#cyl-diameter");
  const height = document.querySelector("#cyl-height");

  const diameterValue = diameter.value;
  const heightValue = diameter.value;

  if (diameterValue === "" || heightValue === "") {
    result.innerText = "지름값과 높이값을 입력하세요!";
  } else {
    const cylinder = new Cylinder(
      parseInt(diameterValue),
      parseInt(heightValue)
    );
    diameter.value = "";
    height.value = "";
    result.innerText = `원기둥의 부피는 ${cylinder.getVolume()} 입니다.`;
  }
});
