function englishLanguage() {
    //*NAVBAR -- NAVBAR
    let navHome = document.querySelector("#homeNavText");
    let navPortfolio = document.querySelector("#portfolioNavText");
    let navSkills = document.querySelector("#skillsNavText");
    let navRecommand = document.querySelector("#recommandNavText");
    let navInfoSup = document.querySelector("#infoSupNavText");

    navHome.textContent = "Home";
    navPortfolio.textContent = "Portfolio";
    navSkills.textContent = "Skills";
    navRecommand.textContent = "Recommendations";
    navInfoSup.textContent = "Additional information";

    //*HOME -- HOME
    let presentationHome = document.querySelector("#presentationHome");
    presentationHome.textContent = "Web developer in the making...";

    let ageHome = document.querySelector("#ageLabel");
    let formationHome = document.querySelector("#formaLabel");
    let qualite1Home = document.querySelector("#qualiteLabel1");
    let qualite2Home = document.querySelector("#qualiteLabel2");

    ageHome.textContent = "18th birthday";
    formationHome.textContent = "IT bachelor";
    qualite1Home.textContent = "Serious";
    qualite2Home.textContent = "Responsible";

    //*PORTFOLIO -- PORTFOLIO
    let portfolioTitle = document.querySelector("#portfolioTitle");
    portfolioTitle.textContent = "my portfolio";

    let portfolioButton = document.querySelector("#buttonLienPortfolio");
    portfolioButton.textContent = "Show more";

    //*SKILLS -- SKILLS
    let skillsTitle = document.querySelector("#skillsTitle");
    skillsTitle.textContent = "my skills";

    let languageTitle = document.querySelector("#languageTitle");
    languageTitle.textContent = "Language";

    let toolsTitle = document.querySelector("#toolsTitle");
    toolsTitle.textContent = "Tools";


    let equipeText = document.querySelector("#equipeP");
    let autonomieText = document.querySelector("#autonomieP");
    let stressText = document.querySelector("#stressP");

    equipeText.textContent = "teamwork";
    autonomieText.textContent = "self-government";
    stressText.textContent = "Excellent stress management";

    //*RECOMMANDATION -- RECOMMANDATION
    let recommendationsTitle = document.querySelector("#recommendationsTitle");
    recommendationsTitle.textContent = "recommendations";

    let recommandation1 = document.querySelector("#recommandationP1");
    recommandation1.textContent = "Put all speaking her delicate recurred possible. Set indulgence inquietude discretion insensible bed why announcing.";

    let recommandation2 = document.querySelector("#recommandationP2");
    recommandation2.textContent = "Put all speaking her delicate recurred possible. Set indulgence inquietude discretion insensible bed why announcing why announcing.";

    //*INFOSUP -- INFOSUP
    let infosupTitle = document.querySelector("#infosup");
    infosupTitle.textContent = "additional information";

    let CVbutton = document.querySelector("#curriculumVitae");
    CVbutton.textContent = "My CV";


    //*FOOTER -- FOOTER
    let droitsReserve = document.querySelector("#droitsReserve");
    droitsReserve.textContent = "All rights reserved.";

    let mentionsLegales = document.querySelector("#mentionsLegales");
    mentionsLegales.textContent = "Legal notice";

}