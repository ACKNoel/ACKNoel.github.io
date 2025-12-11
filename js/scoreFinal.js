//DÉCLARATION DES VARIABLES:

let score = localStorage.getItem("score");
let nom = localStorage.getItem("nomUtilisateur");
let boiteScoreFinal = document.getElementById("boiteScoreFinal");
let messageScoreFinal = "<p>Score: " + score + "</p>";

//CODE PRINCIPAL:

boiteScoreFinal.innerHTML = messageScoreFinal;