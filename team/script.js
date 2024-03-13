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

// m-popup close
const body = document.querySelector("body");
const popupBtn = document.querySelector(".m_popup_close");
const mPopup = document.querySelectorAll(".mobile_popup");

body.classList.add("modal-open");

popupBtn.addEventListener("click", () => {
  popupBtn.parentNode.parentNode.parentNode.remove();
  body.classList.remove("modal-open");
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
const sliderWrapper = document.querySelector(".scroll_img");
const sliderContainer = document.querySelector(".slide_pc ");
const slides = document.querySelectorAll(".main_img_pc");
const slidesImg = document.querySelectorAll(".main_img_pc > img");
const sliderContainerMo = document.querySelector(".slide_mo");
const slidesMo = document.querySelectorAll(".main_img_mo");

const navPrev = document.querySelector("#left");
const navNext = document.querySelector("#right");

const slideWidth = 100;
const slideCount = slides.length;

let currentIdx = 0;

// li style setting
const updateWidth = () => {
  const currentSlides = document.querySelectorAll(".main_img_pc");
  const currentSlidesMo = document.querySelectorAll(".main_img_mo");
  const newSlideCount = currentSlides.length;
  const newSlideCountMo = currentSlidesMo.length;
  const newWidth = `${slideWidth * newSlideCount}%`;
  const newWidthMo = `${slideWidth * newSlideCountMo}%`;
  sliderContainer.style.width = newWidth;
  sliderContainerMo.style.width = newWidthMo;
};

// slide clone
const makeClone = () => {
  for (let i = 0; i < slideCount; i++) {
    slides[i].style.left = `${i * 100}%`;
    slidesMo[i].style.left = `${i * 100}%`;
    const cloneSlide = slides[i].cloneNode(true);
    const cloneSlideMo = slidesMo[i].cloneNode(true);
    cloneSlide.classList.add("clone");
    cloneSlideMo.classList.add("clone");
    sliderContainer.appendChild(cloneSlide);
    sliderContainerMo.appendChild(cloneSlideMo);
  }

  updateWidth();
  setTimeout(() => {
    sliderContainer.classList.add("animated");
    sliderContainerMo.classList.add("animated");
  }, 100);
};

makeClone();

const moveSlide = (num) => {
  sliderContainer.style.left = `${-num * slideWidth}%`;
  sliderContainerMo.style.left = `${-num * slideWidth}%`;
  currentIdx = num;
  if (currentIdx === slideCount || currentIdx === -slideCount) {
    setTimeout(() => {
      sliderContainer.classList.remove("animated");
      sliderContainer.style.left = "0px";
      sliderContainerMo.classList.remove("animated");
      sliderContainerMo.style.left = "0px";
      currentIdx = 0;
    }, 500);
    setTimeout(() => {
      sliderContainer.classList.add("animated");
      sliderContainerMo.classList.add("animated");
    }, 600);
  }
};

// auto slide
const autoSlide = () => {
  timer = setInterval(() => {
    moveSlide(currentIdx + 1);
  }, 3000);
};

autoSlide();

const stopSlide = () => {
  clearInterval(timer);
};

sliderContainer.addEventListener("mouseenter", stopSlide);
sliderContainerMo.addEventListener("mouseenter", stopSlide);

sliderContainer.addEventListener("mouseleave", autoSlide);
sliderContainerMo.addEventListener("mouseleave", autoSlide);

// selecto menu click event
const buttons = document.querySelectorAll(".buttons > button");
console.log(buttons);

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const btnIndex = button.dataset.index;
    const leftImgs = document.querySelectorAll(".left_img > img");
    const centerImgs = document.querySelectorAll(".select_signature_img > img");
    const rightTit = document.querySelectorAll(".menu_text > h1");
    const rightText = document.querySelectorAll(".menu_text > p");
    const rightMenu = document.querySelectorAll(".menu_img");
    const topping = document.querySelectorAll(".topping_wrap");
    for (let i = 0; i < leftImgs.length; i++) {
      buttons[i].classList.remove("active");
      leftImgs[i].classList.remove("active");
      centerImgs[i].classList.remove("active");
      rightTit[i].classList.remove("active");
      rightText[i].classList.remove("active");
      rightMenu[i].classList.remove("active");
      topping[i].classList.remove("active");
    }
    button.classList.add("active");
    leftImgs[btnIndex].classList.add("active");
    centerImgs[btnIndex].classList.add("active");
    rightTit[btnIndex].classList.add("active");
    rightText[btnIndex].classList.add("active");
    rightMenu[btnIndex].classList.add("active");
    topping[btnIndex].classList.add("active");
  });
});

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
