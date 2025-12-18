//Auteurs: Angéline, Corie, Kaitlyn

//DÉCLARATION DES VARIABLES:

let score = localStorage.getItem("score");

if (score == null) {
    score = 0;
}

let nom = localStorage.getItem("nomUtilisateur");

//s'il n'y a pas de nom, nom devient Sans nom
if (nom == null) {
    nom = "Sans nom";
}

let boiteScoreFinal = document.getElementById("boiteScoreFinal");
let boiteNomUtilisateur = document.getElementById("boiteNomUtilisateur");
let messageScoreFinal = "<p>Score: " + score + "</p>";
let messageNomUtilisateur = "<h1>Score finale de "+ nom +":<h1>";

//CODE PRINCIPAL:

//affiche le score final et le nom d'utilisateur
boiteScoreFinal.innerHTML = messageScoreFinal;
boiteNomUtilisateur.innerHTML = messageNomUtilisateur; 