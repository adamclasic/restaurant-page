let header = document.createElement('header');
let contentDiv = document.getElementById('content');
contentDiv.appendChild(header);
let navLinks = document.createElement('ul');
let navLinksArray = ['home', 'explore', 'about'];
navLinksArray.forEach(element => {
    let linkLi = document.createElement('li');
    let linkA = document.createElement('a');
    linkA.href = `#${element}`;
    linkA.innerHTML = `${element.charAt(0).toUpperCase() + element.slice(1)}`;
    linkLi.appendChild(linkA);
    navLinks.appendChild(linkLi);
});
header.appendChild(navLinks);

// add main

let main = document.createElement('main');
contentDiv.appendChild(main);