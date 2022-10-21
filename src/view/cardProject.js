
 

export function cardProject(project) {
    const content = document.querySelector(".cards");
    const card = document.createElement("div");
    const title = document.createElement("h3");
    const description = document.createElement("p");
    const footer = document.createElement("div");
    const view = document.createElement("a");
    const remove = document.createElement("a");
    title.innerHTML = project.title;
    description.innerHTML = project.description;
    
    remove.setAttribute("data-id",project.id);
    description.classList.add("cardDescription")
    title.classList.add("cardTitle")
    footer.classList.add("cardFooter")
    view.classList.add("viewButton")
    remove.classList.add("removeButton")
    card.classList.add("card")
    footer.appendChild(view);
    footer.appendChild(remove);   
    card.appendChild(title);
    card.appendChild(description);
    card.appendChild(footer);
    content.appendChild(card);   
   

}