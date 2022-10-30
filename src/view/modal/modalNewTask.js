
export function modalNewTask(project) { 
    const modalBody = document.querySelector(".modal-body"); 
    modalBody.innerHTML = "";
    const inputTitle = document.createElement("input");
    const labelInputTitle = document.createElement("label");
    const spanlInputTitle = document.createElement("span");

    const inputPriority = document.createElement("input");
    const labelPriority = document.createElement("label");
    const priorityContainer = document.createElement("div");
    
    const inputDate = document.createElement("input");
    const labelDate = document.createElement("label"); 
    const spanlInputDate = document.createElement("span");

    inputDate.setAttribute("id","inputDate");    
    labelDate.classList.add("input")
    inputDate.classList.add("inputField")
    spanlInputDate.classList.add("inputLabel")
    spanlInputDate.innerHTML = "Due Date"
    labelDate.appendChild(inputDate);
    labelDate.appendChild(spanlInputDate);
    inputDate.setAttribute("type","text");
    inputDate.setAttribute("placeholder","");
    inputDate.setAttribute("type", "date")

    labelPriority.classList.add("form-control");
    inputPriority.setAttribute("type", "checkbox")
    inputPriority.setAttribute("name", "checkbox") 
    labelPriority.innerHTML = "Priority"
    labelPriority.prepend(inputPriority);
    inputPriority.setAttribute("id", "inputPriority");

   
    priorityContainer.appendChild(labelDate);
    priorityContainer.appendChild(labelPriority);
    priorityContainer.classList.add("priorityContainer");


    inputTitle.setAttribute("id","inputTask");    
    labelInputTitle.classList.add("input")
    inputTitle.classList.add("inputField")
    spanlInputTitle.classList.add("inputLabel")
    spanlInputTitle.innerHTML = "Task"
    labelInputTitle.appendChild(inputTitle);
    labelInputTitle.appendChild(spanlInputTitle);
    inputTitle.setAttribute("type","text");
    inputTitle.setAttribute("placeholder","");
    inputDate.min = new Date().toISOString().split("T")[0];

    const button = document.createElement("button");     
    button.classList.add("button"); 
    button.innerHTML = "Save"
    button.setAttribute("id","saveTask"); 
   
   
    modalBody.appendChild(labelInputTitle); 
    modalBody.appendChild(priorityContainer); 

    modalBody.appendChild(button); 
}