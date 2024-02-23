const bth = document.querySelector("#btn");
const nav = document.querySelector("#nav");
console.log(btn);
console.log(nav);

btn.addEventLisner("click", () => {
  btn.classList.toggle("active");
  nav.classList.toggle("active");
});
