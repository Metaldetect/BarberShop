(() => {
  const backdrop = document.getElementById("backdrop");
  const mobileMenu = document.querySelector(".js-menu-container");
  const openMenuBtn = document.querySelector(".js-open-menu");
  const closeMenuBtn = document.querySelector(".js-close-menu");
  const button = document.getElementById("form-btn");
  const form = document.getElementById("form");

  const toggleMenu = () => {
    const isMenuOpen =
      openMenuBtn.getAttribute("aria-expanded") === "true" || false;
    openMenuBtn.setAttribute("aria-expanded", !isMenuOpen);
    mobileMenu.classList.toggle("is-open");
    backdrop.classList.toggle("active");
  };

  openMenuBtn.addEventListener("click", toggleMenu);
  closeMenuBtn.addEventListener("click", toggleMenu);

  button.addEventListener("click", function () {
    form.scrollIntoView({ behavior: "smooth" });
  });

  const anotherButton1 = document.getElementById("form-btn-1");
  anotherButton1.addEventListener("click", function () {
    form.scrollIntoView({ behavior: "smooth" });
  });

  const anotherButton2 = document.getElementById("form-btn-2");
  anotherButton2.addEventListener("click", function () {
    form.scrollIntoView({ behavior: "smooth" });
  });

  const anotherButton3 = document.getElementById("form-btn-3");
  anotherButton3.addEventListener("click", function () {
    form.scrollIntoView({ behavior: "smooth" });
  });

  const anotherButton4 = document.getElementById("form-btn-4");
  anotherButton4.addEventListener("click", function () {
    form.scrollIntoView({ behavior: "smooth" });
    toggleMenu();
  });
})();
