 

export function taskIndex(project) { 
    const main = document.querySelector("main");
    const cards = document.querySelector(".cards"); 
    const taskIndex = document.querySelector(".taskContainer"); 
    cards.innerHTML = "";
    taskIndex.innerHTML ="";

    const title = document.createElement("h1")
    const addTask = document.createElement('button'); 
  
    const headerTask = document.createElement("div");
    const list = document.createElement("ul");
    addTask.innerHTML = 'Add Task <i class="icon fa fa-plus"></i>';
    taskIndex.innerHTML = "";

    taskIndex.classList.add("displayTrue");
    cards.classList.add("displayFalse");

    addTask.classList.add("button");
    addTask.classList.add("addTaskButton");
    list.classList.add("taskList");
    addTask.setAttribute("data-id",project.id);
    title.innerHTML = project.title;  

    project.tasks.sort((a, b) => Number(b.priority) - Number(a.priority)).sort((a, b) => Number(a.check) - Number(b.check)).forEach(element => {
        let favorite = "";
        let checkDiv = "";
        let checked  = false; 
        let display = "display:flex;";
        const listItem = document.createElement("li"); 
        if ( element.priority === true) {
            favorite = '<span class ="favorite"> <i class="fa fa-star"  aria-hidden="true"></i> </span> ' 
        }
        if ( element.check === 1 ) {
            checked = "checked='checked'";
            listItem.classList.add("textDecoration");
            display = "display:none;";
            checkDiv = '<div style="color:#83af9b"><i class="fa fa-check" aria-hidden="true"></i></div>'
        }
       
        
        listItem.innerHTML = '<div style="display:flex; align-items:center; "> <input '+ checked +' class="checkTask" task-id="'+ element.id  + '" type = "checkbox">' + 
        '<div class="liElements"><span>'+element.title  +'</span>' + 
        '<span class="dueDate"> <b>Due Date:</b> '+ 
        element.dueDate +'</span></div></div>' +
        '<div style="'+ display +' align-items:center; margin-bottom:10px; column-gap:5px">  '  +      
        favorite + 
          '<button class ="button editTask" task-id = "' + element.id + '" ><i class="fa fa-pencil" aria-hidden="true"></i></button>' +
        '<button class ="button removeTask" data-id = "' + project.id + '"  task-id = "' + element.id 
        + '"><i class="fa fa-times" aria-hidden="true"></i></button></div> ' +checkDiv;
        ;
        
       
        list.appendChild(listItem);
    });

    headerTask.appendChild(title);
    headerTask.appendChild(addTask);
    headerTask.classList.add("headerTask");
    taskIndex.appendChild(headerTask);
    taskIndex.appendChild(list);
    main.appendChild(taskIndex);
}