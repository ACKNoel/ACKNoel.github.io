//FONCTIONS:

//fonction qui cherche le nom d'utilisateur inscrit
function chercheNomUtilisateur() {
    let entreeNom = document.getElementById("nomUtilisateur").value;
    while (entreeNom.length == 0){
        alert("Nom d'utilisateur invalide. Réessayer.")
        entreeNom = document.getElementById("nomUtilisateur").value;
    }
    localStorage.setItem("nomUtilisateur", entreeNom);
       location.href = "trouveperenoel.html";
}