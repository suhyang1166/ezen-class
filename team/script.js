// m-popup close
const popupBtn = document.querySelector(".m_popup_close");
const mPopup = document.querySelectorAll(".mobile_popup");
console.log(mPopup);

popupBtn.addEventListener("click", () => {
  popupBtn.parentNode.parentNode.remove();
});

// popup close
const popClose01 = document.querySelector(".popclose01");
const popClose02 = document.querySelector(".popclose02");
const popup01 = document.querySelector(".pop01");
const popup02 = document.querySelector(".pop02");

popClose01.addEventListener("click", () => {
  popClose01.parentNode.remove();
});
popClose02.addEventListener("click", () => {
  popClose02.parentNode.remove();
});

// popup link
const popLink01 = document.querySelector(".pop_link01");
const popLink02 = document.querySelector(".pop_link02");

popLink01.addEventListener("click", () => {
  window.open("https://www.youtube.com/watch?v=r6bibJ3wZQI");
});
popLink02.addEventListener("click", () => {
  window.open("https://www.youtube.com/watch?v=gGHKuVlTO3M");
});

// image slide
const imgs = [
  "main-desk-1.jpg",
  "main-desk-2.jpg",
  "main-desk-3.jpg",
  "main-desk-4.jpg",
];

const imgContainer = document.querySelector(".scroll_img");
const arrows = document.querySelectorAll(".arrows");
const img = document.createElement("img");
const src = document.createAttribute("src");

img.className = "main_img_pc";
src.value = `./img/s_img/${imgs[0]}`;

img.setAttributeNode(src);
imgContainer.appendChild(img);

let i = 0;

const imgSlide = (direction) => {
  if (direction === "prev") {
    i--;
    if (i < 0) {
      i = imgs.length - 1;
    }
  } else if (direction === "next") {
    i++;
    if (i >= imgs.length) {
      i = 0;
    }
  }

  src.value = `./img/s_img/${imgs[i]}`;
};

arrows.forEach((arrow) => {
  arrow.addEventListener("click", (e) => {
    const direction = e.target.id === "left" ? "prev" : "next";
    imgSlide(direction);
  });
});

const autoSlide = () => {
  setInterval(() => {
    imgSlide("next");
  }, 5000);
};

autoSlide();

// selecto menu click event
// const leftImgs = document.querySelectorAll(".left_img > img");
const centerImgs = document.querySelectorAll(".select_signature_img > img");
const buttons = document.querySelectorAll(".buttons > button");
console.log(buttons);

// let currentImageIndex = 0;

// const showImage = (index) => {
//   console.log(index);
//   leftImgs[currentImageIndex].style.display = "none";
//   leftImgs[index].style.display = "block";
//   leftImgs[index].style.width = "100%";
//   currentImageIndex = index;
// };

// buttons.forEach((button, index) => {
//   button.addEventListener("click", () => {
//     showImage(index);
//   });
// });

// showImage(0);

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const btnIndex = button.dataset.index;
    console.log(btnIndex);
    const leftImgs = document.querySelector(`img[data-index="${btnIndex}"]`);
    console.log(leftImgs);
    leftImgs.classList.toggle("active");
    button.classList.toggle("active");
    // if (leftImgs) {
    //   // centerImgs.classList.toggle("active");
    // }
  });
});

// const buttons = document.querySelector(".buttons");
// const xhr = new XMLHttpRequest();

// xhr.open("GET", "items.json", true);
// xhr.send();
// console.log(xhr);

// const changeItems = (items) => {
//   const title = items.target.dataset.index;
//   let output = "";
//   items.forEach((item) => {
//     if (title === item.title) {
//       output += `<h2>asdsadsa</h2>`;
//     }
//   });
// };

// buttons.addEventListener("click", changeItems);

// xhr.onreadystatechange = function () {
//   if (xhr.readyState === 4 && xhr.status === 200) {
//     const items = JSON.parse(xhr.responseText);
//     console.log(items);
//     changeItems(items);
//   }
// };

// sns link
const snsLink01 = document.querySelector(".sns_link01");
const snsLink02 = document.querySelector(".sns_link02");
const snsLink03 = document.querySelector(".sns_link03");
console.log(snsLink01);

snsLink01.addEventListener("click", () => {
  window.open("https://www.instagram.com/p/C4IFmbERfkt/");
});
snsLink02.addEventListener("click", () => {
  window.open("https://www.instagram.com/p/C362kX6RN41/");
});
snsLink03.addEventListener("click", () => {
  window.open("https://www.instagram.com/p/C3mogD6xyqc/");
});
