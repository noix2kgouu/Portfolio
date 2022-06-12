let modeSombreIcon = document.querySelector('#modeSombre');
let modeClairIcon = document.querySelector('#modeClair');
let langueFrancaiseIcon = document.querySelector('#langueFrancaise');
let langueAnglaiseIcon = document.querySelector('#langueAnglaise');

let colorMode = 0;//*variable colorMode 1=>sombre ; 0=>clair

modeSombreIcon.addEventListener("click", () => {//*passage mode sombre
    modeSombreIcon.className="invisible";
    modeClairIcon.className="visible";
    colorMode=1;
    sessionStorage.setItem('binaryColorMode',colorMode);//*transfert colorMode entre page
    darkMode();
})

modeClairIcon.addEventListener("click", () => {//*passage mode clair
    modeClairIcon.className="invisible";
    modeSombreIcon.className="visible";
    colorMode=0;
    sessionStorage.setItem('binaryColorMode',colorMode);//*transfert colorMode entre page
    lightMode();
})

langueFrancaiseIcon.addEventListener("click", () => {//*passage langue francaise
    langueFrancaiseIcon.className="invisible";
    langueAnglaiseIcon.className="visible";
    frenchLanguage();
})

langueAnglaiseIcon.addEventListener("click", () => {//*passage langue anglaise
    langueAnglaiseIcon.className="invisible";
    langueFrancaiseIcon.className="visible";
    englishLanguage();
})



