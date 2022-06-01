import home from "./home";
import menu from "./menu";
import contact from "./contact";

let mainContent = null;

function main(content = null) {
  let main = document.createElement("main");
  if (content == null) {
    main.appendChild(home());
  } else {
    main.appendChild(content);
  }
  return main;
}

function header() {
  let header = document.createElement("header");
  let nav = document.createElement("nav");
  let ul = document.createElement("ul");
  let lihome = document.createElement("li");
  let limenu = document.createElement("li");
  let licontac = document.createElement("li");
  let ahome = document.createElement("a");
  let amenu = document.createElement("a");
  let acontact = document.createElement("a");
  ahome.textContent = "home";
  amenu.textContent = "menu";
  acontact.textContent = "contact";
  ahome.addEventListener("click", setContent);
  amenu.addEventListener("click", setContent);
  acontact.addEventListener("click", setContent);
  lihome.appendChild(ahome);
  limenu.appendChild(amenu);
  licontac.appendChild(acontact);
  ul.appendChild(lihome);
  ul.appendChild(limenu);
  ul.appendChild(licontac);
  nav.appendChild(ul);
  header.appendChild(nav);
  return header;
}

function footer() {
  let footer = document.createElement("footer");
  let span = document.createElement("span");
  let a = document.createElement("a");
  let i = document.createElement("i");
  i.setAttribute("class", "fa-brands fa-github");
  a.href = "https://github.com/LeandroAgustinFernandez/restaurant-page-TOP";
  a.classList.add("github");
  a.target = "_blank";
  span.classList.add("label-copy");
  span.textContent =
    "Copyright © Leandro Agustin Fernandez 2022 (The Odin Project)";
  a.appendChild(i);
  footer.appendChild(span);
  footer.appendChild(a);
  return footer;
}

function setContent(e) {
  let page = e.target.textContent;
  switch (page) {
    case "home":
      mainContent = home();
      break;
    case "menu":
      mainContent = menu();
      break;
    case "contact":
      mainContent = contact();
      break;
  }
  init();
}

export default function init() {
  const content = document.querySelector("#content");
  content.innerHTML = "";
  content.appendChild(header());
  content.appendChild(main(mainContent));
  content.appendChild(footer());
}
