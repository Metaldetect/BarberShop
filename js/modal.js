const backdropEl = document.getElementById("backdrop");
const menuContainer = document.querySelector(".js-menu-container");
const openMenuBtn = document.querySelector(".js-open-menu");
const closeMenuBtn = document.querySelector(".js-close-menu");
const formButton = document.getElementById("form-btn");
const form = document.getElementById("form");
const menuLinks = document.querySelectorAll(".header-mobile-nav-item a");

let isMenuOpen = false;

const toggleMenu = () => {
  isMenuOpen = !isMenuOpen;
  openMenuBtn.setAttribute("aria-expanded", isMenuOpen);
  menuContainer.classList.toggle("is-open");
  backdropEl.classList.toggle("active");
};

openMenuBtn.addEventListener("click", toggleMenu);
closeMenuBtn.addEventListener("click", toggleMenu);

formButton.addEventListener("click", () => {
  form.scrollIntoView({ behavior: "smooth" });
});

menuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    if (isMenuOpen) {
      toggleMenu();
    }
  });
});

const scrollToForm = () => {
  form.scrollIntoView({ behavior: "smooth" });
};

const closeMenuAndScrollToForm = () => {
  if (isMenuOpen) {
    toggleMenu();
  }
  scrollToForm();
};

const anotherButton1 = document.getElementById("form-btn-1");
anotherButton1.addEventListener("click", closeMenuAndScrollToForm);

const anotherButton2 = document.getElementById("form-btn-2");
anotherButton2.addEventListener("click", closeMenuAndScrollToForm);

const anotherButton3 = document.getElementById("form-btn-3");
anotherButton3.addEventListener("click", closeMenuAndScrollToForm);

const anotherButton4 = document.getElementById("form-btn-4");
anotherButton4.addEventListener("click", closeMenuAndScrollToForm);
