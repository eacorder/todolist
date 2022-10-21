import { Project } from "./model/project";
import { cardProject } from "./view/cardProject";
import { home } from "./view/home";
import { modalConfirmacion } from "./view/modal/modalConfirmacion";
import { projectModal } from "./view/modal/projectModal";
 

export function index() {
    home();
    renderProjects();
    events();
}

export function saveProject () {
    
    const savedProjects = getProjects();   
    let id;
    const title = document.querySelector("#inputTitle").value;
    const descripcion = document.querySelector("#inputDescription").value;   
    
    if (savedProjects == ""){
        id = 1
    } else { 
        id = savedProjects[savedProjects.length - 1].id  + 1;
        
    }
    const project = new Project ( id, title,descripcion);  
    
    savedProjects.push(project);
    localStorage.setItem("projects", JSON.stringify(savedProjects) );  
   
}
function confirmation (id) {
    const modal = document.querySelector(".modal");    
    modalConfirmacion();
    openModal(modal);
    
}

function getProjects () {

    const savedProjects = JSON.parse(localStorage.getItem('projects')) || [];
    
    return savedProjects; 
}

function renderProjects () {

    const projects = getProjects();
    const content = document.querySelector(".cards");
    content.innerHTML = "";
    for (var project of projects) 
    {
        cardProject(project);

    } 

    
    const removeButton = document.querySelectorAll(".removeButton");
    removeButton.forEach((button) => { 
        button.addEventListener('click', () => confirmation(button.getAttribute("data-id"))  );
    });
     
}

function openProjects (modal) { 
    projectModal();
    openModal(modal);
     //save project 
     const form = document.querySelector('#saveProject');    
     form.addEventListener('click', () => {
         event.preventDefault()
         saveProject();       
         closeModal(modal);       
         renderProjects();
     });
 
}

function events (){   

    //open modal
    const modal = document.querySelector(".modal");
    const addProject = document.querySelector(".float");
    addProject.addEventListener("click", () => openProjects(modal) );

    // close modal  
    const closeProject = document.querySelector(".close");
    closeProject.addEventListener("click", () => closeModal(modal) );
    
   
  

}

function removeProject (id) {
    
    const savedProjects = getProjects();
    savedProjects.splice(savedProjects.findIndex(function(i){
        return i.id == id;
    }), 1);
    localStorage.removeItem('projects');
    localStorage.setItem('projects',JSON.stringify(savedProjects));
    renderProjects();

}   





function openModal (modal) {
    
    modal.style.display = "block";
}

function closeModal (modal) {
    modal.style.display = "none";
    cleanModal();
}

function cleanModal() {
  const inputs = document.querySelectorAll('.inputField');

  inputs.forEach(input => {
    input.value = '';
  });
}
