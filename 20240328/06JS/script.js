// anime({
//   targets: "ul.menu li",
//   translateX: 250,
//   easing: "linear",
//   loop: true,
//   direction: "alternate",
//   delay: anime.stagger(100),
//   endDelay: anime.stagger(100),
// });

// let tl = anime.timeline({
//   easing: "linear",
//   duration: 1000,
// });

// tl.add({
//   target: ".circle1",
//   translateX: 500,
// }).add({
//   target: ".circle1",
//   translateX: 0,
// });

anime({
  targets: "ul li",
  translateY: (el, i) => {
    if (i % 2 == 0) {
      return 80;
    } else {
      return -80;
    }
  },
  easing: "linear",
  duration: 1500,
});
