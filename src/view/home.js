import { navbar }  from "./navbar"
import { sidebar } from "./sidebar";
import { content } from "./content"; 
import { modalBase } from "./modal/modalBase";
 
export function home () {
    const body = document.querySelector("body")
    const container = document.createElement("div");    
    container.appendChild(navbar());
    container.appendChild(sidebar());
    container.appendChild(content());
    container.classList.add("container");
    body.prepend(container);
    body.appendChild(modalBase()); 
   
    
}


 