!function(e){var t={};function n(i){if(t[i])return t[i].exports;var r=t[i]={i:i,l:!1,exports:{}};return e[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(i,r,function(t){return e[t]}.bind(null,r));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);(()=>{let e=e=>{document.querySelectorAll(".nav-link").forEach(e=>{e.style.backgroundColor="red"}),document.getElementById(e).style.backgroundColor="yellow";let t="";switch(e){case"home":t=document.createElement("div").innerText=(()=>{let e=document.createElement("div");return e.innerText="HOME PAGE Lorem ipsum dolor sit amet consectetur adipisicing elit. Non omnis similique, doloremque, neque ab libero sit debitis, aspernatur ex quam consequuntur iure architecto molestias ducimus inventore voluptas? Similique sequi nulla facere repellendus, error ratione odio corporis animi veniam hic commodi quibusdam eveniet ad quis, voluptas tempore, et officiis! Aspernatur, vitae!",e})();break;case"explore":t=document.createElement("div").innerText=(()=>{let e=document.createElement("div");return e.innerText="EXPLOR PAGE Lorem ipsum dolor sit amet consectetur adipisicing elit. Non omnis similique, doloremque, neque ab libero sit debitis, aspernatur ex quam consequuntur iure architecto molestias ducimus inventore voluptas? Similique sequi nulla facere repellendus, error ratione odio corporis animi veniam hic commodi quibusdam eveniet ad quis, voluptas tempore, et officiis! Aspernatur, vitae!",e})();break;case"about":t=document.createElement("div").innerText=(()=>{let e=document.createElement("div");return e.innerText="ABOUT PAGE Lorem ipsum dolor sit amet consectetur adipisicing elit. Non omnis similique, doloremque, neque ab libero sit debitis, aspernatur ex quam consequuntur iure architecto molestias ducimus inventore voluptas? Similique sequi nulla facere repellendus, error ratione odio corporis animi veniam hic commodi quibusdam eveniet ad quis, voluptas tempore, et officiis! Aspernatur, vitae!",e})();break;default:t="something went wrong."}n.innerHTML="",n.appendChild(t)},t=document.getElementById("content");((e,t)=>{let n=document.createElement("header");t.appendChild(n);let i=e,r=document.createElement("ul");r.style.display="flex",r.style.listStyle="none",i.forEach(e=>{let t=document.createElement("li");t.style.padding="10px 30px",t.style.backgroundColor="red",t.id=""+e,t.classList.add("nav-link");let n=document.createElement("a");n.href="#"+e,n.innerHTML=""+(e.charAt(0).toUpperCase()+e.slice(1)),t.appendChild(n),r.appendChild(t)}),n.appendChild(r)})(["home","explore","about"],t);let n=document.createElement("main");document.getElementById("home").addEventListener("click",(function(){e("home")})),document.getElementById("explore").addEventListener("click",(function(){e("explore")})),document.getElementById("about").addEventListener("click",(function(){e("about")})),t.appendChild(n)})()}]);