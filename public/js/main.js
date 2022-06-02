// Bouton ajouter
let newTache = document.getElementById("ajout")

// Section liste
let liste = document.getElementById("liste")

// Tâche à faire
let tache = document.querySelector("input")

// Touche ENTER
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

    let btn1 = document.createElement("button")
    let btn2 = document.createElement("button")
    let btn3 = document.createElement("button")

    let icone1 = document.createElement("i")
    let icone2 = document.createElement("i")
    let icone3 = document.createElement("i")

    // Appendchild
    btn1.appendChild(icone1)
    btn2.appendChild(icone2)
    btn3.appendChild(icone3)

    icones.appendChild(btn1)
    icones.appendChild(btn2)
    icones.appendChild(btn3)

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
}


let ligne = document.querySelectorAll(".ligne")
let check = document.querySelectorAll("button")
console.log(check)
console.log(ligne)

ligne.forEach(i => {
    i.addEventListener("click", () => {
        if (i.getAttribute("class") !== "done") {
            i.classList.add("done")
        } else {
            i.classList.remove("done")
        }
    })
})


