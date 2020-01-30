//Exo 5
let div_exo5 = document.getElementById('div-img-exo5')
let ajout_img
let efface_last 
let efface_all

let bt_rajout = document.getElementById('bt-rajout-exo5')
let bt_ef_last = document.getElementById('bt-last-exo5')
let bt_ef_all = document.getElementById('bt-all-exo5')
let nb_img = document.getElementById('nb_img')

let div_2_img = document.createElement('div')
div_2_img.classList = 'row w-100 m-0 p-0'
let compt = 0

ajout_img = () => {
    div_exo5.appendChild(div_2_img)
    let img = document.createElement('img')
    img.src = "./images/pintainho.jpg"
    img.classList = 'col-1 m-0 p-0'
    div_2_img.appendChild(img)
    ++compt
    nb_img.innerHTML = compt
}
bt_rajout.addEventListener('click', ajout_img)

efface_last = () => {
    div_2_img.removeChild(div_2_img.lastChild)
    --compt
    nb_img.innerHTML = compt
}
bt_ef_last.addEventListener('click', efface_last)

efface_all = () => {
    for (let i = 0; i < compt; i++) {
        div_2_img.removeChild(div_2_img.lastChild)
    }
    compt = 0
    nb_img.innerHTML = compt
}
bt_ef_all.addEventListener('click', efface_all)