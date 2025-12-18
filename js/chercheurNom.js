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
    while (entreeNom.length == 0){
        ouvrirPopup();
        location.href = "index.html";
        entreeNom = document.getElementById("nomUtilisateur").value;
    }
    localStorage.setItem("nomUtilisateur", entreeNom);
    location.href = "trouveperenoel.html";
}