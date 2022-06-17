function frenchLanguage() {
    //*NAVBAR -- NAVBAR
    let navHome = document.querySelector("#homeNavText");
    navHome.textContent = "Accueil";

    //*PRESENTATION
    let paragrapheIntro1 = document.querySelector("#paragrapheIntro1");
    paragrapheIntro1.textContent = "Le site web Bee Pleased a lui aussi été réalisé dans le cadre de mon BUT informatique en juin 2022. BeePleased est une entreprise fictive de séminaire pour entreprise. Le site Bee Pleased a été mis en place pour que de potentiels clients découvre le site internet. Cela permet également d'être présent sur la toile du web. Le design et le développement a été réalisé par mes soins.";

    let paragrapheIntro2 = document.querySelector("#paragrapheIntro2");
    paragrapheIntro2.textContent = "Ce site vitrine se veux très simpliste, il est mono page.";

    let paragrapheIntro3 = document.querySelector("#paragrapheIntro3");
    paragrapheIntro3.textContent = "Un petit peu de javascript a été utilisé pour le slider d'image.";


    //*NOTES IMAGES
    let remarqueImg1 = document.querySelector("#remarqueImg1");
    remarqueImg1.textContent = "Page proposant le planning du séminaire ainsi qu'un slider d'image des activitées qui seront réalisé.";

    let remarqueImg2 = document.querySelector("#remarqueImg2");
    remarqueImg2.textContent = "Partie de présentation de l'entreprise Bee Pleased ainsi que présentation du séminaire.";

    let remarqueImg3 = document.querySelector("#remarqueImg3");
    remarqueImg3.textContent = "Page d'accueil du site.";

    let remarqueImg4 = document.querySelector("#remarqueImg4");
    remarqueImg4.textContent = "Explication de la conférence et partie contact.";

    let remarqueImg5 = document.querySelector("#remarqueImg5");
    remarqueImg5.textContent = "Footer du site web.";


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