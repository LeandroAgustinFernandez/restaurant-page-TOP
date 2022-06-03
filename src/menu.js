let menuOptions = [
  {
    name: "MARGHERITA",
    description:
      "La classica per eccellenza. Pomodoro, mozzarella. Soffice e croccante sotto. ",
    slice: 4.6,
    complete: 27.0,
  },
  {
    name: "CIPOLLA",
    description:
      "La specialità della casa. Pizza completamente ricoperta di cipolla stufata ad arte.",
    slice: 4.6,
    complete: 27.0,
  },
  {
    name: "WURSTEL",
    description:
      "Solo per veri golosi. Pomodoro, mozzarella e rondelle di wurstel.",
    slice: 5.8,
    complete: 34,
  },
  {
    name: "COTTO",
    description:
      "Pomodoro, prosciutto cotto ed un mare di mozzarella a coprire.",
    slice: 5.8,
    complete: 34,
  },
  {
    name: "NAPOLI",
    description: "Pomodoro, e acciughe. Solo per i puristi.",
    slice: 5.8,
    complete: 34,
  },
  {
    name: "SALAME PICCANTE",
    description:
      "Pomodoro e fette di salame cotte nel forno. Per palati forti.",
    slice: 6.2,
    complete: 36,
  },
  {
    name: "FARCITA",
    description:
      "Pomodoro e un trionfo di farcitura capricciosa ricoperta di mozzarella.",
    slice: 6.2,
    complete: 36,
  },
  {
    name: "SPECK",
    description:
      "Pomodoro, mozzarella, speck appena affettato e servito a crudo",
    slice: 6.2,
    complete: 36,
  },
  {
    name: "PORCINI",
    description:
      "Deliziosi porcini trifolati con aglio e prezzemolo nascosti fra pomodoro e mozzarella.",
    slice: 7,
    complete: 40,
  },
];

export default function menu() {
  let section = document.createElement("section");
  let article = document.createElement("article");
  article.classList.add("article-menu");
  menuOptions.forEach((pizza) => {
    let div = document.createElement("div");
    let h2 = document.createElement("h2");
    let p = document.createElement("p");
    let spanSlice = document.createElement("span");
    let spanComplete = document.createElement("span");
    h2.textContent = pizza.name;
    p.textContent = pizza.description;
    let iSlice = document.createElement("i");
    iSlice.setAttribute("class", "fa-solid fa-pizza-slice");
    spanSlice.textContent = ` Porzione: ${pizza.slice}`;
    spanComplete.textContent = ` Intera: ${pizza.complete}`;
    let divTitle = document.createElement('div')
    divTitle.appendChild(iSlice);
    divTitle.appendChild(h2);
    div.appendChild(divTitle);
    div.appendChild(p);
    div.appendChild(spanSlice);
    div.appendChild(spanComplete);
    article.appendChild(div);
  });
  let h1 = document.createElement("h1");
  h1.classList.add("title");
  h1.textContent = "Il nostro menu";
  section.appendChild(h1);
  section.appendChild(article);
  return section;
}
