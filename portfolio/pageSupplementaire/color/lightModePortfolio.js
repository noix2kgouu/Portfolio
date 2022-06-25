function lightMode() {
    let navbarTotal = document.querySelector("#navbar");
    navbarTotal.classList.add("navbarLightMode");
    navbarTotal.classList.remove("navbarDarkMode");

    let titrePage = document.querySelector("h1");
    titrePage.classList.remove("lightWhiteText");

    let navbar = document.querySelector("nav ul");
    navbar.classList.remove("lightWhiteText");

    let iconNavBar = document.querySelector("#iconnav #modeClair");
    iconNavBar.classList.remove("blackImageToWhite");

    let sectionGrise = document.querySelectorAll("#presentationProjet, #galerieImage");
    for (i = 0; i < sectionGrise.length; i++) {
        sectionGrise[i].classList.remove("DarkModeBackGroundVarianteClaire");
        sectionGrise[i].classList.add("LightModeBackGroundVarianteFonce");
    }

    let sectionBlanche = document.querySelectorAll(".DarkModeBackGroundVariantefonce ");
    for (i = 0; i < sectionBlanche.length; i++) {
        sectionBlanche[i].classList.remove("DarkModeBackGroundVariantefonce");
        sectionBlanche[i].classList.add("LightModeBackGroundVarianteClaire");
    }

    let text = document.querySelectorAll(".lightWhiteText");
    for (i = 0; i < text.length; i++) {
        text[i].classList.remove("lightWhiteText");
        text[i].classList.add("darkText");
    }

    let lightModeImg = document.querySelectorAll(".darkModeImg");
    for (i = 0; i < lightModeImg.length; i++) {
        lightModeImg[i].classList.remove("darkModeImg");
        lightModeImg[i].classList.add("lightModeImg");
    }

    let linkProject = document.querySelectorAll(".linkProject a");
    for (i = 0; i < linkProject.length; i++) {
        linkProject[i].style.color="black"
    }


    let croixNavBar = document.querySelectorAll("#iconNavBar div");
    for (i = 0; i < croixNavBar.length; i++) {
        croixNavBar[i].style.backgroundColor="#202020";
    }

    let navbarForResponsive = document.querySelector("nav");
    navbarForResponsive.style.backgroundColor=("#E8E8E8")
}