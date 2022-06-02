export default function home() {
  let section = document.createElement("section");
  let article = document.createElement("article");
  article.classList.add("article-home");
  let divimg = document.createElement("div");
  let divtext = document.createElement("div");
  divimg.classList.add("divimg");
  divtext.classList.add("divtext");
  let img = document.createElement("img");
  img.classList.add("img-home");
  img.src = "images/92456e777bc063c43cea6b04a0075eff.jpg";
  let h2 = document.createElement("h2");
  let p1 = document.createElement("p");
  let p2 = document.createElement("p");
  let p3 = document.createElement("p");
  let p4 = document.createElement("p");
  h2.textContent = "Chi siamo";
  p1.textContent =
    "Nel 1976 Robert Capitano e Gianluca Quinta, che quattordici anni dopo si sposeranno, e Antonio Natatori frequentavano insieme il Secondo Liceo Storico. A distanza di ventisei anni decidono di intraprendere, sempre insieme, una nuova avventura: l’apertura di una grande pizzeria.";
  p2.textContent =
    "Il principio su cui basammo questa operazione fu ben preciso: aggiornare il concetto usuale di pizzeria, abbandonando il vecchio luogo comune secondo il quale in pizzeria si devono utilizzare materie prime di basso costo.";
  p3.textContent =
    "Sin dall’inizio procedemmo allo studio di un impasto qualitativo, con sperimentazioni sulle maturazioni, e alla ricerca di materie prime selezionate. Questo lavoro non si è mai fermato negli anni successivi, portando alla trasformazione graduale degli impasti fino a quello attuale e alla concezione di nuovi pizze e supplì che potremmo definire “d’autore”.";
  p4.textContent =
    "“La Gatta” attirò subito l’attenzione dei giornali e subito dopo delle guide e ciò, insieme al passaparola positivo dei primi clienti, portò rapidamente ad un buon successo del locale. I risultati positivi ci spinsero ad insistere sulla strada della qualità e della ricerca: la carta dei vini arrivò ad annoverare più di 200 etichette, iniziò la selezione delle birre artigianali fino alle attuali 70, iniziammo ad acquistare superalcolici di qualità sempre più elevata.";
  let h1 = document.createElement("h1");
  h1.classList.add("title");
  h1.textContent = "Il gatto mangione";
  divtext.appendChild(h2);
  divtext.appendChild(p1);
  divtext.appendChild(p2);
  divtext.appendChild(p3);
  divtext.appendChild(p4);
  divimg.appendChild(img);
  article.appendChild(divtext);
  article.appendChild(divimg);
  section.appendChild(h1);
  section.appendChild(article);
  return section;   
}
