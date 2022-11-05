

export function content ( ) {    
    const div = document.createElement("main");
    const content  = document.createElement("div");
    const taskContent  = document.createElement("div");
    const addProject = document.createElement("a");
    const icon = document.createElement("i");
    addProject.classList.add("float"); 
    content.classList.add("cards");
    content.classList.remove("displayFalse");
    taskContent.classList.add("taskContainer");
    icon.classList.add("icon");
    icon.classList.add("fa");
    icon.classList.add("fa-plus"); 
    addProject.appendChild(icon);   
    div.appendChild(content);
    div.appendChild(taskContent);
    div.appendChild(addProject);
    return div;
}



 