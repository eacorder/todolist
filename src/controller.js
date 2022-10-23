import { Project } from "./model/project";
import { cardProject } from "./view/cardProject";
import { home } from "./view/home";
import { modalConfirmacion } from "./view/modal/modalConfirmacion";
import { projectModal } from "./view/modal/projectModal";
import { taskIndex } from "./view/taskIndex";
import { modalNewTask } from "./view/modal/modalNewTask";

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

function getProjectByid (id) { 
    const savedProjects = getProjects();
    
    const project = savedProjects.find(x => x.id === +id)
    
    return project;
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
  
    const viewButton = document.querySelectorAll(".viewButton");
    viewButton.forEach((button) => { 
        button.addEventListener('click', () => taskMaker(getProjectByid(button.getAttribute("data-id")))  );
    });

    const removeButton = document.querySelectorAll(".removeButton");
    removeButton.forEach((button) => { 
        button.addEventListener('click', () => confirmation(button.getAttribute("data-id"))  );
    });
     
}

function taskMaker (project) {
   
    taskIndex(project);
    const button = document.querySelector('.addTaskButton');     
    button.addEventListener('click', () => {
         event.preventDefault()          
         openNewTask();
     });

}

function confirmation (id) {
    const modal = document.querySelector(".modal");    
    modalConfirmacion();
    openModal(modal);


    const button = document.querySelector('#yesButton');     
    button.addEventListener('click', () => {
         event.preventDefault()          
         removeProject(id);       
         closeModal(modal);       
         renderProjects();
     });

     const close = document.querySelector('#noButton');     
     close.addEventListener('click', () => {
         event.preventDefault()          
         closeModal(modal);       
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

function openNewTask () { 
    const modal = document.querySelector(".modal");    
    modalNewTask();
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

     // close modal  
     const home = document.querySelector(".home");
     home.addEventListener("click", () => renderProjects() );
    
}

function removeProject (id) {
    
    const savedProjects = getProjects();
    savedProjects.splice(savedProjects.findIndex(function(i){
        return i.id == id;
    }), 1);
    localStorage.removeItem('projects');
    localStorage.setItem('projects',JSON.stringify(savedProjects));
   

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

