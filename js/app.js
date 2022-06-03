/*-------------------------------- Constants --------------------------------*/
const winningCombos = [
    [0,1,2], [3,4,5],
    [6,7,8], [1,4,7],
    [0,3,6], [0,4,8],
    [2,5,8], [2,4,6]

]
/*---------------------------- Variables (state) ----------------------------*/
let board, turn, winner
/*------------------------ Cached Element References ------------------------*/
const squareEls = document.querySelectorAll('.squares')
const boardEls = document.querySelectorAll('.board')
const messageEl = document.getElementById('messages')
console.log(messageEl.textContent)



/*----------------------------- Event Listeners -----------------------------*/
//ternery style ex for later(?): evt.target.style.color === 'black' ? 'lime' : 'black'
sq0.addEventListener('click', handleClick)
sq1.addEventListener('click', handleClick)
sq2.addEventListener('click', handleClick)
sq3.addEventListener('click', handleClick)
sq4.addEventListener('click', handleClick)
sq5.addEventListener('click', handleClick)
sq6.addEventListener('click', handleClick)
sq7.addEventListener('click', handleClick)
sq8.addEventListener('click', handleClick)
/*-------------------------------- Functions --------------------------------*/
init()

function init() {
    board = [null, null, null, null, null, null, null, null, null]
    turn = 1
    winner = null
    render() 
}


function render() {
    // console.log(board)
    board.forEach(function(square, Idx) {
        if(square === 1) {
            squareEls[Idx].textContent = 'X'
    }
        if (square === -1) {
    squareEls[Idx].textContent = 'O'
    }
    // console.log(squareEls[Idx])
})
        if (winner === null) {
    messageEl.textContent = `Player ${turn === 1 ? "X": "O"}'s turn!`
    } else if (winner === 'T') {
        messageEl.textContent = `It's a tie!`
    } else {
        messageEl.textContent = `Congrats! Player Player ${turn === 1 ? "O" : "X"} has won!`
    }
}

function handleClick(evt) {
    const sqIdx = parseInt(evt.target.id.substring(2))
    if(board[sqIdx] !== null || winner !== null) {
        return
    }

    board[sqIdx] = turn
    turn *= -1
//    getWinner()
   render()
}

function getWinner() {
    winningCombos.forEach(function(winningCombo) {
        
        // console.log(winningCombo)
        // console.log(board[winningCombo[0]])
        // console.log(board[winningCombo[1]])
    })
}
