// mouse cursor
const cursor = document.querySelector(".cursor");
console.log(cursor);
document.addEventListener("mousemove", (e) => {
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";
});
