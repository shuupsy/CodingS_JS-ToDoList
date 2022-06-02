// Bouton ajouter
let newTache = document.getElementById("ajout")

// Section liste
let liste = document.getElementById("liste")

// Tâche à faire
let tache = document.querySelector("input")

newTache.addEventListener("click", function() {
    let ligne = document.createElement("div")
    liste.appendChild(ligne)
    ligne.innerHTML = tache.value;
    // Supprimer la valeur du input
    tache.value = ""

    ligne.setAttribute("class", "ligne")

})