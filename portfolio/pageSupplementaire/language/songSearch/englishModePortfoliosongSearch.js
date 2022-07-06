function englishLanguage() {
    //*NAVBAR -- NAVBAR
    let navHome = document.querySelector("#homeNavText");
    navHome.textContent = "Home";



    //*PRESENTATION
    let paragrapheIntro1 = document.querySelector("#paragrapheIntro1");
    paragrapheIntro1.textContent = "Songsearch is a website that allows you to search for musical titles and artists. The results are displayed in the form of a map. These have the essential information on the title / artist sought and have links to music platforms such as Apple Music, Spotify or Deezer.";



    let remarqueImg1 = document.querySelector("#remarqueImg1");
    remarqueImg1.textContent = "Search result page (titles).";
    
    let remarqueImg2 = document.querySelector("#remarqueImg2");
    remarqueImg2.textContent = "Home page of the website, allows to carry out searches.";

    let remarqueImg3 = document.querySelector("#remarqueImg3");
    remarqueImg3.textContent = "Search result page (artists).";

    
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