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
    console.log("Nouvelle tâche créee!")
}

// Function delete + done
liste.addEventListener("click", check)

function check(e) {
    let item = e.target
    let todo = item.parentElement
    let todoParent = item.parentElement.parentElement

    switch (item.classList[1]) {
        case "fa-trash-can":
            // Supprime la ligne
            todoParent.remove();
            break;
        case "fa-circle-check":
            // Change la bgcolor en vert
            todoParent.classList.toggle("done")
            break;
        case "fa-pen-to-square":
            // Change la tâche en input
            let input = document.createElement("input")
            todo.previousSibling.replaceWith(input)
            // Changer l'icone en disquette
            item.setAttribute("class", "fa-solid fa-floppy-disk");
        case "fa-floppy-disk":
            item.previousSibling.style.display = "none"
            item.nextSibling.style.display = "none"
    }
    item.addEventListener("click", () => {
        item.previousSibling.style.display = "block"
        item.nextSibling.style.display = "block"
    })
}

// Filtrer la liste
let current = document.getElementById("current")
let done = document.getElementById("done")
let all = document.getElementById("all")

// Tâches finies
done.addEventListener("click", () => {
    let items = document.querySelectorAll(".ligne")
    items.forEach(s => {
        s.style.display = "none"
        if (s.classList.contains('done')) {
            s.style.display = "flex"
        }
    })
})

// Tâches à faire
current.addEventListener("click", () => {
    let items = document.querySelectorAll(".ligne")
    items.forEach(s => {
        s.style.display = "none"
        if (s.classList.contains('done') == false) {
            s.style.display = "flex"
        }
    })
})


// Toutes les tâches
all.addEventListener("click", () => {
    let items = document.querySelectorAll(".ligne")
    items.forEach(s => {
        s.style.display = "flex"
    })
})