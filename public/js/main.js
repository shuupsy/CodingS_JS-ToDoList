// Bouton ajouter
let nouvelleTache = document.getElementById("ajout")

// Section liste
let liste = document.getElementById("liste")

// Tâche à faire
let tache = document.querySelector("input")

// Touche ENTER à la place d'appuyer sur le bouton 
tache.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        ajout()
    }
})


// AJOUT D'UNE LIGNE DE TACHE LORSQU ON APPUIE SUR LE BOUTON AJOUTER
function ajout() {
    // Batch création
    let ligne = document.createElement("div")

    let texte = document.createElement("p")
    let icones = document.createElement("div")

    // let btn1 = document.createElement("button")
    // let btn2 = document.createElement("button")
    // let btn3 = document.createElement("button")

    let icone1 = document.createElement("i")
    let icone2 = document.createElement("i")
    let icone3 = document.createElement("i")

    // Appendchild
    icones.appendChild(icone1)
    icones.appendChild(icone2)
    icones.appendChild(icone3)

    // icones.appendChild(btn1)
    // icones.appendChild(btn2)
    // icones.appendChild(btn3)

    ligne.appendChild(texte)
    ligne.appendChild(icones)

    liste.appendChild(ligne)

    // Valeur du input donnée au nom de la tâche
    texte.innerHTML = tache.value;
    // Supprimer la valeur du input
    tache.value = ""

    // Attribuer les class CSS 
    ligne.setAttribute("class", "ligne")
    icones.setAttribute("class", "icones")
    icone1.setAttribute("class", "fa-solid fa-circle-check")
    icone2.setAttribute("class", "fa-solid fa-pen-to-square")
    icone3.setAttribute("class", "fa-solid fa-trash-can")
    console.log(liste)
}

// Function supprimer
// Addeventlisteners
liste.addEventListener("click", check)


function check(e) {
    let item = e.target
    let todo = item.parentElement;
    switch (item.classList[1]) {
        case "fa-trash-can":
            // Supprime la ligne
            todo.parentElement.remove();
            break;
        case "fa-circle-check" :
            // Change la bgcolor en vert
            todo.style.backgroundColor = "#28A745";
            break;
        case "fa-pen-to-square" :
            // Change la tâche en input
            let input = document.createElement("input")
            todo.previousSibling.replaceWith(input)
            // Changer l'icone en disquette
            item.setAttribute("class","fa-solid fa-floppy-disk")
            // Cacher les autres icônes
            item.previousSibling.style.visibility = "hidden"
            item.nextSibling.style.visibility = "hidden"
    }
    // if (item.classList[1] === "fa-trash-can") {
    //     let todo = item.parentElement.parentElement
    //     todo.remove()
    // } 
}