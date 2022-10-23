 

export function taskIndex(project) { 
    const main = document.querySelector("main");
    const cards = document.querySelector(".cards"); 
    cards.innerHTML = "";

    const title = document.createElement("h1")
    const addTask = document.createElement('button'); 
    const taskIndex = document.querySelector(".taskContainer");  
    addTask.innerHTML = 'Add Task <i class="icon fa fa-plus"></i>';
 
 
    addTask.classList.add("button");
    addTask.classList.add("addTaskButton");
    addTask.setAttribute("data-id",project.id);
    title.innerHTML = project.title;
    taskIndex.appendChild(title);
    taskIndex.appendChild(addTask);
    main.appendChild(taskIndex);
}