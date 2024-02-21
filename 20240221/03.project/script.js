const btn = document.querySelector("#view");
const text = document.querySelector("#detail");
console.log(btn);
console.log(text);

btn.onclick = () => {
  text.classList.toggle("hidden");
};
