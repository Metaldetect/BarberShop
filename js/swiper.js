const swiper = new Swiper(".swiper-container", {
  slidesPerView: 1,
  spaceBetween: 10,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

const backButton = document.querySelector(".hero-item-btn.left");
const nextButton = document.querySelector(".hero-item-btn.right");

backButton.addEventListener("click", () => {
  swiper.slidePrev();
});

nextButton.addEventListener("click", () => {
  swiper.slideNext();
});
