//FONCTIONS:

//fonction qui cherche le nom d'utilisateur inscrit
function chercheNomUtilisateur() {
    let entreeNom = document.getElementById("nomUtilisateur").value;

    localStorage.setItem("nomUtilisateur", entreeNom);
}