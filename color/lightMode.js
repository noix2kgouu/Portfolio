function lightMode() {

    let titrePage = document.querySelector("h1");
    titrePage.classList.remove("lightWhiteText");

    let navbar = document.querySelector("nav ul");
    navbar.classList.remove("lightWhiteText");

    let iconNavBar = document.querySelector("#iconnav #modeClair");
    iconNavBar.classList.remove("blackImageToWhite");

    let presentationHome = document.querySelector("#presentationPerso h2");
    presentationHome.classList.remove("lightWhiteText");

    let scrollFleche = document.querySelector("#scrollIcon");
    scrollFleche.classList.remove("blackImageToWhite");

    let header = document.querySelector("header");
    header.classList.remove("DarkModeBackGroundVarianteClaire");
    header.classList.add("LightModeBackGroundVarianteFonces");

    let navbarTotal = document.querySelector("#navbar");
    navbarTotal.classList.add("navbarLightMode");
    navbarTotal.classList.remove("navbarDarkMode");


    let infoSupSection = document.querySelector("#infoSupSection");
    infoSupSection.classList.remove("DarkModeBackGroundVarianteClaire");
    infoSupSection.classList.add("LightModeBackGroundVarianteFonce");

    let infosupTitle = document.querySelector("#infosup");
    infosupTitle.classList.remove("lightWhiteText");

    let portfolioTitle = document.querySelector("#portfolioTitle");
    portfolioTitle.classList.remove("lightWhiteText");

    let portfolioSection = document.querySelector("#portfolioSection");
    portfolioSection.classList.remove("DarkModeBackGroundVariantefonce");

    let recommandationSection = document.querySelector("#recommandationSection");
    recommandationSection.classList.remove("DarkModeBackGroundVariantefonce");

    let recommandationTitle = document.querySelector("#recommendationsTitle");
    recommandationTitle.classList.remove("lightWhiteText");

    let rightLeftFlecheRecommandation = document.querySelector("#leftRight");
    rightLeftFlecheRecommandation.classList.remove("blackImageToWhite");

    

    let principalInfoGauche = document.querySelectorAll("#principalInformation #infos a,#principalInformation #infos article, #socialNetworks a i");
    for (i = 0; i < principalInfoGauche.length; i++) {
        principalInfoGauche[i].style.color = "black";
    }

    let etiquette = document.querySelectorAll("#etiquetteMotClef p");
    for (i = 0; i < etiquette.length; i++) {
        etiquette[i].classList.remove("DarkModeForEtiquette");
        etiquette[i].classList.add("lightModeForEtiquette");
    }

    let curriculumvitae = document.querySelector("#curriculumVitae");
    curriculumvitae.classList.remove("curriculumVitaeDarkMode");
    curriculumvitae.classList.add("curriculumVitaeLightMode");

    
    let firstRecommandation = document.querySelector("#firstRecommandation");
    firstRecommandation.classList.remove("darkModeRecommandation");
    firstRecommandation.classList.add("lightModeRecommandation");
    let secondRecommandation = document.querySelector("#secondRecommandation");
    secondRecommandation.classList.remove("darkModeRecommandation");
    secondRecommandation.classList.add("lightModeRecommandation");

    let projetPortfolio = document.querySelectorAll("#projetRealise a");
    for (i = 0; i < projetPortfolio.length; i++) {
        projetPortfolio[i].classList.remove("projetDark");
        projetPortfolio[i].classList.add("projetLight");
    }

    let buttonPortfolio = document.querySelector("#buttonLienPortfolio");
    buttonPortfolio.classList.remove("darkButtonPortfolio");
    buttonPortfolio.classList.add("lightButtonPortfolio");


    let croixNavBar = document.querySelectorAll("#iconNavBar div");
    for (i = 0; i < croixNavBar.length; i++) {
        croixNavBar[i].style.backgroundColor="#202020";
    }

    let navbarForResponsive = document.querySelector("nav");
    navbarForResponsive.style.backgroundColor=("#E8E8E8")
}