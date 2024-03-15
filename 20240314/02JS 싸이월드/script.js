// Navigation
const menuHome = document.querySelector("#menuHome");
const menuGame = document.querySelector("#menuGame");
const menuJukebox = document.querySelector("#menuJukebox");
const contentFrame = document.querySelector("#contentFrame");

const homeChange = () => {
  contentFrame.setAttribute("src", "./home.html");
  menuHome.style = "color: #ee389c; background: #fff;";
  menuGame.style = "color: #fff; background: #ee389c;";
  menuJukebox.style = "color: #fff; background: #ee389c;";
};

homeChange(0);

const gameChange = () => {
  contentFrame.setAttribute("src", "./game.html");
  menuHome.style = "color: #fff; background: #ee389c;";
  menuGame.style = "color: #ee389c; background: #fff;";
  menuJukebox.style = "color: #fff; background: #ee389c;";
};

const jukeboxChange = () => {
  contentFrame.setAttribute("src", "./jukebox.html");
  menuHome.style = "color: #fff; background: #ee389c;";
  menuGame.style = "color: #fff; background: #ee389c;";
  menuJukebox.style = "color: #ee389c;; background: #fff;";
};

menuHome.addEventListener("click", homeChange);
menuGame.addEventListener("click", gameChange);
menuJukebox.addEventListener("click", jukeboxChange);
