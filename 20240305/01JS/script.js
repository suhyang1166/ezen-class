// map : 기존 배열 데이터를 가져와서 새로운 연산처리 작업 후 새로운 배열을 생성하고자 할 때
// 모듈 => 레고의 완성품을 조립하고자 할 때, 개별요소의 블록!
// 자바스크립트 언어를 만들고 관리하고 있는 ES 기관! > 모듈을 표준화X
// ESM => Ecma Script 모듈
// JS 인기있게 된 이유 => G / Chrome V8 => Node.js => 서버 & 게임 등등
// 훨씬 더 자주 사용됨 => 모듈형태 횟수!
// CJS => Common JS 모듈

// sort : 오름차순 정렬이 기본 / 내림차순은 설정 필요 => 콜백함수 조건식

import products from "./products.js";

const button = document.querySelector(".container > button");
const newlisting = document.querySelector(".newlisting");
const asceButton = document.querySelector(".ascending");
const descButton = document.querySelector(".descending");
const select = document.querySelector("select");

const removeItems = () => {
  const items = document.querySelectorAll("li");
  items.forEach((item) => {
    item.remove();
  });
};

const selectCategory = (e) => {
  const selectedIndex = e.target.options.selectedIndex;
  const value = e.target.options[selectedIndex].value;

  const filtered = products.data.filter((product) => {
    return product.category === value;
  });

  removeItems();

  filtered.forEach((product) => {
    createItem(product);
  });
};

const sortNew = () => {
  const myProducts = products.data.sort((a, b) => {
    return a.id - b.id;
  });

  removeItems();

  myProducts.forEach((product) => {
    createItem(product);
  });
};

const sortAsce = () => {
  const myProducts = products.data.sort((a, b) => {
    return a.price - b.price;
  });

  removeItems();

  myProducts.forEach((product) => {
    createItem(product);
  });
};

const sortDesc = () => {
  const myProducts = products.data.sort((a, b) => {
    return b.price - a.price;
  });

  removeItems();

  myProducts.forEach((product) => {
    createItem(product);
  });
};

const createItem = function (product) {
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
// id > Date.now()사용하면 한번에 같은 id값으로 여러개 생성됨 각각에 아이디에 +n을 해야함

// importData();

button.addEventListener("click", importData);
newlisting.addEventListener("click", sortNew);
asceButton.addEventListener("click", sortAsce);
descButton.addEventListener("click", sortDesc);
select.addEventListener("change", selectCategory);
