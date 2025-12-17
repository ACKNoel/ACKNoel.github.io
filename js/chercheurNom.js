//FONCTIONS:

//fonction qui cherche le nom d'utilisateur inscrit
function chercheNomUtilisateur() {
    let entreeNom = document.getElementById("nomUtilisateur").value;
    while (entreeNom.length == 0){
        let invalide = 
        invalide.innerHTML = <div id="popupAide" class="popup-overlay">
                            <div class="popup-contenu">
                                <h2>Trouve le Père Noël</h2>
                                <button id="fermerPopupBtn" class="buttonStyle">Fermer</button>
                            </div>
                        </div>
        alert("Nom d'utilisateur invalide. Réessayer.")
        location.href = "index.html"
        entreeNom = document.getElementById("nomUtilisateur").value;
    }
    localStorage.setItem("nomUtilisateur", entreeNom);
       location.href = "trouveperenoel.html";
}