//DÉCLARATION DES VARIABLES:
let pays = Math.floor(Math.random() * (tblPays.length));
let indice = 0;
let score = 0;

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
    ["indice canada 1", "indice canada 2", "indice canada 3", "indice canada 4", "indice canada 5"]
    ["indice france 1", "indice france 2", "indice france 3", "indice france 4", "indice france 5"]
    ["indice russie 1", "indice russie 2", "indice russie 3", "indice russie 4", "indice russie 5"]
    ["indice mexique 1", "indice mexique 2", "indice mexique 3", "indice mexique 4", "indice mexique 5"]
    ["indice japon 1", "indice japon 2", "indice japon 3", "indice japon 4", "indice japon 5"]
    ["indice angleterre 1", "indice angleterre 2", "indice angleterre 3", "indice angleterre 4", "indice angleterre 5"]
    ["indice thailande 1", "indice thailande 2", "indice thailande 3", "indice thailande 4", "indice thailande 5"]
];

//FONCTIONS:

//Source: https://www.w3schools.com/js/js_random.asp
//fonction qui choisit un pays selon l'index du tableau de pays 
function pigePays() {
    pays = Math.floor(Math.random() * (tblPays.length));
}

//fonction qui prend une réponse de l'utilisateur et vérifie s'il est correct
//si la réponse est correct, on donne un montant de points selon le nombre d'indices utilisés
//si la réponse est incorrect, on va à la prochaine indice
function correcteur() {
    //déclaration des variables
    let message;
    let boiteAffiche = document.getElementById("divAffiche");
    let reponse = document.getElementById("reponse").value;

    //si la réponse est correct, on ajoute au score et recommence le jeu
    if (reponse.toLowerCase() == tblPays[pays].toLowerCase()) {
        score = score + (100 - indice*20);
        message = "Vous avez réussi!<br><br>Le pays était " + tblPays[pays] + ".";
        indice = 0;
    }
    //si la réponse est incorrect, on va au prochain indice en utilisant le tableau d'indices
    else {
        indice++;
        message = "Incorrect. Voici le prochain indice:<br>" + tblIndices[pays][indice];
    }

    //affiche le message défini auparavant
    boiteAffiche.innerHTML = message;
}