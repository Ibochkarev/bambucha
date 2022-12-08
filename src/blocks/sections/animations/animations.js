import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import LocomotiveScroll from "locomotive-scroll";
import imagesLoaded from "imagesloaded";

let body = document.querySelector("body"),
  html = body.parentElement,
  header = document.querySelector(".header"),
  navigation = document.querySelector(".navigation"),
  main = document.querySelector(".main-page"),
  info = document.querySelector(".s-info"),
  bank = document.querySelector(".s-benefit__image"),
  scrollContainer = document.querySelector("[data-scroll-container]");

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("[data-scroll-container]"),
  smooth: true,
  scrollFromAnywhere: true,
  // scrollbarClass: 'c-scrollbar',
  reloadOnContextChange: true,
  mobile: {
    el: document.querySelector("[data-scroll-container]"),
    smooth: true,
  },
  tablet: {
    el: document.querySelector("[data-scroll-container]"),
    smooth: true,
  },
});

imagesLoaded(scrollContainer, { background: true }, function () {
  locoScroll.update();
});

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

ScrollTrigger.defaults();

locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy("[data-scroll-container]", {
  scrollTop(value) {
    return arguments.length
      ? locoScroll.scrollTo(value, { duration: 0, disableLerp: true })
      : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {
      top: 0,
      left: 0,
      width: window.innerWidth,
      height: window.innerHeight,
    };
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("[data-scroll-container]").style.transform
    ? "transform"
    : "fixed",
});

ScrollTrigger.defaults({ scroller: "[data-scroll-container]" });
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
ScrollTrigger.refresh();

window.addEventListener("load", function () {
  ScrollTrigger.refresh();
  locoScroll.update();
});

window.addEventListener("resize", function () {
  ScrollTrigger.refresh();
  locoScroll.update();
});

document.addEventListener("DOMContentLoaded", function () {
  main.classList.add("show");

  gsap.utils.toArray(".leaf--parallax").forEach((el, i) => {
    gsap.to(el, {
      scrollTrigger: {
        trigger: ".s-intro",
        start: "top top",
        end: "bottom center",
        scrub: 2,
      },
      y: (i, target) =>
        (ScrollTrigger.maxScroll(window) * target.dataset.speed) / 100,
      rotation: (i, target) => 20 * target.dataset.speed,
    });
  });

  gsap.utils.toArray(".s-intro__bg-img").forEach((el, i) => {
    gsap.to(el, {
      scrollTrigger: {
        trigger: ".s-intro",
        start: "top top",
        end: "bottom center",
        scrub: 2,
      },
      y: (i, target) => target.dataset.speed * 10,
    });
  });

  // Появление шапки после прокрутки интро секции
  ScrollTrigger.create({
    trigger: ".s-info",
    onEnter: () => {
      header.classList.add("active");
    },
    onLeaveBack: () => {
      header.classList.remove("active");
    },
  });

  gsap.to(".s-benefit__image", {
    scrollTrigger: {
      trigger: ".s-info",
      start: "top top",
      endTrigger: ".s-info",
      end: `${info.offsetHeight - bank.offsetHeight - 150}`,
      pin: ".s-benefit__image",
      toggleActions: "play none none reverse",
    },
    x: -(info.offsetWidth - bank.offsetWidth) / 2,
    ease: "power4.inOut",
  });

  const infoSheat = gsap.to(".s-about__sheat", {
    scrollTrigger: {
      trigger: ".s-about",
      start: "top top",
      end: "bottom center",
      scrub: 2,
    },
    y: (i, target) =>
      (ScrollTrigger.maxScroll(window) * target.dataset.speed) / 100,
    rotation: (i, target) => 20 * target.dataset.speed,
  });

  const lemon = gsap.to(".s-about__lemon", {
    scrollTrigger: {
      trigger: ".s-about",
      start: "top top",
      end: "bottom center",
      scrub: 2,
    },
    y: (i, target) =>
      (ScrollTrigger.maxScroll(window) * target.dataset.speed) / 100,
    rotation: (i, target) => 20 * target.dataset.speed,
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
    ".main-page",
    {
      duration: 0.6,
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
      main.classList.add("show");
      document.querySelector(".loader").style.display = "none";
      locoScroll.start();
      // header.classList.add("active");
      navigation.classList.add("active");
    } else {
      width++;
      document.getElementById("barconfirm").style.width = width + "%";
      document.getElementById("percent").innerHTML = width + "%";
      locoScroll.stop();
      // header.classList.remove("active");
      navigation.classList.remove("active");
    }
  }

  window.onload = function () {
    loading();
  };

  ScrollTrigger.create({
    trigger: ".s-about",
    start: "bottom bottom",
    end: "top top",
    animation: infoSheat,
    toggleActions: "play reverse play reverse",
  });

  // Панель переходов между ссылками
  const stickyNavs = document.querySelectorAll(".navigation__item-link");
  const scrollToForm = document.querySelector('.header .button');

  console.log(scrollToForm)

  scrollToForm.addEventListener('click', (e) => {
      e.preventDefault();

      locoScroll.scrollTo(scrollToForm.getAttribute('href'), {
        'offset': 0,
        'callback': function() {
          // do something...
        },
        'duration': 600,
        'easing': [0.25, 0.00, 0.35, 1.00],
        'disableLerp': true
      } );
    })

  stickyNavs.forEach((item) => {
    item.onclick = function (e) {
      e.preventDefault();
      const href = this.getAttribute('href');
      const scrollToElement = document.querySelector(href);

      locoScroll.scrollTo( scrollToElement.offsetTop, {
        'offset': 0,
        'callback': function() {
          // do something...
        },
        'duration': 600,
        'easing': [0.25, 0.00, 0.35, 1.00],
        'disableLerp': true
      } );

      stickyNavs.forEach((item) => {
        item.classList.remove("is-active");
      });
      this.classList.toggle("is-active");
    };
  });
});
