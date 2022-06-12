function frenchLanguage() {
    //*NAVBAR -- NAVBAR
    let navHome = document.querySelector("#homeNavText");
    let navPortfolio = document.querySelector("#portfolioNavText");
    let navSkills = document.querySelector("#skillsNavText");
    let navRecommand = document.querySelector("#recommandNavText");
    let navInfoSup = document.querySelector("#infoSupNavText");

    navHome.textContent = "Accueil";
    navPortfolio.textContent = "Portfolio";
    navSkills.textContent = "Compétences";
    navRecommand.textContent = "Recommandations";
    navInfoSup.textContent = "Informations supplémentaires";

    //*HOME -- HOME
    let presentationHome = document.querySelector("#presentationHome");
    presentationHome.textContent = "DÉVELOPPEUR WEB EN DEVENIR...";

    let ageHome = document.querySelector("#ageLabel");
    let formationHome = document.querySelector("#formaLabel");
    let qualite1Home = document.querySelector("#qualiteLabel1");
    let qualite2Home = document.querySelector("#qualiteLabel2");

    ageHome.textContent = "18 ans";
    formationHome.textContent = "BUT informatique";
    qualite1Home.textContent = "Sérieux";
    qualite2Home.textContent = "Responsable";

    //*PORTFOLIO -- PORTFOLIO
    let portfolioTitle = document.querySelector("#portfolioTitle");
    portfolioTitle.textContent = "MON PORTFOLIO";

    let portfolioButton = document.querySelector("#buttonLienPortfolio");
    portfolioButton.textContent = "Afficher plus";

    //*SKILLS -- SKILLS
    let skillsTitle = document.querySelector("#skillsTitle");
    skillsTitle.textContent = "MES COMPÉTENCES";

    let languageTitle = document.querySelector("#languageTitle");
    languageTitle.textContent = "Langage";

    let toolsTitle = document.querySelector("#toolsTitle");
    toolsTitle.textContent = "Outils";


    let equipeText = document.querySelector("#equipeP");
    let autonomieText = document.querySelector("#autonomieP");
    let stressText = document.querySelector("#stressP");

    equipeText.textContent = "Travail en équipe";
    autonomieText.textContent = "Autonomie";
    stressText.textContent = "Excellente gestion du stress";

    //*RECOMMANDATION -- RECOMMANDATION
    let recommendationsTitle = document.querySelector("#recommendationsTitle");
    recommendationsTitle.textContent = "recommandations";

    let recommandation1 = document.querySelector("#recommandationP1");
    recommandation1.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi quia quaerat eum officiis, deserunt accusantium provident commodi reiciendis.";

    let recommandation2 = document.querySelector("#recommandationP2");
    recommandation2.textContent = "Lorem ipsum dolor sit amet consecteturadipisicing elit. Eligendi quia quaerat eum officiis, deserunt accusantium provident commodi reiciendis.";

    //*INFOSUP -- INFOSUP
    let infosupTitle = document.querySelector("#infosup");
    infosupTitle.textContent = "INFORMATIONS SUPPLÉMENTAIRES";

    let CVbutton = document.querySelector("#curriculumVitae");
    CVbutton.textContent = "Mon CV";


    //*FOOTER -- FOOTER
    let droitsReserve = document.querySelector("#droitsReserve");
    droitsReserve.textContent = "Tous droits réservés.";

    let mentionsLegales = document.querySelector("#mentionsLegales");
    mentionsLegales.textContent = "Mentions légales";
}
