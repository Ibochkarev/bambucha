import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

const body = document.querySelector("body"),
  html = body.parentElement;

body.classList.add("overflow-y--hidden");
html.classList.add("overflow-y--hidden");

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

gsap.to(".s-about__lemon", {
  scrollTrigger: {
    trigger: ".s-about__lemon",
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

const load = gsap.timeline({
  paused: "true",
});
load.to("#percent , #bar", {
  duration: 0.2,
  opacity: 0,
  zIndex: -1,
});
load.to(".progress", {
  duration: 0.8,
  width: "0%",
});
load.from(
  ".wrapper",
  {
    duration: 0.8,
    opacity: 0,
    ease: "Power4.out",
  },
  "-=.5"
);
load.from(
  ".s-intro__logo",
  {
    duration: 0.5,
    y: 50,
    skewY: 10,
    opacity: 0,
  },
  "-=1"
);
load.from(
  ".s-intro__title",
  {
    duration: 0.5,
    y: 50,
    skewY: 10,
    opacity: 0,
  },
  "-=1"
);

load.from(
  ".s-intro__text",
  {
    duration: 0.5,
    y: 50,
    skewY: 10,
    opacity: 0,
  },
  "-=1"
);

let id,
  width = 1;

function loading() {
  id = setInterval(frame, 25);
}

function frame() {
  if (width >= 100) {
    clearInterval(id);
    load.play();

    body.classList.remove("overflow-y--hidden");
    html.classList.remove("overflow-y--hidden");
  } else {
    width++;
    document.getElementById("barconfirm").style.width = width + "%";
    document.getElementById("percent").innerHTML = width + "%";
  }
}

window.onload = function () {
  loading();
};

gsap.set(".s-about__sheat", { transformPerspective: 700 });

const infoSheat = gsap.to(".s-about__sheat", {
  x: 0,
  rotateY: 720,
  rotateX: 0,
  autoAlpha: 1,
  duration: 2.5,
  ease: "power4.out",
});

ScrollTrigger.create({
  trigger: ".s-about",
  start: "bottom bottom",
  end: "top top",
  animation: infoSheat,
  toggleActions: "play reverse play reverse",
});

// Панель переходов между ссылками
const stickyNavs = document.querySelectorAll(".navigation__item-link");

stickyNavs.forEach((item) => {
  item.onclick = function () {
    stickyNavs.forEach((item) => {
      item.classList.remove("is-active");
    });
    this.classList.toggle("is-active");
  };
});

import "./import/sections";
import "./import/components";
