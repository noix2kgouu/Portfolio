function englishLanguage() {
    //*NAVBAR -- NAVBAR
    let navHome = document.querySelector("#homeNavText");
    navHome.textContent = "Home";



    //*PRESENTATION
    let paragrapheIntro1 = document.querySelector("#paragrapheIntro1");
    paragrapheIntro1.textContent = "This website is a weather interface, it allows the user to access essential weather information. It also has access to information about the sun, the moon and pollution. The site allows to visualize the weather in real time, hour by hour (12 hours). But also by day (7 days). The user can add cities in favorites and he has access to its history. The design is similar to the site m6meteo. The user can access this information by geolocation, by city search or if he wishes by entering the exact geographical coordinates.";

    let paragrapheIntro2 = document.querySelector("#paragrapheIntro2");
    paragrapheIntro2.textContent = "Several APIs were used to access the information available on the website. I used the  \"local storage \" to manage user history and favourites. The entire site is responsive.";


    //*NOTES IMAGES
    let remarqueImg1 = document.querySelector("#remarqueImg1");
    remarqueImg1.textContent = "Main weather forecast information. Information about sunset and sunrise and the moon as well as the polution of the chosen city.";
    
    let remarqueImg2 = document.querySelector("#remarqueImg2");
    remarqueImg2.textContent = "Display of weather information by hours.";

    let remarqueImg3 = document.querySelector("#remarqueImg3");
    remarqueImg3.textContent = "Home page of the site. The user has access to his favorite location means as well as his favorites and history.";

    let remarqueImg4 = document.querySelector("#remarqueImg4");
    remarqueImg4.textContent = "7-day weather display. Additional information is available by clicking on the desired day.";

    let remarqueImg5 = document.querySelector("#remarqueImg5");
    remarqueImg5.textContent = "Responsive Search bar.";


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