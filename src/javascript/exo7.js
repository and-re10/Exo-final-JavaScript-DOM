//Recherche list
let div_exo7 = document.getElementById('div-base7')
let reponse = document.getElementById(`error`)
let prenoms = document.getElementById('noms')
let del = document.getElementById('del')

//Creer 3 div avec les trois caracteristiques differentes
//1° -> toutes les liste; 2° -> listes non finis; 3° -> listes finis
let listTotal = document.getElementById('div-list-tout')
let listNonFini = document.getElementById('div-list-aFaire')
let listFini = document.getElementById('div-list-fini')

// boutons
let btToutes_7 = document.getElementById('full-list')
let btFini_7 = document.getElementById('fini')
let btNonFini_7 = document.getElementById('aFaire')

let creer = () => {
    if (prenoms.value != "") {

        //partie de style
        prenoms.classList.remove("error")
        reponse.classList.remove("error1")
        reponse.innerHTML = ""

        //partie de creation dans le html
        //cretion de la div avecun checkbox, un span et un button comme contenu
        let listNom1 = document.createElement('div')
        let listNom2 = document.createElement('div')
        //listNom.setAttribute('id', `div-${prenoms.value}`)
        listNom1.style.backgroundColor = 'blue'
        listNom2.style.backgroundColor = 'blue'
        listTotal.appendChild(listNom1)
        listNonFini.appendChild(listNom2)
        listNom1.classList = 'w-100 my-2 mx-0 d-flex justify-content-between'
        listNom2.classList = 'w-100 my-2 mx-0 d-flex justify-content-between'

        //Creation d'un input checkbox
        let checkbox1 = document.createElement('input')
        let checkbox2 = document.createElement('input')
        checkbox1.type = 'checkbox'
        checkbox2.type = 'checkbox'
        checkbox1.checked = checkbox2.checked = false
        checkbox1.classList = "m-2"
        checkbox2.classList = "m-2"
        listNom1.appendChild(checkbox1)
        listNom2.appendChild(checkbox2)

        //Creation du contenu de la tache
        let span1 = document.createElement("span");
        let span2 = document.createElement("span");
        span1.innerHTML = prenoms.value
        span2.innerHTML = prenoms.value
        //span.setAttribute('id', `bt-${prenoms.value}`)
        span1.classList = 'mt-1'
        span2.classList = 'mt-1'
        span1.style.color = 'white'
        span2.style.color = 'white'
        span1.style.fontWeight = 'bolder'
        span2.style.fontWeight = 'bolder'
        listNom1.appendChild(span1)
        listNom2.appendChild(span2)

        //Creation du bouton pour suprimer la tache
        let remove1 = document.createElement('button')
        let remove2 = document.createElement('button')
        remove1.innerHTML = 'X'
        remove2.innerHTML = 'X'
        listNom1.appendChild(remove1)
        listNom2.appendChild(remove2)
        remove1.addEventListener("click", () => {
            listNom1.remove(/*listNom.lastChild*/)
            listNom2.remove(/*listNom.lastChild*/)
        })
        remove2.addEventListener("click", () => {
            listNom2.remove(/*listNom.lastChild*/)
            listNom1.remove(/*listNom.lastChild*/)
        })

        let changeList = (lTrue, ls, cb, sp, rm) => {
            lTrue.appendChild(ls)
            ls.appendChild(cb)
            ls.appendChild(sp)
            ls.appendChild(rm)
        }

        checkbox1.addEventListener('click', () => {
            if(checkbox1.checked === true) {
                checkbox2.checked = true
                listNom1.style.backgroundColor = 'green'
                listNom2.style.backgroundColor = 'green'
                changeList(listFini, listNom2, checkbox2, span2, remove2)
            }
            else if (checkbox1.checked === false) {
                checkbox2.checked = false
                listNom1.style.backgroundColor = 'blue'
                listNom2.style.backgroundColor = 'blue'
                changeList(listNonFini, listNom2, checkbox2, span2, remove2)
            }
        })

        checkbox2.addEventListener('click', () => {
            if(checkbox2.checked === true) {
                checkbox1.checked = true
                listNom1.style.backgroundColor = 'green'
                listNom2.style.backgroundColor = 'green'
                changeList(listFini, listNom2, checkbox2, span2, remove2)
            }
            else if (checkbox.checked === false) {
                checkbox1.checked = false
                listNom1.style.backgroundColor = 'blue'
                listNom2.style.backgroundColor = 'blue'
                changeList(listNonFini, listNom2, checkbox2, span2, remove2)
            }
        })
    
        // Btn qui pour afficher toutes les listes
        let full_lists = () => {
            listTotal.classList = "w-100 row justify-content-between my-2 mx-0"
            listNonFini.classList = "d-none"
            listFini.classList = "d-none"
            //changeList(listTotal, listNom, checkbox, span, remove)

        }

        btToutes_7.addEventListener("click", full_lists)

        // Btn qui pour afficher les listes terminees
        let list_fini = () => {
            listTotal.classList = "d-none"
            listNonFini.classList = "d-none"
            listFini.classList = "w-100 row justify-content-between my-2 mx-0"
            console.log('salut')
        }
        
        btFini_7.addEventListener('click', list_fini)

        // Btn qui pour afficher les listes non termineers
        let list_nonFini = () => {
            listTotal.classList = "d-none"
            listNonFini.classList = "w-100 row justify-content-between my-2 mx-0"
            listFini.classList = "d-none"

        }
        
        btNonFini_7.addEventListener('click', list_nonFini)
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
