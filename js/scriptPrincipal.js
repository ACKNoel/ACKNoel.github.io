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
    //Canada:
    ["indice canada 1", "indice canada 2", "indice canada 3", "indice canada 4", "indice canada 5"],
    //France:
    ["indice france 1", "indice france 2", "indice france 3", "indice france 4", "indice france 5"],
    //Russie:
    ["indice russie 1", "indice russie 2", "indice russie 3", "indice russie 4", "indice russie 5"],
    //Mexique:
    ["indice mexique 1", "indice mexique 2", "indice mexique 3", "indice mexique 4", "indice mexique 5"],
    //Japon:
    ["indice japon 1", "indice japon 2", "indice japon 3", "indice japon 4", "indice japon 5"],
    //Angleterre:
    ["indice angleterre 1", "indice angleterre 2", "indice angleterre 3", "indice angleterre 4", "indice angleterre 5"],
    //Thailande:
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

let messageIndices;
let messageNom;
let messageScore;

//CODE PRINCIPAL:

localStorage.setItem("score", 0);

//s'il n'y a pas de nom d'utilisateur, "Sans nom" devient le nom
if ((nom == undefined) || (nom == "")) {
    messageNom = "<p><b>NOM:</b> Sans nom</p>";
}
else {
    messageNom = "<p><b>NOM:</b> " + nom + "</p>";
}

//crée le message de score qui sera affiché
messageScore = "<p><b>SCORE:</b> " + score;

//affiche le nom d'utilisateur et le score sur la page
boiteNomUtilisateur.innerHTML = messageNom;
boiteScore.innerHTML = messageScore;

//FONCTIONS:

//Source: https://www.w3schools.com/js/js_random.asp
//fonction qui choisit un pays selon l'index du tableau de pays
//affiche aussi le premier indice et la boîte de réponse
function debuterJeu() {
    //choisit un pays aléatoire du tableau de pays
    pays = Math.floor(Math.random() * (tblPays.length));

    //recommence les indices
    indice = 0;
    
    //crée le text et un bouton qui sera affiché sur la page
    let messageRepondre = "<label for=\"txtReponse\">Réponse:</label>\
                            <input type=\"text\" id=\"txtReponse\" style=\"border-radius: 8px;\">\
                            <input type=\"button\" id=\"btnSoumet\" onclick=\"correcteur()\"  value=\"Vérifier\" style=\"border-radius: 8px; background-color: rgb(7, 105, 16); color: rgb(231, 238, 232);\"></input>"

    messageIndices = "<b>Indice 1:</b> " + tblIndices[pays][indice];
    messageScore = "<p><b>SCORE:</b> " + score;

    //affiche le text et un bouton sur la page
    boiteScore.innerHTML = messageScore;
    boiteReponse.innerHTML = messageRepondre;
    boiteAffiche.innerHTML = "<p>" + messageIndices + "</p>";
}

//fonction qui prend une réponse de l'utilisateur et vérifie s'il est correct
//si la réponse est correct, on donne un montant de points selon le nombre d'indices utilisés
//si la réponse est incorrect, on va à la prochaine indice
function correcteur() {
    //déclaration des variables
    let messageProchainJeu;
    let reponse = document.getElementById("txtReponse").value;

    //si la réponse est correct, on ajoute au score et recommence le jeu
    if (reponse.toLowerCase() == tblPays[pays].toLowerCase()) {
        //ajoute au score dépendant sur le nombre d'indices utilisés
        score = score + (100 - indice*20);

        //affiche et store le nouveau score
        boiteScore.innerHTML = messageScore;
        localStorage.setItem("score", score);

        //crée le text et un bouton à afficher sur la page
        messageScore = "<p><b>SCORE:</b> " + score;
        messageIndices = "Vous avez réussi!<br><br>Le pays était " + tblPays[pays] + ".";
        messageProchainJeu = "<input type=\"button\" onclick=\"debuterJeu()\" value=\"Prochain\"></input>";
        
        //affiche le bouton pour passer au prochain jeu
        boiteReponse.innerHTML = messageProchainJeu;
    }
    //s'il n'y a plus d'indices, recommencer le jeu
    else if (indice == 4) {
        //crée le text et un bouton à afficher sur la page
        messageIndices = "Vous avez failli. <br><br>Le pays était " + tblPays[pays] + ".";
        messageProchainJeu = "<input type=\"button\" onclick=\"debuterJeu()\" value=\"Prochain\"></input>";
        
        //affiche le bouton pour passer au prochain jeu
        boiteReponse.innerHTML = messageProchainJeu;
    }
    //si la réponse est incorrect, on va au prochain indice en utilisant le tableau d'indices
    else {
        //va au prochain indice
        indice++;

        //ajoute le prochain indice au indices sur la page
        messageIndices = messageIndices + "<br><b>Indice " + (indice + 1) + ":</b> " + tblIndices[pays][indice];
        
        //ajoute "incorrect" au message si s'est le 2e indice (indice au index 1)
        if (indice == 1) {
            messageIndices = "Incorrect.<br>" + messageIndices;
        }
    }

    //affiche le message défini auparavant
    boiteAffiche.innerHTML = "<p>" + messageIndices + "</p>";
}