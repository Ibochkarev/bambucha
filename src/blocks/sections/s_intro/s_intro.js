import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

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
