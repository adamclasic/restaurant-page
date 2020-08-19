import { makeHeader } from "./utils/header";
export const run = () => {
    let navLinksArray = ['home','home2', 'explore', 'about'];
    let workplace = document.getElementById('content');;
    
    makeHeader(navLinksArray, workplace);

    // add main

    let main = document.createElement('main');
    workplace.appendChild(main);
}