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

gsap.to(".s-info__sheat", {
  scrollTrigger: {
    trigger: ".s-info__sheat",
    scrub: true,
    pin: true,
    start: "center center",
    end: "bottom",
    toggleClass: "active",
    ease: "power2",
  },
});

import "./import/sections";
import "./import/components";
