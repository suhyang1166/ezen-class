window.onload = () => {
  const bgCount = 5;
  const randomNum = Math.ceil(Math.random() * bgCount);
  document.body.style.backgroundImage = `url(images/bg-${randomNum}.jpg)`;
};
