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

export default function init(){
    content.appendChild(header());
}



