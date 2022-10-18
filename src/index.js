import './style.css';
import { home , openModal, closeModal } from './view/home'; 
import { saveProject, getNewProject, renderProjects } from './controller'; 


home();

let clickEvents = (function ()   {
   
    renderProjects();
    
    //open modal
    const modal = document.querySelector("#projectModal");
    const addProject = document.querySelector(".float");
    addProject.addEventListener("click", () => openModal(modal) );

    // close modal  
    const closeProject = document.querySelector(".close");
    closeProject.addEventListener("click", () => closeModal(modal) );

    //save project 
    const form = document.querySelector('#addProject');    
    form.addEventListener('submit', () => {
        event.preventDefault()
        saveProject(getNewProject());       
        closeModal(modal);       
        renderProjects();
    });

})();