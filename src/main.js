const content = document.querySelector('#content');
function header(){
    let header = document.createElement('header');
    let nav = document.createElement('nav')
    let ul = document.createElement('ul');
    let lihome = document.createElement('li')
    let limenu = document.createElement('li')
    let licontac = document.createElement('li')
    lihome.textContent = 'home'
    limenu.textContent = 'menu'
    licontac.textContent = 'contac'
    ul.appendChild(lihome)
    ul.appendChild(limenu)
    ul.appendChild(licontac)
    nav.appendChild(ul);
    header.appendChild(nav)
    return header;
}

function footer() {
    let footer = document.createElement('footer');
    let span = document.createElement('span');
    let a = document.createElement('a')
    let i = document.createElement('i')
    i.setAttribute('class','fa-brands fa-github')
    a.href = 'https://github.com/LeandroAgustinFernandez/restaurant-page-TOP'
    a.classList.add('github')
    a.target = '_blank'
    span.classList.add('label-copy')
    span.textContent = 'Copyright © Leandro Agustin Fernandez 2022 (The Odin Project)'
    a.appendChild(i)
    footer.appendChild(span)
    footer.appendChild(a)
    return footer
}

export default function init(){
    content.appendChild(header());
    content.appendChild(footer());
}



