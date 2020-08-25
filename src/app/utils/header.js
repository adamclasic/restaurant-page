export const makeHeader = (arr, workPlace) => {
  const header = document.createElement('header');
  const contentDiv = workPlace;
  contentDiv.appendChild(header);
  const navLinksArray = arr;
  const navLinks = document.createElement('ul');
  navLinks.style.display = 'flex';
  navLinks.style.listStyle = 'none';
  navLinksArray.forEach(element => {
    const linkLi = document.createElement('li');
    linkLi.style.padding = '10px 30px';
    // linkLi.style.backgroundColor = 'red';
    linkLi.id = `${element}`;
    linkLi.classList.add('nav-link');
    const linkA = document.createElement('a');
    linkA.href = `#${element}`;
    linkA.innerHTML = `${element.charAt(0).toUpperCase() + element.slice(1)}`;
    linkLi.appendChild(linkA);
    navLinks.appendChild(linkLi);
  });
  header.appendChild(navLinks);
};