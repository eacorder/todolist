

export function modalBase () {
    const modalArray = [];
    const modal = document.createElement("div");
    const modalContent = document.createElement("div");
    const modalHeader = document.createElement("div");
    const modalBody = document.createElement("div");
    const close = document.createElement("span");  
    const title = document.createElement("h1");
    title.innerHTML = "Information"
    title.classList.add("titleHeader")
    modal.classList.add("modal");     
    modalContent.classList.add("modal-content");
    modalHeader.classList.add("modal-header");
    modalBody.classList.add("modal-body"); 
    close.classList.add("close");
    close.innerHTML = "&times;";
    modalHeader.appendChild(close);
    modalHeader.appendChild(title);   


    modalContent.appendChild(modalHeader);
    modalContent.appendChild(modalBody);   
    modal.appendChild(modalContent);
  
    return modal;
}