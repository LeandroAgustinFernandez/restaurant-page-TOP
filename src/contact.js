export default function contact() {
  let section = document.createElement("section");
  let article = document.createElement("article");
  article.classList.add("article-contact");
  let divleft = document.createElement("div");
  divleft.classList.add("div-contact");
  let divright = document.createElement("div");
  divright.classList.add("div-contact");
  let form = document.createElement('form')
  let labelName = document.createElement('label')
  labelName.textContent = 'Nome'
  let input = document.createElement('input')
  input.type = 'text'
  let labelText = document.createElement('label')
  labelText.textContent = 'Messagio'
  let textarea = document.createElement('textarea')
  textarea.rows = 7
  let button  = document.createElement('button')
  button.textContent = 'Inviare'
  form.appendChild(labelName)
  form.appendChild(input)
  form.appendChild(labelText)
  form.appendChild(textarea)
  form.appendChild(button)
  let divlocation = document.createElement('div')
  let ilocation = document.createElement('i')
  let plocation = document.createElement('p')
  plocation.textContent = 'Milano - Via S. Faustino, 1';
  ilocation.setAttribute('class','fa-solid fa-location-dot')
  divlocation.appendChild(ilocation)
  divlocation.appendChild(plocation)
  divlocation.classList.add('divinf')
  let divtel = document.createElement('div')
  let itel = document.createElement('i')
  let ptel = document.createElement('p')
  ptel.textContent = 'n. 02 74.77.13';
  itel.setAttribute('class','fa-solid fa-phone-flip')
  divtel.appendChild(itel)
  divtel.appendChild(ptel)
  divtel.classList.add('divinf')
  let divmail= document.createElement('div')
  let imail= document.createElement('i')
  let pmail= document.createElement('p')
  pmail.textContent = 'gattomagione@gmail.it';
  imail.setAttribute('class','fa-solid fa-at')
  divmail.appendChild(imail)
  divmail.appendChild(pmail)
  divmail.classList.add('divinf')
  let h1 = document.createElement("h1");
  h1.classList.add("title");
  h1.textContent = "Conttati";
  divleft.appendChild(divlocation)
  divleft.appendChild(divtel)
  divleft.appendChild(divmail)
  divright.appendChild(form)
  article.appendChild(divleft);
  article.appendChild(divright);
  section.appendChild(h1);
  section.appendChild(article);
  return section;
}
