function englishLanguage() {
    //*NAVBAR -- NAVBAR
    let navHome = document.querySelector("#homeNavText");
    navHome.textContent = "Home";



    //*PRESENTATION
    let paragrapheIntro1 = document.querySelector("#paragrapheIntro1");
    paragrapheIntro1.textContent = "You are currently visiting this website. Therefore, the presence of screenshot is useless, I let you watch my work by yourself.";


    //*FOOTER
    let droitsReserve = document.querySelector("#droitsReserve");
    droitsReserve.textContent = "All rights reserved.";

    let mentionsLegales = document.querySelector("#mentionsLegales");
    mentionsLegales.textContent = "Legal notice";

    let webSiteLink = document.querySelector("#webSiteLink");
    webSiteLink.textContent = "website";

    let githubLink = document.querySelector("#githubLink");
    githubLink.textContent = "Github repository";
}