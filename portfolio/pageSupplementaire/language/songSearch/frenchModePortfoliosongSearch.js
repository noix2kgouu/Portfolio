function frenchLanguage() {
    //*NAVBAR -- NAVBAR
    let navHome = document.querySelector("#homeNavText");
    navHome.textContent = "Accueil";

    //*PRESENTATION
    let paragrapheIntro1 = document.querySelector("#paragrapheIntro1");
    paragrapheIntro1.textContent = "Songsearch est un site web qui permet de rechercher des titres et artistes musical. Les résultats sont affichés sous forme de carte. Ceux-ci possèdent les informations essentiels sur le titre/artiste recherché et possèdent les liens vers les plateformes musicals tels que Apple Music, Spotify ou Deezer.";


    //*NOTES IMAGES
    let remarqueImg1 = document.querySelector("#remarqueImg1");
    remarqueImg1.textContent = "Page de résultat de recherche (titres).";

    let remarqueImg2 = document.querySelector("#remarqueImg2");
    remarqueImg2.textContent = "Page d'accueil du site web, permet de réaliser les recherches.";

    let remarqueImg3 = document.querySelector("#remarqueImg3");
    remarqueImg3.textContent = "Page de résultat de recherche (artistes).";


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