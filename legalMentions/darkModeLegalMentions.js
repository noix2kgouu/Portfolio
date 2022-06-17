var colorModeUser = sessionStorage.getItem('binaryColorMode');
if (colorModeUser == 1) {

    //*the user select dark mode in the passed so the darkmode icon is passed to invisible
    let modeSombreIcon = document.querySelector('#modeSombre');
    let modeClairIcon = document.querySelector('#modeClair');
    modeSombreIcon.className = "invisible";
    modeClairIcon.className = "visible";

    darkMode();
}

function darkMode() {
    let modeSombreIcon = document.querySelector('#modeSombre');
    let modeClairIcon = document.querySelector('#modeClair');
    modeSombreIcon.className = "invisible";
    modeClairIcon.className = "visible";

    let navbar = document.querySelector('#navbar');
    navbar.classList.remove("navbarLightMode")
    navbar.classList.add("navbarDarkMode")

    let contenu = document.querySelector('#mentionlegale');
    contenu.style.color="white";

    let main = document.querySelector('main');
    main.style.backgroundColor="#181818";

    let titre = document.querySelector('h1');
    titre.style.color="white";

    let iconNavBar = document.querySelector("#iconnav #modeClair");
    iconNavBar.classList.add("blackImageToWhite");

}