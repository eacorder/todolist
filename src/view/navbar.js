export function navbar () {
    const navbar = document.createElement("navbar");
    const title = document.createElement("h1");
    title.innerHTML = "TASK MAKER";
    navbar.appendChild(title); 
    return navbar;
}