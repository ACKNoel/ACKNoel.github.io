//Auteur: Angéline, Corie, Kaitlyn

//DÉCLARATION DES VARIABLES:

const invalide = document.getElementById("popupRetry")

//FONCTIONS:

//fonction qui fait apparaitre le popup
function ouvrirPopup() {
    invalide.style.display = "flex";
}

//fonction qui cache le popup quand un bouton est cliqué
fermerPopup.onclick = function() {
    invalide.style.display = 'none';
}

//fonction qui cherche le nom d'utilisateur inscrit
function chercheNomUtilisateur() {
    //cherche le nom d'utilisateur entré
    let entreeNom = document.getElementById("nomUtilisateur").value;

    //si le nom est trop court, afficher un erreur
    if (entreeNom.length <= 1){
        ouvrirPopup();
        entreeNom = document.getElementById("nomUtilisateur").value;
    }
    //sinon, envoyer le joueur au page principal
    else {
        localStorage.setItem("nomUtilisateur", entreeNom);
        location.href = "trouveperenoel.html";
    }
}