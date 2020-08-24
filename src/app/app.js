import { makeHeader } from "./utils/header";
import { homePage } from "./utils/home.js";
import { explorePage } from "./utils/explore.js";
import { aboutPage } from "./utils/about.js";



export const run = () => {
    let tabSwitching = (pageName) => {
        document.querySelectorAll('.nav-link').forEach((elem) => {elem.style.backgroundColor = 'red'});
        document.getElementById(pageName).style.backgroundColor = 'yellow';
    };
    
    let navLinksArray = ['home', 'explore', 'about'];
    let workPlace = document.getElementById('content');;
    let explorePageCont = explorePage();
    makeHeader(navLinksArray, workPlace);
    // workPlace.appendChild(explorePageCont)
    // add mainf
    document.getElementById("home").addEventListener("click", function(){ 
        tabSwitching('home');
    });

    document.getElementById("explore").addEventListener("click", function(){ 
        tabSwitching('explore');
    });

    document.getElementById("about").addEventListener("click", function(){ 
        tabSwitching('about');
    });

        
    let main = document.createElement('main');
    workPlace.appendChild(main);
}