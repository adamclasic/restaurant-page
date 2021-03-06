import makeHeader from './utils/header';
import homePage from './utils/home';
import explorePage from './utils/explore';
import aboutPage from './utils/about';

const main = document.createElement('main');

const run = () => {
  const tabSwitching = (pageName) => {
    document.querySelectorAll('.nav-link').forEach((elem) => { elem.classList.remove('active'); });
    // document.getElementById(pageName).style.backgroundColor = 'yellow';
    document.getElementById(pageName).classList.add('active');

    let printContent = '';
    switch (pageName) {
      case 'home':
        printContent = document.createElement('div');
        printContent.innerText = homePage();
        break;
      case 'explore':
        printContent = document.createElement('div');
        printContent.innerText = explorePage();
        break;
      case 'about':
        printContent = document.createElement('div');
        printContent.innerText = aboutPage();
        break;
      default:
        printContent = document.createElement('div');
        printContent.innerText = 'something went wrong.';
    }

    main.innerHTML = '';
    main.appendChild(printContent);
  };

  const navLinksArray = ['home', 'explore', 'about'];
  const workPlace = document.getElementById('content');
  makeHeader(navLinksArray, workPlace);

  tabSwitching('home');
  document.getElementById('home').addEventListener('click', () => {
    tabSwitching('home');
  });

  document.getElementById('explore').addEventListener('click', () => {
    tabSwitching('explore');
  });

  document.getElementById('about').addEventListener('click', () => {
    tabSwitching('about');
  });
  workPlace.appendChild(main);
};
export default run;