function frenchLanguage() {
    //*NAVBAR -- NAVBAR
    let navHome = document.querySelector("#homeNavText");
    navHome.textContent = "Accueil";

    //*PRESENTATION
    let paragrapheIntro1 = document.querySelector("#paragrapheIntro1");
    paragrapheIntro1.textContent = "Vous êtes actuellement entrain de consulter ce site web. De ce fait, la présence de screenshot est inutile, je vous laisse regarder mon travail par vous mêmes.";


    //*FOOTER
    let droitsReserve = document.querySelector("#droitsReserve");
    droitsReserve.textContent = "Tous droits réservés.";

    let mentionsLegales = document.querySelector("#mentionsLegales");
    mentionsLegales.textContent = "Mentions légales";

    let webSiteLink = document.querySelector("#webSiteLink");
    webSiteLink.textContent = "Site web";

    let githubLink = document.querySelector("#githubLink");
    githubLink.textContent = "Repository Github";
}