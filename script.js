const nav = document.querySelector(".header nav ul");
const hamburgerMenu = document.querySelector(".hamburger_menu");

hamburgerMenu.addEventListener("click", () => {
  nav.classList.toggle("showMenu");
});

window.addEventListener("scroll", () => {
  if (scrollY > 50) {
    document.querySelector(".header").classList.add("sticky");
  } else {
    document.querySelector(".header").classList.remove("sticky");
  }
});
