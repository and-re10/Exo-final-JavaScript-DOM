// Exo 6
//Niveau 1 
let nb1 = document.getElementById('nb_1_exo6')
let nb2 = document.getElementById('nb_2_exo6')
let sel = document.getElementById('sel-exo6')
let egal = document.getElementById('egal')
let resultat = document.getElementById('resultat')

let niveau1

//niveau 2
let i = false;
let reponse_n2 = document.getElementById('rep-n2-exo6')
let bt_egal = document.getElementById('')
let valeur
let reset
let calcule
let resultatTotal

//Niveau 1
niveau1 = () => {
    switch (sel.value) {
        case '+':
            resultat.innerHTML = parseFloat(nb1.value) + parseFloat(nb2.value)
            break
        case '-':
            resultat.innerHTML = parseFloat(nb1.value) - parseFloat(nb2.value)
            break
        case '*':
            resultat.innerHTML = parseFloat(nb1.value) * parseFloat(nb2.value)
            break
        case '/':
            resultat.innerHTML = parseFloat(nb1.value) / parseFloat(nb2.value)
            break
    }
}
egal.addEventListener('click', niveau1)

//Niveau 2
window.valeur = (num) => {
    if(i === true){
        reponse_n2.value = "";
    }
    reponse_n2.value += num;
    i = false;
}

window.reset = () => {
    // codigo para limpar o visor
    reponse_n2.value = " ";
}

window.calcule = (num) => {
    // codigo para calcular o visor
    // pegar o valor do visor como variavel
    // fazer o calculo: eval
    // pegar o resultado e colocar no visor 
    //resultado = eval ("254 + 257");
    resultatTotal = eval(reponse_n2.value)
    reponse_n2.value = resultatTotal;
    i = true

}