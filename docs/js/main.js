!function(e){function t(t){for(var r,i,s=t[0],c=t[1],u=t[2],d=0,f=[];d<s.length;d++)i=s[d],Object.prototype.hasOwnProperty.call(n,i)&&n[i]&&f.push(n[i][0]),n[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);for(l&&l(t);f.length;)f.shift()();return a.push.apply(a,u||[]),o()}function o(){for(var e,t=0;t<a.length;t++){for(var o=a[t],r=!0,s=1;s<o.length;s++){var c=o[s];0!==n[c]&&(r=!1)}r&&(a.splice(t--,1),e=i(i.s=o[0]))}return e}var r={},n={0:0},a=[];function i(t){if(r[t])return r[t].exports;var o=r[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,i),o.l=!0,o.exports}i.m=e,i.c=r,i.d=function(e,t,o){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(i.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(o,r,function(t){return e[t]}.bind(null,r));return o},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var s=window.webpackJsonp=window.webpackJsonp||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var u=0;u<s.length;u++)t(s[u]);var l=c;a.push([8,1]),o()}([,,,function(e,t){document.addEventListener("DOMContentLoaded",(function(){var e=document.querySelector(".header");document.addEventListener("scroll",(function(){window.pageYOffset>625?e.classList.add("header--fixed"):e.classList.remove("header--fixed")}))}))},function(e,t){},function(e,t){if(document.querySelector(".s-buy")){var o=document.querySelectorAll(".s-buy__tab"),r=document.querySelectorAll(".s-buy__tabs-content");o.forEach((function(e){e.addEventListener("click",(function(){var t=document.querySelector("#"+e.dataset.tab);r.forEach((function(e){e.classList.remove("is-active")})),o.forEach((function(e){e.classList.remove("is-active")})),e.classList.add("is-active"),t.classList.add("is-active")}))}))}},function(e,t){},function(e,t){},function(e,t,o){"use strict";o.r(t);var r=o(0),n=o(1),a=document.querySelector("body"),i=a.parentElement,s=document.querySelector(".main-page"),c=document.querySelector(".s-info"),u=document.querySelector(".s-benefit__image");n.a.defaults({markers:!0}),r.a.registerPlugin(n.a),document.addEventListener("DOMContentLoaded",(function(){s.classList.add("show"),r.a.utils.toArray(".leaf--parallax").forEach((function(e,t){r.a.to(e,{scrollTrigger:{trigger:".s-intro",start:"top top",end:"bottom center",scrub:2},y:function(e,t){return n.a.maxScroll(window)*t.dataset.speed/100},rotation:function(e,t){return 20*t.dataset.speed}})})),r.a.utils.toArray(".s-intro__bg-img").forEach((function(e,t){r.a.to(e,{scrollTrigger:{trigger:".s-intro",start:"top top",end:"bottom center",scrub:2},y:function(e,t){return 10*t.dataset.speed}})})),console.log(c,c.offsetHeight-u.offsetHeight),r.a.to(".s-benefit__image",{scrollTrigger:{trigger:".s-info",markers:!0,start:"top +=100",endTrigger:".s-info",end:"".concat(c.offsetHeight-u.offsetHeight-200),pin:".s-benefit__image",toggleActions:"play none none reverse"},x:-(c.offsetWidth-u.offsetWidth)/2,ease:"power4.inOut"});var e=r.a.timeline({paused:"true"});e.to("#percent , #bar",{duration:.2,opacity:0,zIndex:-1}),e.to(".progress",{duration:.8,width:"0%"}),e.from(".wrapper",{duration:.8,opacity:0,ease:"Power4.out"},"-=.5"),e.from(".s-intro__logo",{duration:.5,y:50,skewY:10,opacity:0},"-=1"),e.from(".s-intro__title",{duration:.5,y:50,skewY:10,opacity:0},"-=1"),e.from(".s-intro__text",{duration:.5,y:50,skewY:10,opacity:0},"-=1");var t,o=1;function l(){o>=100?(clearInterval(t),e.play(),s.classList.add("show"),document.querySelector(".loader").style.display="none",i.classList.remove("overflow-y--hidden"),a.classList.remove("overflow-y--hidden")):(o++,document.getElementById("barconfirm").style.width=o+"%",document.getElementById("percent").innerHTML=o+"%")}window.onload=function(){t=setInterval(l,25)},r.a.set(".s-about__sheat",{transformPerspective:700});var d=r.a.to(".s-about__sheat",{x:0,rotateY:720,rotateX:0,autoAlpha:1,duration:2.5,ease:"power4.out"});n.a.create({trigger:".s-about",start:"bottom bottom",end:"top top",animation:d,toggleActions:"play reverse play reverse"});var f=document.querySelectorAll(".navigation__item-link");f.forEach((function(e){e.onclick=function(){f.forEach((function(e){e.classList.remove("is-active")})),this.classList.toggle("is-active")}}))}));o(3),o(4),o(5),o(6);var l=o(2);if(document.querySelector(".s-neurobooster"))new l.b(".s-neurobooster__slider",{modules:[l.a],grabCursor:!0,slidesPerView:1,loop:!0,centeredSlides:!0,spaceBetween:20,resistance:!0,resistanceRatio:0,speed:1e3,breakpoints:{767:{slidesPerView:3,spaceBetween:20}},pagination:{el:".swiper-pagination",clickable:!0}});o(7)}]);