import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const body = document.querySelector('body'),
      html = body.parentElement,
      main = document.querySelector('.main-page');

ScrollTrigger.defaults({
  markers: true,
});

gsap.registerPlugin(ScrollTrigger);

document.addEventListener('DOMContentLoaded', function(){
  main.classList.add('show');

  gsap.utils.toArray('.leaf--parallax').forEach((el, i) => {
    gsap.to(el, {
        scrollTrigger: {
            trigger: '.s-intro',
            start: 'top top',
            end: 'bottom center',
            scrub: 2,
        },
        y: (i, target) => (ScrollTrigger.maxScroll(window) * target.dataset.speed) / 100,
        rotation: (i, target) => 20 * target.dataset.speed
    });
  });

  gsap.utils.toArray('.s-intro__bg-img').forEach((el, i) => {
    gsap.to(el, {
        scrollTrigger: {
            trigger: '.s-intro',
            start: 'top top',
            end: 'bottom center',
            scrub: 2,
        },
        y: (i, target) => target.dataset.speed * 10,
    });
  });

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
      main.classList.add('show');
      document.querySelector(".loader").style.display = "none";
      html.classList.remove("overflow-y--hidden");
      body.classList.remove("overflow-y--hidden");
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
});