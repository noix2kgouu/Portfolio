function frenchLanguage() {
    //*NAVBAR -- NAVBAR
    let navHome = document.querySelector("#homeNavText");
    navHome.textContent = "Accueil";

    //*PRESENTATION
    let paragrapheIntro1 = document.querySelector("#paragrapheIntro1");
    paragrapheIntro1.textContent = "Ce projet, TrainTravel à été réalisé dans le cadre de mon BUT informatique en première année (mai 2022). Ce site web permet la recherche et la réservation de billets de train. Le design n'était pas exigé, j'ai donc désigné mon futur site sur Figma. J'ai ensuite développé le site internet.";

    let paragrapheIntro2 = document.querySelector("#paragrapheIntro2");
    paragrapheIntro2.textContent = "Nous avions accés à une API gérée par le professeur pour nous permettre d'aller récupérer différentes informations (trains, horraires, gares, utilisateurs,...).";

    let paragrapheIntro3 = document.querySelector("#paragrapheIntro3");
    paragrapheIntro3.textContent = "Note indicative obtenue : 18/20.";


    //*NOTES IMAGES
    let remarqueImg1 = document.querySelector("#remarqueImg1");
    remarqueImg1.textContent = "Page d'accueil, l'utilisateur peux directement rechercher des billets.";
    
    let remarqueImg2 = document.querySelector("#remarqueImg2");
    remarqueImg2.textContent = "Affichage des meilleures destination que propose TrainTravel.";

    let remarqueImg3 = document.querySelector("#remarqueImg3");
    remarqueImg3.textContent = "Page exclusivement de recherche de billets de train. Formulaire de recherche en haut puis affichage des billets de trains.";

    let remarqueImg4 = document.querySelector("#remarqueImg4");
    remarqueImg4.textContent = "Affichage de la popup panier. Permet de consulter son panier sans changer de page. Le design est minimaliste, il n'ai pas emcombrant pour quelconques utilisateurs.";


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