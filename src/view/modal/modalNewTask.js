
export function modalNewTask(project) { 
    const modalBody = document.querySelector(".modal-body"); 
    modalBody.innerHTML = "";
    const inputTitle = document.createElement("input");
    const labelInputTitle = document.createElement("label");
    const spanlInputTitle = document.createElement("span");

 

    inputTitle.setAttribute("id","inputTitle");    
    labelInputTitle.classList.add("input")
    inputTitle.classList.add("inputField")
    spanlInputTitle.classList.add("inputLabel")
    spanlInputTitle.innerHTML = "Task"
    labelInputTitle.appendChild(inputTitle);
    labelInputTitle.appendChild(spanlInputTitle);
    inputTitle.setAttribute("type","text");
    inputTitle.setAttribute("placeholder","");



    

    const button = document.createElement("button");     
    button.classList.add("button"); 
    button.innerHTML = "Save"
    button.setAttribute("id","saveProject"); 
   
   
    modalBody.appendChild(labelInputTitle); 


    modalBody.appendChild(button); 
}