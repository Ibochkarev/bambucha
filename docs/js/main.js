!function(e){function t(t){for(var r,i,s=t[0],c=t[1],l=t[2],d=0,f=[];d<s.length;d++)i=s[d],Object.prototype.hasOwnProperty.call(n,i)&&n[i]&&f.push(n[i][0]),n[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);for(u&&u(t);f.length;)f.shift()();return a.push.apply(a,l||[]),o()}function o(){for(var e,t=0;t<a.length;t++){for(var o=a[t],r=!0,s=1;s<o.length;s++){var c=o[s];0!==n[c]&&(r=!1)}r&&(a.splice(t--,1),e=i(i.s=o[0]))}return e}var r={},n={0:0},a=[];function i(t){if(r[t])return r[t].exports;var o=r[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,i),o.l=!0,o.exports}i.m=e,i.c=r,i.d=function(e,t,o){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(i.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(o,r,function(t){return e[t]}.bind(null,r));return o},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var s=window.webpackJsonp=window.webpackJsonp||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var u=c;a.push([12,1]),o()}([,,,,,,,,function(e,t){},function(e,t){if(document.querySelector(".s-buy")){var o=document.querySelectorAll(".s-buy__tab"),r=document.querySelectorAll(".s-buy__tabs-content");o.forEach((function(e){e.addEventListener("click",(function(){var t=document.querySelector("#"+e.dataset.tab);r.forEach((function(e){e.classList.remove("is-active")})),o.forEach((function(e){e.classList.remove("is-active")})),e.classList.add("is-active"),t.classList.add("is-active")}))}))}},function(e,t){},function(e,t){},function(e,t,o){"use strict";o.r(t);var r=o(1),n=o(0),a=o(5),i=o(3),s=o(4),c=o.n(s),l=(document.querySelector("body"),document.querySelector(".header")),u=document.querySelector(".navigation"),d=document.querySelector(".main-page"),f=document.querySelector(".s-info"),p=document.querySelector(".s-benefit__image"),g=document.querySelector("[data-scroll-container]"),m=r.a.matchMedia(),y=new i.a({el:document.querySelector("[data-scroll-container]"),smooth:!0,scrollFromAnywhere:!0,reloadOnContextChange:!0,mobile:{el:document.querySelector("[data-scroll-container]"),smooth:!0},tablet:{el:document.querySelector("[data-scroll-container]"),smooth:!0}});c()(g,{background:!0},(function(){y.update()})),r.a.registerPlugin(n.a,a.a),n.a.defaults(),y.on("scroll",n.a.update),n.a.scrollerProxy("[data-scroll-container]",{scrollTop:function(e){return arguments.length?y.scrollTo(e,{duration:0,disableLerp:!0}):y.scroll.instance.scroll.y},getBoundingClientRect:function(){return{top:0,left:0,width:window.innerWidth,height:window.innerHeight}},pinType:document.querySelector("[data-scroll-container]").style.transform?"transform":"fixed"}),n.a.defaults({scroller:"[data-scroll-container]"}),n.a.addEventListener("refresh",(function(){return y.update()})),n.a.refresh(),window.addEventListener("load",(function(){n.a.refresh(),y.update()})),window.addEventListener("resize",(function(){n.a.refresh(),y.update(),r.a.matchMediaRefresh()})),document.addEventListener("DOMContentLoaded",(function(){d.classList.add("show"),r.a.utils.toArray(".leaf--parallax").forEach((function(e,t){r.a.to(e,{scrollTrigger:{trigger:".s-intro",start:"top top",end:"bottom center",scrub:2},y:function(e,t){return n.a.maxScroll(window)*t.dataset.speed/100},rotation:function(e,t){return 20*t.dataset.speed}})})),r.a.utils.toArray(".s-intro__bg-img").forEach((function(e,t){r.a.to(e,{scrollTrigger:{trigger:".s-intro",start:"top top",end:"bottom center",scrub:2},y:function(e,t){return 10*t.dataset.speed}})})),n.a.create({trigger:".s-info",onEnter:function(){l.classList.add("active")},onLeaveBack:function(){l.classList.remove("active")}}),m.add("(min-width: 768px)",(function(){r.a.to(".s-benefit__image",{scrollTrigger:{trigger:".s-info",start:"top top",endTrigger:".s-info",end:"".concat(f.offsetHeight-p.offsetHeight-150),pin:".s-benefit__image",toggleActions:"play none none reverse"},x:-(f.offsetWidth-p.offsetWidth)/2,ease:"slowMo"});r.a.to(".s-about__sheat",{scrollTrigger:{trigger:".s-about",start:"top top",end:"bottom center",scrub:2},y:function(e,t){return n.a.maxScroll(window)*t.dataset.speed/100},rotation:function(e,t){return 20*t.dataset.speed}}),r.a.to(".s-about__lemon",{scrollTrigger:{trigger:".s-about",start:"top top",end:"bottom center",scrub:2},y:function(e,t){return n.a.maxScroll(window)*t.dataset.speed/100},rotation:function(e,t){return 20*t.dataset.speed}})}));var e=r.a.timeline({paused:"true"});e.to("#percent , #bar",{duration:.2,opacity:0,zIndex:-1}),e.to(".progress",{duration:.8,width:"0%"}),e.from(".main-page",{duration:.6,opacity:0,ease:"Power4.out"},"-=.5"),e.from(".s-intro__logo",{duration:.5,y:50,skewY:10,opacity:0},"-=1"),e.from(".s-intro__title",{duration:.5,y:50,skewY:10,opacity:0},"-=1"),e.from(".s-intro__text",{duration:.5,y:50,skewY:10,opacity:0},"-=1");var t,o=1;function a(){o>=100?(clearInterval(t),e.play(),d.classList.add("show"),document.querySelector(".loader").style.display="none",y.start(),u.classList.add("active")):(o++,document.getElementById("barconfirm").style.width=o+"%",document.getElementById("percent").innerHTML=o+"%",y.stop(),u.classList.remove("active"))}window.onload=function(){t=setInterval(a,25)},n.a.create({trigger:".s-about",start:"bottom bottom",end:"top top",animation:i,toggleActions:"play reverse play reverse"});var i=r.a.to(".s-about__sheat",{x:0,rotateY:720,rotateX:0,autoAlpha:1,duration:2.5,ease:"power4.out"}),s=document.querySelectorAll(".navigation__item-link"),c=document.querySelector(".header .button");c.addEventListener("click",(function(e){e.preventDefault(),y.scrollTo(c.getAttribute("href"),{offset:0,callback:function(){},duration:600,easing:[.25,0,.35,1],disableLerp:!0})})),s.forEach((function(e){e.onclick=function(e){e.preventDefault();var t=this.getAttribute("href"),o=document.querySelector(t);y.scrollTo(o.offsetTop,{offset:0,callback:function(){},duration:600,easing:[.25,0,.35,1],disableLerp:!0}),s.forEach((function(e){e.classList.remove("is-active")})),this.classList.toggle("is-active")}}))}));o(8),o(9),o(10);var b=o(2);if(document.querySelector(".s-neurobooster"))new b.b(".s-neurobooster__slider",{modules:[b.a],grabCursor:!0,slidesPerView:1,loop:!0,centeredSlides:!0,spaceBetween:20,resistance:!0,resistanceRatio:0,speed:1e3,observer:!0,observeParents:!0,breakpoints:{767:{slidesPerView:3,spaceBetween:20}},pagination:{el:".swiper-pagination",clickable:!0}});o(11)}]);