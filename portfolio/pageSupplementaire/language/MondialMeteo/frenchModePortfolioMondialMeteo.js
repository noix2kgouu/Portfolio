function frenchLanguage() {
    //*NAVBAR -- NAVBAR
    let navHome = document.querySelector("#homeNavText");
    navHome.textContent = "Accueil";

    //*PRESENTATION
    let paragrapheIntro1 = document.querySelector("#paragrapheIntro1");
    paragrapheIntro1.textContent = "Ce site web est une interface météo, il permet à l'utilisateur d'accéder aux informations essentiels météorologique. Il a également accès à des informations relatives au soleil, à la lune et à la pollution. Le site permet de visualiser la météo en temps réel, heure par heure (12 heures). Mais également par jour (7 jours). L'utilisateur peut ajouter des villes en favoris et il a accès à son historique. Le design est similaire au site m6meteo. L'utilisateur peut accéder à ces informations par géolocalisation, par recherche de ville ou si il le souhaite en saisissant les coordonnées géographiques exactes.";

    let paragrapheIntro2 = document.querySelector("#paragrapheIntro2");
    paragrapheIntro2.textContent = "Plusieurs APIs on été utilisées pour accéder aux informations disponibles sur le site web. J'ai utilisé le \"local storage\" pour gérer l'historique et les favoris de l'utilisateurs. L'ensemble du site est responsive.";


    //*NOTES IMAGES
    let remarqueImg1 = document.querySelector("#remarqueImg1");
    remarqueImg1.textContent = "Informations de prévision météorologique principal. Informations sur le coucher et le lever du soleil et de la lune ainsi que sur la polution de la ville choisi.";
    
    let remarqueImg2 = document.querySelector("#remarqueImg2");
    remarqueImg2.textContent = "Affichage des informations météo par heures.";

    let remarqueImg3 = document.querySelector("#remarqueImg3");
    remarqueImg3.textContent = "Page d'accueil du site. L'utilisateur a accés à son moyen de localisation préféré ainsi qu'a ses favoris et historique.";

    let remarqueImg4 = document.querySelector("#remarqueImg4");
    remarqueImg4.textContent = "Affichage de la météo sur 7 jours. Des informations supplémentaires sont disponible en cliquant sur le jour souhaité.";

    let remarqueImg5 = document.querySelector("#remarqueImg5");
    remarqueImg5.textContent = "Barre de recherche responsive.";


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