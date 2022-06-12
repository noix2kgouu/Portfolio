//*IMPORTATION DES PROJETS DU PORTFOLIO SUR LA PAGE WEB

for (let i = 0; i < dataPortfolio.length; i++) {

    //*projects display section
    let portofolioSection = document.querySelector("#projetRealise");

    //*project boxe
    let boxProject = document.createElement('article');
    boxProject.className = "caseProjet";
    portofolioSection.appendChild(boxProject);

    //*title
    let titleProject = document.createElement('h3');
    boxProject.appendChild(titleProject);
    titleProject.textContent = dataPortfolio[i].name;


    //*description
    let descriptionDiv = document.createElement('div');
    descriptionDiv.className = "textParts";
    boxProject.appendChild(descriptionDiv);

    let descriptionProject = document.createElement('p');
    descriptionDiv.appendChild(descriptionProject);
    descriptionProject.textContent = dataPortfolio[i].description;


    //*techno
    let technoDiv = document.createElement('div');
    technoDiv.className = "techno nonSelectionnable";
    boxProject.appendChild(technoDiv);

    //*parcours tableau techno
    for (let j = 0; j < dataPortfolio[i].techno.length; j++) {
        let technoParagraph = document.createElement('p');
        technoDiv.appendChild(technoParagraph);
        technoParagraph.textContent = dataPortfolio[i].techno[j];
    }

    //*picture
    let pictureProject = document.createElement('img');
    boxProject.appendChild(pictureProject);
    pictureProject.src = dataPortfolio[i].picture;



    //*button "voir plus"
    let buttonDiv = document.createElement('div');
    buttonDiv.className = "voirPlusProjet";
    boxProject.appendChild(buttonDiv);

    let buttonText = document.createElement('p');
    buttonDiv.appendChild(buttonText);
    buttonText.textContent = "Voir plus";

}