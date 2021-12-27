//TTT game board
const gameBoard = [" ", " ", " ", " ", " ", " ", " ", " ", " "];

const startGame = document.querySelector(".start-game-button");
const currentPlayer = "X";

//make grid clickable
let cells = Array.from(document.querySelectorAll(".cell"));
for (let i = 0; i < cells.length; i++) {
    //add click function on all cells
    cells[i].addEventListener("click", function () {
        console.log("you clicked region number " + i);
        console.log(i);
    });
}

//winning array combinations
const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

//player turn method
// playerTurn = () => {

// playerTurn();

//valid move method
const validMove = () => {
    board.forEach((space) => {
        if (space === "") {
            // console.log("true");
            console.log(space);
        } else {
            // console.log("false");
        }
    });
};

validMove();



//start a new game method
startGame.addEventListener("click", (e) => {
    console.log("clicked!");
    e.preventDefault;
    // newGame();
});

//won game method
winningGameCombos = () => {
    if (gameBoard[0] === "X" && gameBoard[1] === "X" && gameBoard[2] === "X") {
        console.log("player X has won");
    } else if (
        gameBoard[0] === "Y" &&
        gameBoard[1] === "Y" &&
        gameBoard[2] === "Y"
    ) {
        console.log("player Y has won");
    } else {
        console.log("It's a draw");
    }
};
