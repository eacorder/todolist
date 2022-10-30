import { Project } from "./model/project";
import { cardProject } from "./view/cardProject";
import { home } from "./view/home";
import { modalConfirmacion } from "./view/modal/modalConfirmacion";
import { projectModal } from "./view/modal/projectModal";
import { taskIndex } from "./view/taskIndex";
import { modalNewTask } from "./view/modal/modalNewTask";
import { Task } from "./model/task";
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
    return project;
}

export function saveTask (project) {
    
    const savedProjects = getProjects();
    const indexOfProject = savedProjects.findIndex(std=> std.id === project.id);
      
    let id;
    const taskInput = document.querySelector("#inputTask").value;
    const date = document.querySelector("#inputDate").value;   
    const priority = document.querySelector("#inputPriority").checked;    
    if (savedProjects[indexOfProject].tasks == ""){
        id = 1
    } else { 
        id = savedProjects[indexOfProject].tasks[savedProjects[indexOfProject].tasks.length - 1].id  + 1;
        
    }
    const task = new Task ( id, taskInput,date ,priority, 0);   
    savedProjects[indexOfProject].tasks.push(task);
    
    localStorage.setItem("projects", JSON.stringify(savedProjects) );  
    return savedProjects;
    
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
        button.addEventListener('click', () => confirmation(button.getAttribute("data-id"),"project") , ""  );
    });
     
}

function taskMaker (project) {
   
    taskIndex(project);
    const button = document.querySelector('.addTaskButton');     
    button.addEventListener('click', () => {
         event.preventDefault()          
         openNewTask(project);
        
     });

     const buttonEdit = document.querySelectorAll(".editTask");
     buttonEdit.forEach((button) => { 
         button.addEventListener('click', () => {
            event.preventDefault()          
             
            openNewTask(project);

        })  
           
     });

     const buttonRemove = document.querySelectorAll(".removeTask");
     buttonRemove.forEach((button) => { 
         button.addEventListener('click', () => {
            event.preventDefault()          
             
            openNewTask(project);
            confirmation(button.getAttribute("data-id"),"task",button.getAttribute("task-id")) 
        })  
           
     });
    
     
     const checkTask = document.querySelectorAll(".checkTask");
     checkTask.forEach((button) => { 
         button.addEventListener('click', () => {
            if ( button.checked ){
                EditTask(project.id, button.getAttribute("task-id"))
               
            }         
            
          
        //    confirmation(button.getAttribute("data-id"),"task",button.getAttribute("task-id")) 
        })  
           
     });
    
}

function confirmation (id, type, taskId) {
    const modal = document.querySelector(".modal");    
    modalConfirmacion();
    openModal(modal);


    const button = document.querySelector('#yesButton');     
    button.addEventListener('click', () => {
         event.preventDefault()  
         if (type === "project") {
            removeProject(id);   
            renderProjects();   
         }
         else if ( type === "task" ) {
            removeTask(id , taskId);   
            taskMaker(getProjectByid(id))  
         }
                 
        
         closeModal(modal);      
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
         const savedProject = saveProject(); 
         
         closeModal(modal);       
         taskMaker(savedProject)
     });
 
}

function openNewTask (project) { 
    const modal = document.querySelector(".modal");    
    modalNewTask();
    openModal(modal);
     //save project 
     const form = document.querySelector('#saveTask');    
     form.addEventListener('click', () => {
         event.preventDefault()
         saveTask(project);
         closeModal(modal);       
         taskMaker(getProjectByid(project.id))
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

function EditTask ( projectId, taskId ) {
    
    const savedProjects = getProjects();
    const projectIndex = savedProjects.findIndex(function(i){
        return i.id == projectId;
    });
  
    const taskIndex = savedProjects[projectIndex].tasks.findIndex(function(i){
        return i.id == taskId;
    });
    savedProjects[projectIndex].tasks[taskIndex].check = 1;    
    localStorage.removeItem('projects');
    localStorage.setItem('projects',JSON.stringify(savedProjects));
    taskMaker(getProjectByid(projectId));
} 


function removeTask ( projectId, taskId ) {
    
    const savedProjects = getProjects();
    const projectIndex = savedProjects.findIndex(function(i){
        return i.id == projectId;
    });
  
    const taskIndex = savedProjects[projectIndex].tasks.findIndex(function(i){
        return i.id == taskId;
    });
    savedProjects[projectIndex].tasks.splice( taskIndex , 1 )    
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

