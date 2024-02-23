// const newP = document.createElement("p");
// const textNode = document.createTextNode("Typescript");
// newP.appendChild(textNode);

// document.body.appendChild(newP);

// 주문하기를 클릭하면 div태그안에 글 나오게 하기
// div 태그를 가져온다 안에 h2에 있는 text 나오게하기
// 우선 버튼을 클릭해서 div 태그를 가져온다
// h2태그의 이너텍스트 가져오기

// const btn = document.querySelector("#order");
// const title = document.querySelector("h2");
// const orderText = document.querySelector("#orderInfo");

// console.log(btn);
// console.log(title);

// btn.addEventListener(
//   "click",
//   (e) => {
//     e.preventDefault();
//     const newP = document.createElement("p");
//     const textNode = document.createTextNode(title.innerText);
//     console.log(textNode);
//     newP.appendChild(textNode);
//     orderText.appendChild(newP);
//     newP.style.fontSize = "1.2rem";
//     newP.style.color = "pink";
//     newP.style.margin = "30px";
//   },
//   { once: true }
// );

const newImg = document.createElement("img");
const srcNode = document.createAttribute("src");
srcNode.value =
  "https://i.namu.wiki/i/R0AhIJhNi8fkU2Al72pglkrT8QenAaCJd1as-d_iY6MC8nub1iI5VzIqzJlLa-1uzZm--TkB-KHFiT-P-t7bEg.webp";
newImg.setAttributeNode(srcNode);
document.body.appendChild(newImg);
console.log(newImg);
