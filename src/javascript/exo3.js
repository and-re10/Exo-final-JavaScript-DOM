//Exo 3
let input_bt3 = document.getElementById('input-exo3')
let span_exo3 = document.getElementById('s-prenom')
let bt_go_exo3 = document.getElementById('bt_go_exo3')
let go 

go = () => {
    console.log("test");
    
    span_exo3.innerHTML = input_bt3.value
    input_bt3.value = ""
}
bt_go_exo3.addEventListener('click', go)