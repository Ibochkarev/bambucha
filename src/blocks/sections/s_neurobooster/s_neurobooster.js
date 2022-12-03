import Swiper, { Pagination } from "swiper";

if (document.querySelector(".s-neurobooster")) {
  const studentLifeSwiperSlider = new Swiper(".s-neurobooster__slider", {
    modules: [Pagination],
    grabCursor: true,
    slidesPerView: 1,
    loop: true,
    centeredSlides: true,
    spaceBetween: 20,
    resistance: true,
    resistanceRatio: 0,
    speed: 1000,
    breakpoints: {
      767: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
}
