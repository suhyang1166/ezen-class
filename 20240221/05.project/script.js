const open = document.querySelector(".open");
const close = document.querySelector(".close");
const container = document.querySelector(".container");
console.log(open);
console.log(close);
console.log(container);

// open.onclick = () => {
//   container.classList.add("active");
//   open.classList.add("active");
// };
// close.onclick = () => {
//   container.classList.add("active");
//   close.classList.add("active");
// };

//.open active > 사라짐 . 클로즈하면 클릭 나옴

const openFnc = () => {
  open.style.display = "none";
  container.style.display = "flex";
};

const closeFnc = () => {
  container.style.display = "none ";
  open.style.display = "block";
};

open.onclick = openFnc;
close.onclick = closeFnc;
