import { makeHeader } from "./utils/header";
import { makeContent } from "./utils/home.js";


export const run = () => {
    let navLinksArray = ['home','home2', 'explore', 'about'];
    let workPlace = document.getElementById('content');;
    
    makeHeader(navLinksArray, workPlace);
    makeContent(workPlace);
    // add mainf

    let main = document.createElement('main');
    workPlace.appendChild(main);
}