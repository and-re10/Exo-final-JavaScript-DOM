// Exo 4
let div_rtg1 = document.getElementById('rtg-1-ex4')
let div_rtg2 = document.getElementById('rtg-2-ex4')
div_rtg1.classList.add('rtg1-ex4')
div_rtg2.classList.add('rtg2-ex4')

let div_block_1 = document.getElementById('block_1')
div_block_1.classList = ("box-exo4 m-0")

let div_block_2 = document.getElementById('block_2')
div_block_2.classList = ("d-none")

let bt_change = document.getElementById('bt-change-exo4') 

let changement;
let nbClick = document.getElementById('nbClick-exo4')


changement = (block1, block2, nbClick) => {
    
    if (block1.classList == "d-none") {
        block2.classList = 'd-none'
        block1.classList = 'box-exo4 m-0'
    }
    else {
        block2.classList = 'box-exo4 m-0'
        block1.classList = 'd-none'
    }
    nbClick.innerHTML ++
}
bt_change.addEventListener('click', () => changement(div_block_1, div_block_2, nbClick))