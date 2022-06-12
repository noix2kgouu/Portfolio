function englishLanguage() {
    //*NAVBAR -- NAVBAR
    let navHome = document.querySelector("#homeNavText");
    navHome.textContent = "Home";



    //*PRESENTATION
    let paragrapheIntro1 = document.querySelector("#paragrapheIntro1");
    paragrapheIntro1.textContent = "This project, TrainTravel was carried out as part of my IT GOAL in the first year (May 2022). This website allows the search and booking of train tickets. The design was not required, so I have designated my future site on Figma. I then developed the website.";

    let paragrapheIntro2 = document.querySelector("#paragrapheIntro2");
    paragrapheIntro2.textContent = "We had access to an API managed by the professor to allow us to go and retrieve different information (trains, horrors, stations, users,...).";

    let paragrapheIntro3 = document.querySelector("#paragrapheIntro3");
    paragrapheIntro3.textContent = "Indicative score obtained: 18/20.";


    //*NOTES IMAGES
    let remarqueImg1 = document.querySelector("#remarqueImg1");
    remarqueImg1.textContent = "Home page, the user can directly search for tickets.";
    
    let remarqueImg2 = document.querySelector("#remarqueImg2");
    remarqueImg2.textContent = "Displaying the best destinations offered by TrainTravel.";

    let remarqueImg3 = document.querySelector("#remarqueImg3");
    remarqueImg3.textContent = "Exclusively search page for train tickets. Search form at the top and then display train tickets.";

    let remarqueImg4 = document.querySelector("#remarqueImg4");
    remarqueImg4.textContent = "Displaying the shopping cart popup. Allows you to view your shopping cart without changing the page. The design is minimalist, it does not emcombrant for any users.";


    //*FOOTER
    let droitsReserve = document.querySelector("#droitsReserve");
    droitsReserve.textContent = "All rights reserved.";

    let mentionsLegales = document.querySelector("#mentionsLegales");
    mentionsLegales.textContent = "Legal notice";
}