var colorModeUser = sessionStorage.getItem('binaryColorMode');
if (colorModeUser == 1) {

    //*the user select dark mode in the passed so the darkmode icon is passed to invisible+
    let modeSombreIcon = document.querySelector('#modeSombre');
    let modeClairIcon = document.querySelector('#modeClair');
    modeSombreIcon.className = "invisible";
    modeClairIcon.className = "visible";
    
    darkMode();
}

function darkMode() {
    let navbarTotal = document.querySelector("#navbar");
    navbarTotal.classList.remove("navbarLightMode");
    navbarTotal.classList.add("navbarDarkMode");

    let titrePage = document.querySelector("h1");
    titrePage.classList.add("lightWhiteText");


    let navbar = document.querySelector("nav ul");
    navbar.classList.add("lightWhiteText");

    let iconNavBar = document.querySelector("#iconnav #modeClair");
    iconNavBar.classList.add("blackImageToWhite");


    let sectionGrise = document.querySelectorAll("#presentationProjet, #galerieImage");
    for (i = 0; i < sectionGrise.length; i++) {
        sectionGrise[i].classList.add("DarkModeBackGroundVarianteClaire");
        sectionGrise[i].classList.remove("LightModeBackGroundVarianteFonce");
    }

    let text = document.querySelectorAll(".darkText");
    for (i = 0; i < text.length; i++) {
        text[i].classList.add("lightWhiteText");
        text[i].classList.remove("darkText");
    }

    let sectionBlanche = document.querySelectorAll(".LightModeBackGroundVarianteClaire ");
    for (i = 0; i < sectionBlanche.length; i++) {
        sectionBlanche[i].classList.add("DarkModeBackGroundVariantefonce");
        sectionBlanche[i].classList.remove("LightModeBackGroundVarianteClaire");
    }

    let lightModeImg = document.querySelectorAll(".lightModeImg");
    for (i = 0; i < lightModeImg.length; i++) {
        lightModeImg[i].classList.add("darkModeImg");
        lightModeImg[i].classList.remove("lightModeImg");
    }

    let linkProject = document.querySelectorAll(".linkProject a");
    for (i = 0; i < linkProject.length; i++) {
        linkProject[i].style.color="white"
    }

    let croixNavBar = document.querySelectorAll("#iconNavBar div");
    for (i = 0; i < croixNavBar.length; i++) {
        croixNavBar[i].style.backgroundColor="white";
    }

    let navbarForResponsive = document.querySelector("nav");
    navbarForResponsive.style.backgroundColor=("#202020")
}