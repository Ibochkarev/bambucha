!function(e){function t(t){for(var o,i,s=t[0],c=t[1],l=t[2],d=0,f=[];d<s.length;d++)i=s[d],Object.prototype.hasOwnProperty.call(n,i)&&n[i]&&f.push(n[i][0]),n[i]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(e[o]=c[o]);for(u&&u(t);f.length;)f.shift()();return a.push.apply(a,l||[]),r()}function r(){for(var e,t=0;t<a.length;t++){for(var r=a[t],o=!0,s=1;s<r.length;s++){var c=r[s];0!==n[c]&&(o=!1)}o&&(a.splice(t--,1),e=i(i.s=r[0]))}return e}var o={},n={0:0},a=[];function i(t){if(o[t])return o[t].exports;var r=o[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=e,i.c=o,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)i.d(r,o,function(t){return e[t]}.bind(null,o));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var s=window.webpackJsonp=window.webpackJsonp||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var u=c;a.push([8,1]),r()}([,,,,function(e,t){document.addEventListener("DOMContentLoaded",(function(){var e=document.querySelector(".header");document.addEventListener("scroll",(function(){window.pageYOffset>625?e.classList.add("header--fixed"):e.classList.remove("header--fixed")}))}))},function(e,t){},function(e,t){if(document.querySelector(".s-buy")){var r=document.querySelectorAll(".s-buy__tab"),o=document.querySelectorAll(".s-buy__tabs-content");r.forEach((function(e){e.addEventListener("click",(function(){var t=document.querySelector("#"+e.dataset.tab);o.forEach((function(e){e.classList.remove("is-active")})),r.forEach((function(e){e.classList.remove("is-active")})),e.classList.add("is-active"),t.classList.add("is-active")}))}))}},function(e,t){},function(e,t,r){"use strict";r.r(t);var o=r(0),n=r(1),a=r(3);r(4),r(5),r(6);o.a.registerPlugin(n.a),o.a.utils.toArray(".leaf--parallax").forEach((function(e,t){o.a.to(e,{scrollTrigger:{trigger:".s-intro",start:"top top",end:"bottom center",scrub:2},y:function(e,t){return n.a.maxScroll(window)*t.dataset.speed/100},rotation:function(e,t){return 20*t.dataset.speed}})}));var i=r(2);if(document.querySelector(".s-neurobooster"))new i.b(".s-neurobooster__slider",{modules:[i.a],grabCursor:!0,slidesPerView:1,loop:!0,centeredSlides:!0,spaceBetween:20,resistance:!0,resistanceRatio:0,speed:1e3,breakpoints:{767:{slidesPerView:3,spaceBetween:20}},pagination:{el:".swiper-pagination",clickable:!0}});r(7);var s=document.querySelector("body"),c=s.parentElement,l=document.querySelector(".main-page");s.classList.add("overflow-y--hidden"),c.classList.add("overflow-y--hidden"),o.a.registerPlugin(n.a,a.a),o.a.to(".s-about__lemon",{scrollTrigger:{trigger:".s-about__lemon",scrub:!0,pin:!0,start:"center center",end:"bottom",toggleClass:"active",ease:"power2"}});var u=o.a.timeline({paused:"true"});u.to("#percent , #bar",{duration:.2,opacity:0,zIndex:-1}),u.to(".progress",{duration:.8,width:"0%"}),u.from(".wrapper",{duration:.8,opacity:0,ease:"Power4.out"},"-=.5"),u.from(".s-intro__logo",{duration:.5,y:50,skewY:10,opacity:0},"-=1"),u.from(".s-intro__title",{duration:.5,y:50,skewY:10,opacity:0},"-=1"),u.from(".s-intro__text",{duration:.5,y:50,skewY:10,opacity:0},"-=1");var d,f=1;function p(){f>=100?(clearInterval(d),u.play(),l.classList.add("show"),document.querySelector(".loader").style.display="none",c.classList.remove("overflow-y--hidden"),s.classList.remove("overflow-y--hidden")):(f++,document.getElementById("barconfirm").style.width=f+"%",document.getElementById("percent").innerHTML=f+"%")}window.onload=function(){d=setInterval(p,25)},o.a.set(".s-about__sheat",{transformPerspective:700});var y=o.a.to(".s-about__sheat",{x:0,rotateY:720,rotateX:0,autoAlpha:1,duration:2.5,ease:"power4.out"});n.a.create({trigger:".s-about",start:"bottom bottom",end:"top top",animation:y,toggleActions:"play reverse play reverse"});var v=document.querySelectorAll(".navigation__item-link");v.forEach((function(e){e.onclick=function(){v.forEach((function(e){e.classList.remove("is-active")})),this.classList.toggle("is-active")}}))}]);