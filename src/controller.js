import { Project } from "./model/project";
import { cardProject } from "./view/cardProject";

export function getNewProject (projects) {

    const title = document.querySelector("#inputTitle").value;
    const descripcion = document.querySelector("#inputDescription").value;
   
    const project = new Project (title,descripcion);   
     
    return project;
}

export function saveProject (project) {

    const savedProjects = getProjects();

    savedProjects.push(project);
   
    localStorage.setItem("projects", JSON.stringify(savedProjects) );  
   
}

export function getProjects () {
    const savedProjects = JSON.parse(localStorage.getItem('projects')) || [];

    return savedProjects; 
}

export function renderProjects () {

    const projects = getProjects();
    const content = document.querySelector(".cards");
    content.innerHTML = "";
    for (var project of projects) 
    {
        cardProject(project);

    }

}