/*-------------------------------- Constants --------------------------------*/
const players = {
    '1' : {
      letter: 'X'
},
'-1' : {
      letter: 'O'
    }
}
/*---------------------------- Variables (state) ----------------------------*/
let board = null
let turn = null
let winner = null
console.log(winner)
console.log(winner)
/*------------------------ Cached Element References ------------------------*/
const squareEls = document.querySelector('.board')
const messageEl = document.getElementById('messages')
console.log(board)
console.log(messageEl)


/*----------------------------- Event Listeners -----------------------------*/
//ternery style ex for later(?): evt.target.style.color === 'black' ? 'lime' : 'black'


/*-------------------------------- Functions --------------------------------*/
function init() {
    board = [null, null, null, null, null, null, null, null, null]
    turn = 1
    winner = null
}

init()
