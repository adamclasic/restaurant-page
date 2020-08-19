export const makeHeader = (arr, workPlace) => {

    let header = document.createElement('header');
    let contentDiv = workPlace
    contentDiv.appendChild(header);
    let navLinksArray = arr;
    let navLinks = document.createElement('ul');
    navLinksArray.forEach(element => {
        let linkLi = document.createElement('li');
        let linkA = document.createElement('a');
        linkA.href = `#${element}`;
        linkA.innerHTML = `${element.charAt(0).toUpperCase() + element.slice(1)}`;
        linkLi.appendChild(linkA);
        navLinks.appendChild(linkLi);
    });
    header.appendChild(navLinks);
}