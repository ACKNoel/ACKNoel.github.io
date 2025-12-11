//DÉCLARATION DES VARIABLES:

let score = localStorage.getItem("score");
let nom = localStorage.getItem("nomUtilisateur");
let boiteScoreFinal = document.getElementById("boiteScoreFinal");
let boiteNomUtilisateur = document.getElementById("boiteNomUtilisateur");
let messageScoreFinal = "<p>Score: " + score + "</p>";
let messageNomUtilisateur = "<h1>Score finale de "+ nom +":<h1>";

//CODE PRINCIPAL:

boiteScoreFinal.innerHTML = messageScoreFinal;
boiteNomUtilisateur.innerHTML = messageNomUtilisateur; 