(()=>{"use strict";var e={};function t(){let e=document.createElement("h1");return e.textContent="HOME",e}e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),(()=>{var t;e.g.importScripts&&(t=e.g.location+"");var n=e.g.document;if(!t&&n&&(n.currentScript&&(t=n.currentScript.src),!t)){var c=n.getElementsByTagName("script");c.length&&(t=c[c.length-1].src)}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=t})();let n=null;function c(e){switch(e.target.textContent){case"home":n=t();break;case"menu":n=function(){let e=document.createElement("h1");return e.textContent="MENU",e}();break;case"contact":n=function(){let e=document.createElement("h1");return e.textContent="CONTACT",e}()}r()}function r(){const e=document.querySelector("#content");e.innerHTML="",e.appendChild(function(){let e=document.createElement("header"),t=document.createElement("nav"),n=document.createElement("ul"),r=document.createElement("li"),a=document.createElement("li"),l=document.createElement("li"),d=document.createElement("a"),i=document.createElement("a"),o=document.createElement("a");return d.textContent="home",i.textContent="menu",o.textContent="contact",d.addEventListener("click",c),i.addEventListener("click",c),o.addEventListener("click",c),r.appendChild(d),a.appendChild(i),l.appendChild(o),n.appendChild(r),n.appendChild(a),n.appendChild(l),t.appendChild(n),e.appendChild(t),e}()),e.appendChild(function(e=null){let n=document.createElement("main");return null==e?n.appendChild(t()):n.appendChild(e),n}(n)),e.appendChild(function(){let e=document.createElement("footer"),t=document.createElement("span"),n=document.createElement("a"),c=document.createElement("i");return c.setAttribute("class","fa-brands fa-github"),n.href="https://github.com/LeandroAgustinFernandez/restaurant-page-TOP",n.classList.add("github"),n.target="_blank",t.classList.add("label-copy"),t.textContent="Copyright © Leandro Agustin Fernandez 2022 (The Odin Project)",n.appendChild(c),e.appendChild(t),e.appendChild(n),e}())}e.p,r()})();