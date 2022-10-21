


export function modalConfirmacion (){    
    const modalBody = document.querySelector(".modal-body"); 
    const modalContainer = document.createElement("div");
    const text = document.createElement("p");
    text.classList.add("textConfirmation");
    modalBody.innerHTML = ""; 
    text.innerHTML = "Are you sure you want to proceed?"
    const yesButton = document.createElement("button");     
    const noButton = document.createElement("button");    
    modalContainer.classList.add("confirmationModal");
    yesButton.setAttribute("id","yesButton");  
    yesButton.classList.add("button"); 
    yesButton.innerHTML = "Yes"  

    noButton.setAttribute("id","noButton");  
    noButton.classList.add("button"); 
    noButton.innerHTML = "No";

    modalContainer.appendChild(noButton); 
    modalContainer.appendChild(yesButton);   
    modalBody.appendChild(text); 
    modalBody.appendChild(modalContainer);
}