let div1 = document.getElementById('div-base1')
let div2 = document.getElementById('div-base2')
let div3 = document.getElementById('div-base3')
let div4 = document.getElementById('div-base4')
let div5 = document.getElementById('div-base5')
let div6 = document.getElementById('div-base6')
let div7 = document.getElementById('div-base7')

let exo1 = document.getElementById('exo-1')
let exo2 = document.getElementById('exo-2')
let exo3 = document.getElementById('exo-3')
let exo4 = document.getElementById('exo-4')
let exo5 = document.getElementById('exo-5')
let exo6 = document.getElementById('exo-6')
let exo7 = document.getElementById('exo-7')

let maFunction = (change, no1, no2, no3, no4, no5, no6) => {
    switch (change) {
        case div1:
            change.classList = "w-75 exo1"
            break
        case div2:
            change.classList = "w-75 exo2"
            break
        case div3:
            change.classList = "w-75 exo3"
            break
        case div4:
            change.classList = "w-75 exo4"
            break
        case div5:
            change.classList = "w-75 exo5"
            break
        case div6:
            change.classList = "w-75 exo6"
            break
        case div7:
            change.classList = "w-75 exo7"
            break
        default:
            break
    }
    no1.classList = "d-none"
    no2.classList = "d-none"
    no3.classList = "d-none"
    no4.classList = "d-none"
    no5.classList = "d-none"
    no6.classList = "d-none"

}

// Les variables avec le contenu du HTML
let h2_div1 = document.getElementById('titre')


let bt_exo1 = () => {
    maFunction(div1, div2, div3, div4, div5, div6, div7)
    h2_div1.innerHTML = 'Le titre modifie'
    h2_div1.style.color = "yellow"
    h2_div1.classList.add('bg-danger')
}

let bt_exo2 = () => {
    maFunction(div2, div1, div3, div4, div5, div6, div7)
}

let bt_exo3 = () => {
    maFunction(div3, div1, div2, div4, div5, div6, div7)
}

let bt_exo4 = () => {
    maFunction(div4, div1, div2, div3, div5, div6, div7)
}

let bt_exo5 = () => {
    maFunction(div5, div1, div2, div3, div4, div6, div7)
}

let bt_exo6 = () => {
    maFunction(div6, div1, div2, div3, div4, div5, div7)
}

let bt_exo7 = () => {
    maFunction(div7, div1, div2, div3, div4, div5, div6)
}

exo1.addEventListener('click', bt_exo1)
exo2.addEventListener('click', bt_exo2)
exo3.addEventListener('click', bt_exo3)
exo4.addEventListener('click', bt_exo4)
exo5.addEventListener('click', bt_exo5)
exo6.addEventListener('click', bt_exo6)
exo7.addEventListener('click', bt_exo7)