// SPROBOWAĆ ZMIENIC SRC OBRAZKA NA BTN MENU
const menuBtn = document.querySelector(".btn__menu");
const navEl = document.querySelector(".nav");
const icon = document.getElementById("icon");

menuBtn.addEventListener("click", function () {
  navEl.classList.toggle("open");
  document.body.classList.toggle("menu__open");
  if (navEl.classList.contains("open")) {
    icon.src = "images/icon-menu-close.svg";
    menuBtn.setAttribute("aria-expanded", true);
  } else {
    icon.src = "images/icon-menu.svg";
    menuBtn.setAttribute("aria-expanded", false);
  }
});
