import { modalBase } from "./modalBase";

export function projectModal () {
   
    const modalBody = document.querySelector(".modal-body"); 
    modalBody.innerHTML = "";
    const inputTitle = document.createElement("input");
    const labelInputTitle = document.createElement("label");
    const spanlInputTitle = document.createElement("span");

 

    inputTitle.setAttribute("id","inputTitle");    
    labelInputTitle.classList.add("input")
    inputTitle.classList.add("inputField")
    spanlInputTitle.classList.add("inputLabel")
    spanlInputTitle.innerHTML = "Title"
    labelInputTitle.appendChild(inputTitle);
    labelInputTitle.appendChild(spanlInputTitle);
    inputTitle.setAttribute("type","text");
    inputTitle.setAttribute("placeholder","");



    const inputDescription = document.createElement("input");
    const labelInputDescription = document.createElement("label");
    const spanlInputDescription = document.createElement("span");
    labelInputDescription.classList.add("input")
    inputDescription.classList.add("descriptionModal")
    inputDescription.classList.add("inputField")
    spanlInputDescription.classList.add("inputLabel")
    spanlInputDescription.innerHTML = "Description"
    labelInputDescription.appendChild(inputDescription);
    labelInputDescription.appendChild(spanlInputDescription);
    inputDescription.setAttribute("type","text");
    inputDescription.setAttribute("placeholder","");
    inputDescription.setAttribute("id","inputDescription"); 


    const button = document.createElement("button");     
    button.classList.add("button"); 
    button.innerHTML = "Save"
    button.setAttribute("id","saveProject"); 
   
   
    modalBody.appendChild(labelInputTitle);
    modalBody.appendChild(labelInputDescription);


    modalBody.appendChild(button); 
    
 
    return modalBody
}


