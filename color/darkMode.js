var colorModeUser = sessionStorage.getItem('binaryColorMode');
if (colorModeUser == 1){

    //*the user select dark mode in the passed so the darkmode icon is passed to invisible
    let modeSombreIcon = document.querySelector('#modeSombre');
    let modeClairIcon = document.querySelector('#modeClair');
    modeSombreIcon.className = "invisible";
    modeClairIcon.className = "visible";

    darkMode();
}

function darkMode() {
    let titrePage = document.querySelector("h1");
    titrePage.classList.add("lightWhiteText");

    let navbar = document.querySelector("nav ul");
    navbar.classList.add("lightWhiteText");

    let iconNavBar = document.querySelector("#iconnav #modeClair");
    iconNavBar.classList.add("blackImageToWhite");

    let presentationHome = document.querySelector("#presentationPerso h2");
    presentationHome.classList.add("lightWhiteText");

    let scrollFleche = document.querySelector("#scrollIcon");
    scrollFleche.classList.add("blackImageToWhite");

    let header = document.querySelector("header");
    header.classList.add("DarkModeBackGroundVarianteClaire");
    header.classList.remove("LightModeBackGroundVarianteFonces");

    let navbarTotal = document.querySelector("#navbar");
    navbarTotal.classList.remove("navbarLightMode");
    navbarTotal.classList.add("navbarDarkMode");


    let infoSupSection = document.querySelector("#infoSupSection");
    infoSupSection.classList.add("DarkModeBackGroundVarianteClaire");
    infoSupSection.classList.remove("LightModeBackGroundVarianteFonce");


    let infosupTitle = document.querySelector("#infosup");
    infosupTitle.classList.add("lightWhiteText");

    let portfolioTitle = document.querySelector("#portfolioTitle");
    portfolioTitle.classList.add("lightWhiteText");

    let portfolioSection = document.querySelector("#portfolioSection");
    portfolioSection.classList.add("DarkModeBackGroundVariantefonce");

    let recommandationSection = document.querySelector("#recommandationSection");
    recommandationSection.classList.add("DarkModeBackGroundVariantefonce");

    let recommandationTitle = document.querySelector("#recommendationsTitle");
    recommandationTitle.classList.add("lightWhiteText");

    let rightLeftFlecheRecommandation = document.querySelector("#leftRight");
    rightLeftFlecheRecommandation.classList.add("blackImageToWhite");

    

    let principalInfoGauche = document.querySelectorAll("#principalInformation #infos a,#principalInformation #infos article, #socialNetworks a i");
    for (i = 0; i < principalInfoGauche.length; i++) {
        principalInfoGauche[i].style.color = "white";
    }

    let etiquette = document.querySelectorAll("#etiquetteMotClef p");
    for (i = 0; i < etiquette.length; i++) {
        etiquette[i].classList.add("DarkModeForEtiquette");
        etiquette[i].classList.remove("lightModeForEtiquette");
    }

    let curriculumvitae = document.querySelector("#curriculumVitae");
    curriculumvitae.classList.add("curriculumVitaeDarkMode");
    curriculumvitae.classList.remove("curriculumVitaeLightMode");


    let firstRecommandation = document.querySelector("#firstRecommandation");
    firstRecommandation.classList.add("darkModeRecommandation");
    firstRecommandation.classList.remove("lightModeRecommandation");
    let secondRecommandation = document.querySelector("#secondRecommandation");
    secondRecommandation.classList.add("darkModeRecommandation");
    secondRecommandation.classList.remove("lightModeRecommandation");


    let projetPortfolio = document.querySelectorAll("#projetRealise a");
    for (i = 0; i < projetPortfolio.length; i++) {
        projetPortfolio[i].classList.add("projetDark");
        projetPortfolio[i].classList.remove("projetLight");
    }

    let buttonPortfolio = document.querySelector("#buttonLienPortfolio");
    buttonPortfolio.classList.add("darkButtonPortfolio");
    buttonPortfolio.classList.remove("lightButtonPortfolio");


    let croixNavBar = document.querySelectorAll("#iconNavBar div");
    for (i = 0; i < croixNavBar.length; i++) {
        croixNavBar[i].style.backgroundColor="white";
    }

    let navbarForResponsive = document.querySelector("nav");
    navbarForResponsive.style.backgroundColor=("#202020")
}