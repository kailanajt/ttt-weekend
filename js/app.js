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
let board = ['null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null']
let turn = [players[1], players[-1]]
let winner = ['Congratulations! Letter '+ players.letter + ' has won the round!', 'Looks like a tie! Nobody won... bummer.']
console.log(winner[0])
console.log(winner[1])


/*------------------------ Cached Element References ------------------------*/
const squareEls = document.querySelector('.squares')
const messageEl = 'awaiting play...'
console.log(messageEl)

function init() {
    return init
}
init()
console.log(init)

/*----------------------------- Event Listeners -----------------------------*/



/*-------------------------------- Functions --------------------------------*/

