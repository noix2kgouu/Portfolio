let openCloseNavIcon = document.querySelector('#iconNavBar');

let navbarContenu = document.querySelector('nav');

let topBarreIconNav = document.querySelector('#topBarreIconNav');
let middleBarreIconNav = document.querySelector('#middleBarreIconNav');
let bottomBarreIconNav = document.querySelector('#bottomBarreIconNav');

let home = document.querySelector('#home');
let main = document.querySelector('main');
let footer = document.querySelector('footer');

let whereIsNavBar = 0;

openCloseNavIcon.addEventListener("click", () => {
    if (whereIsNavBar == 0) {
        middleBarreIconNav.style.display = "none";
        
        topBarreIconNav.style.position = "absolute";
        topBarreIconNav.style.transform = "rotate(45deg)";
        
        bottomBarreIconNav.style.transform = "rotate(-45deg)";
        
        // navbarContenu.style.display = "block";
        navbarContenu.style.width = "345px";
        navbarContenu.style.padding = "30px";

        whereIsNavBar = 1;
    }
    else if (whereIsNavBar == 1) {

        closeNavBar();
    }
    home.addEventListener("click", () => {
        closeNavBar();
    })
    main.addEventListener("click", () => {
        closeNavBar();
    })
    footer.addEventListener("click", () => {
        closeNavBar();
    })

})

function closeNavBar() {
    navbarContenu.style.width = "0px";
    navbarContenu.style.padding = "30px 0px";

    topBarreIconNav.style.position = "relative";

    topBarreIconNav.style.transform = "rotate(0deg)";
    bottomBarreIconNav.style.transform = "rotate(0deg)";

    middleBarreIconNav.style.display = "block";

    whereIsNavBar = 0;
}



