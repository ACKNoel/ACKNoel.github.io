//DÉCLARATION DES VARIABLES:

//tableau qui contient les pays possibles
let tblPays = [
"Canada",
"France",
"Russie",
"Mexique",
"Japon"
];

//tableau à 2 dimensions avec toutes les indices dans le même ordre que les pays
let tblIndices = [
    //Canada:
    ["Ho ho ho! Je suis dans un pays avec la plus grande bordure de la mer!", "Il y a plus de lacs dans ce pays que dans tous les autres pays combinés.", "Je suis dans un pays bilingue!", "Ho ho ho! Je me retrouve dans un très grand pays au nord!", "<img src=\"image/Canada.png\" width=\"30%\"/>"],
    //France:
    ["Ho ho ho! Je suis dans un pays qui est donné le pseudo-nom “l\’Hexagone” à cause de sa forme!", "Wow! Ce pays a beaucoup de plaines très belles au nord et des jolies montagnes à l\’est et au sud.", "Il y a tellement d\’autres visiteurs ici! En fait, ce pays est le plus visité mondialement!", "La culture ici est centrée sur la nourriture, les arts et la mode!", "<img src=\"image/France.png\" width=\"30%\"/>"],
    //Russie:
    ["Ho ho ho! Le pays où je me retrouve a le plus de forêts dans le monde!", "Hm, les lettres d\’ici semblent être de l\’alphabet cyrillique!", "Le pays où je suis se retrouve sur 2 continents!", "Ce pays est tellement gros, et il fait aussi très froid ici!", "<img src=\"image/Russie.png\" width=\"30%\"/>"],
    //Mexique:
    ["Ho ho ho! Je visite un pays avec la plus grande pyramide en termes de volume!", "Je suis dans un pays où vivaient des grandes civilisations anciennes!", "Wow, c\’est ici où le chocolat est originaire.", "Il y a tellement de festivals animés et colorés avec de la bonne nourriture et musique dans ce pays!", "<img src=\"image/Mexique.png\" width=\"30%\"/>"],
    //Japon:
    ["Ho ho ho! Je suis dans le pays avec le pourcentage le plus élevé de tsunamis au monde.", "Ho ho ho! Les traditions ici sont une combinaison de shintō et bouddhisme.", "Les gens dans ce pays ont une des espérances de vie la plus élevée mondialement!", "Ce pays est connu comme étant très futuriste mais aussi traditionnel en même temps!", "<img src=\"image/Japon.png\" width=\"30%\"/>"],
];

//variables principaux
let pays = Math.floor(Math.random() * (tblPays.length));
let indice = 0;
let score = 0;
let nom = localStorage.getItem("nomUtilisateur");
let paysDevine = 0;

let boiteAffiche = document.getElementById("divIndice");
let boiteReponse = document.getElementById("divReponse");
let boiteNomUtilisateur = document.getElementById("boiteNom");
let boiteScore = document.getElementById("boiteScore");

let messageIndices;
let messageNom = "<p><b>NOM:</b> " + nom + "</p>";
let messageScore;
let messageRepondre = "<label for=\"txtReponse\">Réponse:</label>\
                       <input type=\"text\" id=\"txtReponse\">\
                       <input type=\"button\" id=\"btnSoumet\" onclick=\"correcteur()\"  value=\"Vérifier\"></input>";

//CODE PRINCIPAL:

localStorage.setItem("score", 0);

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
        
        paysDevine++;
        
        //ajoute au score dépendant sur le nombre d'indices utilisés
        score = score + (100 - indice*20);

        //store le nouveau score
        localStorage.setItem("score", score);

        //crée le text et un bouton à afficher sur la page
        messageScore = "<p><b>SCORE:</b> " + score;
        messageIndices = "Vous avez réussi!<br><br>Le pays était " + tblPays[pays] + ".";
        
        if (paysDevine == 5) {
            messageProchainJeu = "<input type=\"button\" id=\"btnSoumet\" onclick=\"location.href = 'scorefinal.html'\" value=\"Fin\"></input>";
        }
        else {
            messageProchainJeu = "<input type=\"button\" id=\"btnSoumet\" onclick=\"debuterJeu()\" value=\"Prochain\"></input>";
        }

        tblPays.splice(pays, 1);
        tblIndices.splice(pays, 1);

        //affiche le score et le bouton pour passer au prochain jeu
        boiteReponse.innerHTML = messageProchainJeu;
        boiteScore.innerHTML = messageScore;
    }
    //s'il n'y a plus d'indices, recommencer le jeu
    else if (indice == 4) {
        paysDevine++;

        //crée le text et un bouton à afficher sur la page
        messageIndices = "Vous avez failli. <br><br>Le pays était " + tblPays[pays] + ".";
        
        if (paysDevine == 5) {
            messageProchainJeu = "<input type=\"button\" id=\"btnSoumet\" onclick=\"location.href = 'scorefinal.html'\" value=\"Fin\"></input>";
        }
        else {
            messageProchainJeu = "<input type=\"button\" id=\"btnSoumet\" onclick=\"debuterJeu()\" value=\"Prochain\"></input>";
        }

        tblPays.splice(pays, 1);
        tblIndices.splice(pays, 1);

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

        boiteReponse.innerHTML = messageRepondre;
    }

    //affiche le message défini auparavant
    boiteAffiche.innerHTML = "<p>" + messageIndices + "</p>";
}