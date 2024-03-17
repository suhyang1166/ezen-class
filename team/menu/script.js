// menu click event
const menuBtns = document.querySelectorAll(".menu_select li");
console.log(menuBtns);

menuBtns.forEach((menuBtn) => {
  menuBtn.addEventListener("click", () => {
    fetch("items.json")
      .then((response) => response.json())
      .then((items) => {
        console.log(items);
      });
  });
});

// buttons.forEach((button) => {
//   button.addEventListener("click", () => {
//     const btnIndex = button.dataset.index;
//     const leftImgs = document.querySelectorAll(".left_img > img");
//     const centerImgs = document.querySelectorAll(".select_signature_img > img");
//     const rightTit = document.querySelectorAll(".menu_text > h1");
//     const rightText = document.querySelectorAll(".menu_text > p");
//     const rightMenu = document.querySelectorAll(".menu_img");
//     const topping = document.querySelectorAll(".topping_wrap");
//     for (let i = 0; i < leftImgs.length; i++) {
//       buttons[i].classList.remove("active");
//       leftImgs[i].classList.remove("active");
//       centerImgs[i].classList.remove("active");
//       rightTit[i].classList.remove("active");
//       rightText[i].classList.remove("active");
//       rightMenu[i].classList.remove("active");
//       topping[i].classList.remove("active");
//     }
//     button.classList.add("active");
//     leftImgs[btnIndex].classList.add("active");
//     centerImgs[btnIndex].classList.add("active");
//     rightTit[btnIndex].classList.add("active");
//     rightText[btnIndex].classList.add("active");
//     rightMenu[btnIndex].classList.add("active");
//     topping[btnIndex].classList.add("active");
//   });
// });
