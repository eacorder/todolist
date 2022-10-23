
export function sidebar () {      
    const sidebar = document.createElement("sidebar");
    const section1 = document.createElement("div");
    const section2 = document.createElement("div");
    const title1 = document.createElement("h2");
    const title2 = document.createElement("h2");
    const list = document.createElement("ul");
    const home = document.createElement("li");
    const today = document.createElement("li");
    const priority = document.createElement("li");
    const month = document.createElement("li");
    home.innerHTML = "Home"
    home.classList.add("home");
    today.innerHTML = "Today"
    today.classList.add("today");
    priority.innerHTML = "Priority"
    priority.classList.add("priority");
    month.innerHTML = "This Month"
    month.classList.add("month");
    list.appendChild(home);
    list.appendChild(today);
    list.appendChild(priority);
    list.appendChild(month);
    title1.innerHTML = "Filters";
    title2.innerHTML = "Projects"; 
    section1.classList.add("section");
    section2.classList.add("section");
    title1.classList.add("titleSidebar");
    title2.classList.add("titleSidebar");
    section1.appendChild(title1);
    section1.appendChild(list);
    section2.appendChild(title2);
    sidebar.appendChild(section1);
    sidebar.appendChild(section2);
    return sidebar;
}