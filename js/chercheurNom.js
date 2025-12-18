//FONCTIONS:

const invalide = document.getElementById("popupRetry")
function ouvrirPopup() {
    invalide.style.display = "flex";
}

fermerPopup.onclick = function() {
    invalide.style.display = 'none'; // Cacher le popup
}

    
//fonction qui cherche le nom d'utilisateur inscrit
function chercheNomUtilisateur() {
    let entreeNom = document.getElementById("nomUtilisateur").value;
    if (entreeNom.length <= 1){
        ouvrirPopup();
        entreeNom = document.getElementById("nomUtilisateur").value;
    }
    else {
        location.href = "trouveperenoel.html";
        localStorage.setItem("nomUtilisateur", entreeNom);
    }
}