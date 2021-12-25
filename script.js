//TTT game board
const gameBoard = [" ", " ", " ", " ", " ", " "," ", " ", " ",];
const startGame = document.querySelector(".start-game-button");
currentPlayer = "X";


//start a new game
startGame.addEventListener("click", (e) => {
    console.log("clicked!");
    e.preventDefault;
    // newGame();
});

//winning game combinations
winningGameCombos = () => {
if (gameBoard[0] === "X" && gameBoard[1] === "X" && gameBoard[2] === "X"){
} else {
    (gameBoard[0] === "Y" && gameBoard[1] === "Y" && gameBoard[2] === "Y")
        }
};