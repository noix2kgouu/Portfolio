let leftButton = document.querySelector("#leftRecommand");
let rightButton = document.querySelector("#rightRecommand");

let Button = document.querySelector(".buttonMove");

let firstRecommandation = document.querySelector("#firstRecommandation");
let secondRecommandation = document.querySelector("#secondRecommandation");

let actuelImage = 1;

leftButton.addEventListener("click", () => {
    if (actuelImage == 1) {
        firstRecommandation.style.left="430px"
        secondRecommandation.style.right="430px"

        firstRecommandation.style.zIndex = "1";
        secondRecommandation.style.zIndex = "2";

        actuelImage = 2;
    }
    else if (actuelImage == 2) {
        firstRecommandation.style.left="250px"
        secondRecommandation.style.right="250px"

        firstRecommandation.style.zIndex = "2";
        secondRecommandation.style.zIndex = "1";

        actuelImage = 1;
    }
})

rightButton.addEventListener("click", () => {
    if (actuelImage == 1) {
        firstRecommandation.style.left="430px"
        secondRecommandation.style.right="430px"

        firstRecommandation.style.zIndex = "1";
        secondRecommandation.style.zIndex = "2";

        actuelImage = 2;
    }
    else if (actuelImage == 2) {
        firstRecommandation.style.left="250px"
        secondRecommandation.style.right="250px"

        firstRecommandation.style.zIndex = "2";
        secondRecommandation.style.zIndex = "1";

        actuelImage = 1;
    }
})
