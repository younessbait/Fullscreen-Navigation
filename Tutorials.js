let togle = document.querySelector(".togle");
let nav = document.querySelector("nav");
let close = document.querySelector(".close");
togle.onclick = function () {
  nav.classList.add("open");
  togle.classList.add("dis");
};
close.onclick = function () {
  nav.classList.remove("open");
  setTimeout(() => {
    togle.classList.remove("dis");
  }, 700);
};