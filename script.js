let currentPlayer = 'X';
let board = ['', '', '', '', '', '', '', '', ''];
let gameActive = true;

const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

function checkWinner() {
    for (const combination of winningCombinations) {
        const [a, b, c] = combination;
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            gameActive = false;
            return board[a];
        }
    }

    if (!board.includes('')) {
        gameActive = false;
        return 'Draw';
    }

    return null;
}

function makeMove(cellIndex) {
    if (!gameActive || board[cellIndex] !== '') return;

    board[cellIndex] = currentPlayer;
    document.getElementsByClassName('cell')[cellIndex].textContent = currentPlayer;

    const winner = checkWinner();
    if (winner) {
        document.getElementById('resultMessage').textContent = winner === 'Draw' ? "It's a Draw!" : `Player ${winner} wins!`;
        document.getElementById('resultScreen').style.display = 'flex';
    } else {
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        document.getElementById('message').textContent = `Player ${currentPlayer}'s turn`;
    }
}

function resetBoard() {
    board = ['', '', '', '', '', '', '', '', ''];
    currentPlayer = 'X';
    gameActive = true;

    const cells = document.getElementsByClassName('cell');
    for (const cell of cells) {
        cell.textContent = '';
    }

    document.getElementById('message').textContent = "Player X's turn";
    document.getElementById('resultScreen').style.display = 'none';
}

function playAgain() {
    resetBoard();
    document.getElementById('resultScreen').style.display = 'none';
}

resetBoard();
