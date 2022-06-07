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
const messageEl = document.getElementById('messages')
const resetBtnEl = document.querySelector('#reset-button')

/*----------------------------- Event Listeners -----------------------------*/
//ternery style ex for later(?): evt.target.style.color === 'black' ? 'lime' : 'black'
// sq0.addEventListener('click', handleClick)
// sq1.addEventListener('click', handleClick)
// sq2.addEventListener('click', handleClick)
// sq3.addEventListener('click', handleClick)
// sq4.addEventListener('click', handleClick)
// sq5.addEventListener('click', handleClick)
// sq6.addEventListener('click', handleClick)
// sq7.addEventListener('click', handleClick)
// sq8.addEventListener('click', handleClick)

squareEls.forEach(function(squares) {
    squares.addEventListener('click', handleClick) 
})

resetBtnEl.addEventListener('click', function(){
    init()
})
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
    if(!square) {
        squareEls[Idx].textContent = ''
    }
})
        if (winner === null) {
    messageEl.textContent = `Player ${turn === 1 ? "X": "O"}'s turn!`
    } else if (winner === 'T') {
        messageEl.textContent = `It's a tie!`
    } else {
        messageEl.textContent = `Congrats! Player ${turn === 1 ? "O" : "X"} has won!`
    }
}

function handleClick(evt) {
    const sqIdx = parseInt(evt.target.id.substring(2))
    if(board[sqIdx] !== null || winner !== null) {
        return
    }

    board[sqIdx] = turn
    turn *= -1
    getWinner()
    render()
}

function getWinner() {
    winningCombos.forEach(function(winningCombos) {
        let sum = board[winningCombos[0]] + board[winningCombos[1]] + board[winningCombos[2]]
        if(Math.abs(sum) === 3) {
            winner = turn
        } 
        else if (board.includes(null) === false) {
            winner = "T"
        }
    })
}

