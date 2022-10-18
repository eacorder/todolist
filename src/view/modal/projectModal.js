export function projectModal () {
    const modal = document.createElement("div");
    const modalContent = document.createElement("div");
    const modalHeader = document.createElement("div");
    const modalBody = document.createElement("div");
    const close = document.createElement("span");  
    const title = document.createElement("h1");
    const inputTitle = document.createElement("input");
    const labelInputTitle = document.createElement("label");
    const spanlInputTitle = document.createElement("span");
    const inputDescription = document.createElement("input");
    const labelInputDescription = document.createElement("label");
    const spanlInputDescription = document.createElement("span");
    const button = document.createElement("button");
    const form = document.createElement("form");
    


    labelInputDescription.classList.add("input")
    inputDescription.classList.add("descriptionModal")
    inputDescription.classList.add("inputField")
    spanlInputDescription.classList.add("inputLabel")
    spanlInputDescription.innerHTML = "Description"
    labelInputDescription.appendChild(inputDescription);
    labelInputDescription.appendChild(spanlInputDescription);
    inputDescription.setAttribute("type","text");
    inputDescription.setAttribute("placeholder","");

    form.setAttribute("id","addProject");
    inputTitle.setAttribute("id","inputTitle");
    inputDescription.setAttribute("id","inputDescription"); 

    labelInputTitle.classList.add("input")
    inputTitle.classList.add("inputField")
    spanlInputTitle.classList.add("inputLabel")
    spanlInputTitle.innerHTML = "Title"
    labelInputTitle.appendChild(inputTitle);
    labelInputTitle.appendChild(spanlInputTitle);
    inputTitle.setAttribute("type","text");
    inputTitle.setAttribute("placeholder","");

    button.classList.add("button");
    button.setAttribute("type","submit");
    button.innerHTML = "Save"


    title.innerHTML = "New Project"
    modal.classList.add("modal");    
    modal.setAttribute("id","projectModal");
    modalContent.classList.add("modal-content");
    modalHeader.classList.add("modal-header");
    form.classList.add("modal-body"); 
    close.classList.add("close");
    close.innerHTML = "&times;";
    modalHeader.appendChild(close);
    modalHeader.appendChild(title);   
    form.appendChild(labelInputTitle);
    form.appendChild(labelInputDescription);
    form.appendChild(button);
    modalBody.appendChild(form);
    modalContent.appendChild(modalHeader);
    modalContent.appendChild(modalBody);
   
    modal.appendChild(modalContent);
 
    return modal
}


