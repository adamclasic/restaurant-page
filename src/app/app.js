import { makeHeader } from "./utils/header";
import { homePage } from "./utils/home.js";
import { explorePage } from "./utils/explore.js";
import { aboutPage } from "./utils/about.js";

export const run = () => {
    let tabSwitching = (pageName) => {
        document.querySelectorAll('.nav-link').forEach((elem) => {elem.classList.remove("active")});
        // document.getElementById(pageName).style.backgroundColor = 'yellow';
        document.getElementById(pageName).classList.add("active");

        let printContent = '';
        switch (pageName) {
            case 'home':
                printContent = document.createElement('div').innerText = homePage();
                break;
            case 'explore':
                printContent = document.createElement('div').innerText = explorePage();
                break;
            case 'about':
                printContent = document.createElement('div').innerText = aboutPage();
                break;
            default:
                printContent = 'something went wrong.'
            }

        main.innerHTML = '';
        main.appendChild(printContent);
    };

    let navLinksArray = ['home', 'explore', 'about'];
    let workPlace = document.getElementById('content');;
    makeHeader(navLinksArray, workPlace);
    let main = document.createElement('main');

    tabSwitching('home');
    document.getElementById("home").addEventListener("click", function(){ 
        tabSwitching('home');
    });

    document.getElementById("explore").addEventListener("click", function(){ 
        tabSwitching('explore');
    });

    document.getElementById("about").addEventListener("click", function(){ 
        tabSwitching('about');
    });
    workPlace.appendChild(main);
}