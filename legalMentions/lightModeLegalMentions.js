function lightMode() {
    let modeSombreIcon = document.querySelector('#modeSombre');
    let modeClairIcon = document.querySelector('#modeClair');
    modeSombreIcon.className = "visible";
    modeClairIcon.className = "invisible";

    let navbar = document.querySelector('#navbar');
    navbar.classList.add("navbarLightMode")
    navbar.classList.remove("navbarDarkMode")
    
    let contenu = document.querySelector('#mentionlegale');
    contenu.style.color="black";

    let main = document.querySelector('main');
    main.style.backgroundColor="white";

    let titre = document.querySelector('h1');
    titre.style.color="black";
}