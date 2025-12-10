//DÉCLARATION DES VARIABLES:

let score = localStorage.getItem("score");
let boiteScoreFinal = document.getElementById("boiteScoreFinal");
let messageScoreFinal = "Score: " + score;

//CODE PRINCIPAL:

boiteScoreFinal.innerHTML = messageScoreFinal;