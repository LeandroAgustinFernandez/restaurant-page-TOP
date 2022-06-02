(()=>{"use strict";var e={28:(e,t,n)=>{n.d(t,{Z:()=>c});var a=n(81),i=n.n(a),r=n(645),o=n.n(r)()(i());o.push([e.id,"@import url(https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,300;0,400;0,500;1,200&display=swap);"]),o.push([e.id,'* {\n  margin: 0;\n  padding: 0;\n}\nbody {\n  font-family: "Raleway", sans-serif;\n  color: rgb(248, 248, 248);\n}\n#content {\n  min-height: 100vh;\n  object-fit: cover;\n  display: flex;\n  flex-direction: column;\n}\nheader,\nfooter {\n  background-color: rgb(62, 45, 38, 0.5);\n  padding: 1.2em 0;\n  font-size: 1.3rem;\n  font-weight: bold;\n}\nnav > ul {\n  list-style: none;\n  display: flex;\n  gap: 20px;\n  justify-content: center;\n}\nmain {\n  display: flex;\n  padding: 2em 4em;\n  align-items: center;\n  flex: 1;\n}\nsection {\n  background-color: rgb(62, 45, 38, 0.5);\n  min-height: 500px;\n  flex: 1;\n  border-radius: 3px;\n}\n.article-home {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 20px;\n  padding: 2em 6em;\n}\n.divtext {\n  flex: 1;\n  align-items: center;\n}\n.divtext > h2 {\n  font-size: 1.7rem;\n  font-weight: bold;\n}\n.divtext > p {\n  font-size: 1.2rem;\n  margin: 1em 0;\n  text-shadow: 1px 1px rgb(51, 35, 29);;\n}\n@media (max-width: 1024px) {\n  .article-home {\n    flex-direction: column;\n    padding: 2em 3em;\n  }\n  .divtext > p {\n    font-size: 1rem;\n  }\n}\n.divimg {\n  flex: 1;\n  margin: auto;\n}\n.img-home {\n  width: 100%;\n  object-fit: contain;\n  opacity: 0.8;\n  border-radius: 2px;\n}\n.title {\n  font-size: 2.5rem;\n  text-align: center;\n  margin: 1em;\n}\nfooter {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 30px;\n  width: 100%;\n}\n.github {\n  text-decoration: none;\n  color: white;\n  font-size: 2rem;\n}\n',""]);const c=o},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",a=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),a&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),a&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,a,i,r){"string"==typeof e&&(e=[[null,e,void 0]]);var o={};if(a)for(var c=0;c<this.length;c++){var l=this[c][0];null!=l&&(o[l]=!0)}for(var d=0;d<e.length;d++){var s=[].concat(e[d]);a&&o[s[0]]||(void 0!==r&&(void 0===s[5]||(s[1]="@layer".concat(s[5].length>0?" ".concat(s[5]):""," {").concat(s[1],"}")),s[5]=r),n&&(s[2]?(s[1]="@media ".concat(s[2]," {").concat(s[1],"}"),s[2]=n):s[2]=n),i&&(s[4]?(s[1]="@supports (".concat(s[4],") {").concat(s[1],"}"),s[4]=i):s[4]="".concat(i)),t.push(s))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,a=0;a<t.length;a++)if(t[a].identifier===e){n=a;break}return n}function a(e,a){for(var r={},o=[],c=0;c<e.length;c++){var l=e[c],d=a.base?l[0]+a.base:l[0],s=r[d]||0,p="".concat(d," ").concat(s);r[d]=s+1;var u=n(p),m={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==u)t[u].references++,t[u].updater(m);else{var f=i(m,a);a.byIndex=c,t.splice(c,0,{identifier:p,updater:f,references:1})}o.push(p)}return o}function i(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,i){var r=a(e=e||[],i=i||{});return function(e){e=e||[];for(var o=0;o<r.length;o++){var c=n(r[o]);t[c].references--}for(var l=a(e,i),d=0;d<r.length;d++){var s=n(r[d]);0===t[s].references&&(t[s].updater(),t.splice(s,1))}r=l}}},569:e=>{var t={};e.exports=function(e,n){var a=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var a="";n.supports&&(a+="@supports (".concat(n.supports,") {")),n.media&&(a+="@media ".concat(n.media," {"));var i=void 0!==n.layer;i&&(a+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),a+=n.css,i&&(a+="}"),n.media&&(a+="}"),n.supports&&(a+="}");var r=n.sourceMap;r&&"undefined"!=typeof btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),t.styleTagTransform(a,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(a){var i=t[a];if(void 0!==i)return i.exports;var r=t[a]={id:a,exports:{}};return e[a](r,r.exports,n),r.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var a=t.getElementsByTagName("script");a.length&&(e=a[a.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),n.nc=void 0,(()=>{function e(){let e=document.createElement("section"),t=document.createElement("article");t.classList.add("article-home");let n=document.createElement("div"),a=document.createElement("div");n.classList.add("divimg"),a.classList.add("divtext");let i=document.createElement("img");i.classList.add("img-home"),i.src="images/92456e777bc063c43cea6b04a0075eff.jpg";let r=document.createElement("h2"),o=document.createElement("p"),c=document.createElement("p"),l=document.createElement("p"),d=document.createElement("p");r.textContent="Chi siamo",o.textContent="Nel 1976 Robert Capitano e Gianluca Quinta, che quattordici anni dopo si sposeranno, e Antonio Natatori frequentavano insieme il Secondo Liceo Storico. A distanza di ventisei anni decidono di intraprendere, sempre insieme, una nuova avventura: l’apertura di una grande pizzeria.",c.textContent="Il principio su cui basammo questa operazione fu ben preciso: aggiornare il concetto usuale di pizzeria, abbandonando il vecchio luogo comune secondo il quale in pizzeria si devono utilizzare materie prime di basso costo.",l.textContent="Sin dall’inizio procedemmo allo studio di un impasto qualitativo, con sperimentazioni sulle maturazioni, e alla ricerca di materie prime selezionate. Questo lavoro non si è mai fermato negli anni successivi, portando alla trasformazione graduale degli impasti fino a quello attuale e alla concezione di nuovi pizze e supplì che potremmo definire “d’autore”.",d.textContent="“La Gatta” attirò subito l’attenzione dei giornali e subito dopo delle guide e ciò, insieme al passaparola positivo dei primi clienti, portò rapidamente ad un buon successo del locale. I risultati positivi ci spinsero ad insistere sulla strada della qualità e della ricerca: la carta dei vini arrivò ad annoverare più di 200 etichette, iniziò la selezione delle birre artigianali fino alle attuali 70, iniziammo ad acquistare superalcolici di qualità sempre più elevata.";let s=document.createElement("h1");return s.classList.add("title"),s.textContent="Il gatto mangione",a.appendChild(r),a.appendChild(o),a.appendChild(c),a.appendChild(l),a.appendChild(d),n.appendChild(i),t.appendChild(a),t.appendChild(n),e.appendChild(s),e.appendChild(t),e}let t=null;function a(n){let a=n.target.textContent;switch(a=a.toLowerCase(),a){case"home":t=e();break;case"menu":t=function(){let e=document.createElement("h1");return e.classList.add("title"),e.textContent="MENU",e}();break;case"conttati":t=function(){let e=document.createElement("h1");return e.classList.add("title"),e.textContent="CONTACT",e}()}i()}function i(){const n=document.querySelector("#content");n.setAttribute("style",'background-image: url("./images/b0ec99e28a52f762e99b57e2553d90e7.jpg");background-size:cover;background-repeat:no-repeat'),n.innerHTML="",n.appendChild(function(){let e=document.createElement("header"),t=document.createElement("nav"),n=document.createElement("ul"),i=document.createElement("li"),r=document.createElement("li"),o=document.createElement("li"),c=document.createElement("a"),l=document.createElement("a"),d=document.createElement("a");return c.textContent="HOME",l.textContent="MENU",d.textContent="CONTTATI",c.addEventListener("click",a),l.addEventListener("click",a),d.addEventListener("click",a),i.appendChild(c),r.appendChild(l),o.appendChild(d),n.appendChild(i),n.appendChild(r),n.appendChild(o),t.appendChild(n),e.appendChild(t),e}()),n.appendChild(function(t=null){let n=document.createElement("main");return null==t?n.appendChild(e()):n.appendChild(t),n}(t)),n.appendChild(function(){let e=document.createElement("footer"),t=document.createElement("span"),n=document.createElement("a"),a=document.createElement("i");return a.setAttribute("class","fa-brands fa-github"),n.href="https://github.com/LeandroAgustinFernandez/restaurant-page-TOP",n.classList.add("github"),n.target="_blank",t.classList.add("label-copy"),t.textContent="Copyright © Leandro Agustin Fernandez 2022 (The Odin Project)",n.appendChild(a),e.appendChild(t),e.appendChild(n),e}())}var r=n(379),o=n.n(r),c=n(795),l=n.n(c),d=n(569),s=n.n(d),p=n(565),u=n.n(p),m=n(216),f=n.n(m),h=n(589),g=n.n(h),v=n(28),b={};b.styleTagTransform=g(),b.setAttributes=u(),b.insert=s().bind(null,"head"),b.domAPI=l(),b.insertStyleElement=f(),o()(v.Z,b),v.Z&&v.Z.locals&&v.Z.locals,n.p,n.p,i()})()})();