//DÉCLARATION DES VARIABLES:

//tableau qui contient les pays possibles
let tblPays = [
    "Canada",
    "France",
    "Russie",
    "Mexique",
    "Japon",
    "Angleterre",
    "Thailande"
];

//tableau à 2 dimensions avec toutes les indices dans le même ordre que les pays
let tblIndices = [
    ["indice canada 1", "indice canada 2", "indice canada 3", "indice canada 4", "indice canada 5"],
    ["indice france 1", "indice france 2", "indice france 3", "indice france 4", "indice france 5"],
    ["indice russie 1", "indice russie 2", "indice russie 3", "indice russie 4", "indice russie 5"],
    ["indice mexique 1", "indice mexique 2", "indice mexique 3", "indice mexique 4", "indice mexique 5"],
    ["indice japon 1", "indice japon 2", "indice japon 3", "indice japon 4", "indice japon 5"],
    ["indice angleterre 1", "indice angleterre 2", "indice angleterre 3", "indice angleterre 4", "indice angleterre 5"],
    ["indice thailande 1", "indice thailande 2", "indice thailande 3", "indice thailande 4", "indice thailande 5"]
];

//variables principaux
let pays = Math.floor(Math.random() * (tblPays.length));
let indice = 0;
let score = 0;
let nom = localStorage.getItem("nomUtilisateur");

let boiteAffiche = document.getElementById("divIndice");
let boiteReponse = document.getElementById("divReponse");
let boiteNomUtilisateur = document.getElementById("boiteNom");
let boiteScore = document.getElementById("boiteScore");

localStorage.setItem("score", 0);

//CODE PRINCIPAL:

let messageNom;

//s'il n'y a pas de nom d'utilisateur, ??? devient le nom
if (nom == undefined) {
    messageNom = "<p><b>NOM:</b> Sans nom</p>";
}
else {
    messageNom = "<p><b>NOM:</b> " + nom + "</p>";
   
}
//affiche le nom d'utilisateur sur la page
boiteNomUtilisateur.innerHTML = messageNom;
boiteScore.innerHTML = score;

//FONCTIONS:

//Source: https://www.w3schools.com/js/js_random.asp
//fonction qui choisit un pays selon l'index du tableau de pays 
function debuterJeu() {
    pays = Math.floor(Math.random() * (tblPays.length));

    score = 0;
    indice = 0;
    
    let messageRepondre = "<label for=\"txtReponse\">Réponse:</label>\
                            <input type=\"text\" id=\"txtReponse\" style=\"border-radius: 8px;\">\
                            <input type=\"button\" id=\"btnSoumet\" onclick=\"correcteur()\"  value=\"Vérifier\" style=\"border-radius: 8px; background-color: rgb(7, 105, 16); color: rgb(231, 238, 232);\"></input>"

    let messagePremierIndice = "<p><b>Indice 1:</b> " + tblIndices[pays][indice] + "</p>";

    boiteScore.innerHTML = score;
    boiteReponse.innerHTML = messageRepondre;
    boiteAffiche.innerHTML = messagePremierIndice;
}

//fonction qui prend une réponse de l'utilisateur et vérifie s'il est correct
//si la réponse est correct, on donne un montant de points selon le nombre d'indices utilisés
//si la réponse est incorrect, on va à la prochaine indice
function correcteur() {
    //déclaration des variables
    let message;
    let messageProchainJeu;
    let reponse = document.getElementById("txtReponse").value;

    //si la réponse est correct, on ajoute au score et recommence le jeu
    if (reponse.toLowerCase() == tblPays[pays].toLowerCase()) {
        score = score + (100 - indice*20);
        boiteScore.innerHTML = score;
        localStorage.setItem("score", score);

        message = "<p>Vous avez réussi!<br><br>Le pays était " + tblPays[pays] + ".</p>";
        messageProchainJeu = "<input type=\"button\" onclick=\"recommenceJeu()\" value=\"Prochain\"></input>"
    }
    //si il n'y a plus d'indices, recommencer le jeu
    else if (indice == 4) {
        message = "<p>Vous avez failli. <br><br>Le pays était " + tblPays[pays] + ".</p>";
        messageProchainJeu = "<input type=\"button\" value=\"Prochain\"></input>"
        
        boiteReponse.innerHTML = messageProchainJeu
    }
    //si la réponse est incorrect, on va au prochain indice en utilisant le tableau d'indices
    else {
        indice++;
        message = "<p>Incorrect. Voici le prochain indice:<br>" + tblIndices[pays][indice] + "</p>";
    }

    //affiche le message défini auparavant
    boiteAffiche.innerHTML = message;
}

//fonction qui recommence le jeu en pigeant un autre pays
function recommenceJeu() {
    pays = Math.floor(Math.random() * (tblPays.length));

    indice = 0;
    
    let messageRepondre = "<label for=\"txtReponse\">Réponse:</label>\
                            <input type=\"text\" id=\"txtReponse\" style=\"border-radius: 8px;\">\
                            <input type=\"button\" id=\"btnSoumet\" onclick=\"correcteur()\"  value=\"Vérifier\" style=\"border-radius: 8px; background-color: rgb(7, 105, 16); color: rgb(231, 238, 232);\"></input>"

    let messagePremierIndice = "<p><b>Indice 1:</b> " + tblIndices[pays][indice] + "</p>";

    boiteReponse.innerHTML = messageRepondre;
    boiteAffiche.innerHTML = messagePremierIndice;
}