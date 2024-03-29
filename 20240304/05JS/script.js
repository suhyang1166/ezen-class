// map : 기존 배열 데이터를 가져와서 새로운 연산처리 작업 후 새로운 배열을 생성하고자 할 때
// 모듈 => 레고의 완성품을 조립하고자 할 때, 개별요소의 블록!
// 자바스크립트 언어를 만들고 관리하고 있는 ES 기관! > 모듈을 표준화X
// ESM => Ecma Script 모듈
// JS 인기있게 된 이유 => G / Chrome V8 => Node.js => 서버 & 게임 등등
// 훨씬 더 자주 사용됨 => 모듈형태 횟수!
// CJS => Common JS 모듈

import products from "./products.js";

const button = document.querySelector("button");
console.log(button);

const createItem = (product) => {
  const ul = document.querySelector("ul");
  const li = document.createElement("li");
  const h3 = document.createElement("h3");
  const span = document.createElement("span");
  const div = document.createElement("div");
  const img = document.createElement("img");
  li.id = product.id;

  const attr = document.createAttribute("src");
  attr.value = product.img;
  img.setAttributeNode(attr);

  h3.className = "name";
  h3.innerText = product.name;

  const price = new Intl.NumberFormat("ko-kr", {
    style: "currency",
    currency: "KRW",
  }).format(product.price);

  span.className = "price";
  span.innerText = price;

  div.append(h3, span);
  li.append(img, div);
  ul.appendChild(li);
};

const importData = () => {
  products.data.map((product) => {
    if (!document.getElementById(product.id)) {
      createItem(product);
    }
  });
};

importData();

// button.addEventListener("click", importData);
