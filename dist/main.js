!function(e){var n={};function t(a){if(n[a])return n[a].exports;var o=n[a]={i:a,l:!1,exports:{}};return e[a].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=e,t.c=n,t.d=function(e,n,a){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:a})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(t.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)t.d(a,o,function(n){return e[n]}.bind(null,o));return a},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=0)}([function(e,n,t){"use strict";t.r(n);var a=function(e){const n=document.createElement("div");n.classList.add("page"),e.appendChild(n);const t=document.createElement("img");t.src="veganpizza.jpg",n.appendChild(t);const a=document.createElement("p"),o=document.createElement("p");a.textContent="The best vegan pizza in town!",n.appendChild(a),a.textContent="Cory's is dedicated to supplying quality ingrediants and delicious pizza for all. Made in our state of the art brick ovens, this is a treat to be enjoyed by everybody, vegan or not.",n.appendChild(o)};var o=function(e){const n=document.createElement("div");n.classList.add("page"),n.innerHTML='\n    <h3 class="menu-type">Pizzas</h3>\n    <p class="item">Plain</p>\n    <p class="description">The classic- Vegan Mozz, Tomato Sauce, and New York style dough. $12.50</p>\n    <p class="item">Pepperoni</p>\n    <p class="description">Vegan pepperoni on top of our plain pie. $15.00</p>\n    <p class="item">Chicken</p>\n    <p class="description">Vegan chicken on top of our plain pie. $15.00</p>\n    <p class="item">Veggie</p>\n    <p class="description">Broccoli, Spinach, Mushrooms, and Peppers on top of a plain pie. $15.00</p>\n\n    <h3 class="menu-type">Pasta</h3>\n    <p class="item">Penne Vodka</p>\n    <p class="description">Penne with our vodka sauce. Won\'t get you drunk, but definitely will get you full. $10.50</p>\n    <p class="item">Spaghetti and Meatballs</p>\n    <p class="description">These vegan meatballs make the classic back on the menu for vegans. $12.00</p>\n    ',e.appendChild(n)};var c=function(e){const n=document.createElement("div");n.classList.add("page"),n.innerHTML='\n    <h3 class="menu-type">Contact</h3>\n    <p class="contact-info">This page was made by Cory Scharf using HTML, CSS, Javascript and Webpack. <a href="https://github.com/Cscharf91/restaurant-page">Click Here</a> to see the code.</p>\n    ',e.appendChild(n)};const i=document.querySelector("#content");a(i);const r=document.querySelector(".about-tab"),s=document.querySelector(".menu-tab"),p=document.querySelector(".contact-tab");function l(e){i.innerHTML="",e(i)}r.addEventListener("click",(function(){l(a)})),s.addEventListener("click",(function(){l(o)})),p.addEventListener("click",(function(){l(c)}))}]);