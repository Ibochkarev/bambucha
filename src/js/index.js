import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

gsap.to(".s-info__lemon", {
  scrollTrigger: {
    trigger: ".s-info__lemon",
    scrub: true,
    pin: true,
    start: "center center",
    end: "bottom",
    toggleClass: "active",
    ease: "power2",
  },
});

// gsap.to(".s-info__sheat", {
//   scrollTrigger: {
//     trigger: ".s-info__sheat",
//     scrub: true,
//     pin: true,
//     start: "center center",
//     end: "bottom",
//     toggleClass: "active",
//     ease: "power2",
//   },
// });

gsap.set(".s-info__sheat", { transformPerspective: 700 });

const infoSheat = gsap.to(".s-info__sheat", {
  x: 0,
  rotateY: 720,
  rotateX: 0,
  autoAlpha: 1,
  duration: 2.5,
  ease: "power4.out",
});

ScrollTrigger.create({
  trigger: ".s-info",
  start: "bottom bottom",
  end: "top top",
  animation: infoSheat,
  toggleActions: "play reverse play reverse",
});

const stickyNavs = document.querySelectorAll(".navigation__item-link");

stickyNavs.forEach((item) => {
  item.onclick = function () {
    stickyNavs.forEach(item => {
      item.classList.remove('is-active')
    })
    this.classList.toggle("is-active");
  };
});

import "./import/sections";
import "./import/components";
