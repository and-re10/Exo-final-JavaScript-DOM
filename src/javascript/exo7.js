//Recherche list
let div_exo7 = document.getElementById('div-base7')
let reponse = document.getElementById(`error`)
let prenoms = document.getElementById('noms')
let del = document.getElementById('del')

//Creer 3 div avec les trois caracteristiques differentes
//1° -> toutes les liste; 2° -> listes non finis; 3° -> listes finis
let list = document.createElement('div')
list.setAttribute('id', `list`)
div_exo7.appendChild(list)

// boutons
let btToutes = document.getElementById(`full-list`)
let btFini = document.getElementById('fini')
let btNonFini = document.getElementById('aFaire')

let creer = () => {
    if (prenoms.value != "") {
        //partie de style
        prenoms.classList.remove("error")
        reponse.classList.remove("error1")
        reponse.innerHTML = ""
        //partie de creation dans le html
        //cretion de la div avecun checkbox, un span et un button comme contenu
        let listNom = document.createElement('div')
        listNom.setAttribute('id', `div-${prenoms.value}`)
        list.appendChild(listNom)
        listNom.classList = 'w-100 my-2 mx-0 d-flex justify-content-between'
        //Creation d'un input checkbox
        let checkbox = document.createElement('input')
        checkbox.type = 'checkbox'
        listNom.appendChild(checkbox)
        //Creation du contenu de la tache
        let span = document.createElement("span");
        span.innerHTML = prenoms.value
        span.setAttribute('id', `bt-${prenoms.value}`)
        listNom.appendChild(span)
        //Creation du bouton pour suprimer la tache
        let remove = document.createElement('button')
        remove.innerHTML = 'X'
        listNom.appendChild(remove)
        remove.addEventListener("click", () => listNom.remove(/*listNom.lastChild*/))
    }
    else {
        reponse.style.color = "red"
        reponse.innerHTML = "ERROR"
        prenoms.classList = "error"
        reponse.classList = "error1"
    }
    prenoms.value = ""
} 

prenoms.addEventListener("keypress", function(event) {
    if (event.keyCode == 13) {
        creer()
    }
})

let list_fini = () => {

}

btFini.addEventListener('click', list_fini)

let list_nonFini = () => {

}

btNonFini.addEventListener('click', list_nonFini)

let full_lists = () => {

}

btToutes.addEventListener("click", full_lists)

//criar uma condicao para verificar se a checkbox esta selecionada ou nao 
