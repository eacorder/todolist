import { navbar }  from "./navbar"
import { sidebar } from "./sidebar";
import { content } from "./content";
import { projectModal } from "./modal/projectModal";

export function home () {
    const body = document.querySelector("body")
    const container = document.createElement("div");    
    container.appendChild(navbar());
    container.appendChild(sidebar());
    container.appendChild(content());
    container.classList.add("container");
    body.prepend(container);
    body.appendChild(projectModal());
}

export function openModal (modal) {
    modal.style.display = "block";
}

export function closeModal (modal) {
    modal.style.display = "none";
    cleanModal();
}

function cleanModal() {
  const inputs = document.querySelectorAll('.inputField');

  inputs.forEach(input => {
    input.value = '';
  });
}

 