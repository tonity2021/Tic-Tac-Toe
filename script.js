//do Readme
//add a draw to game
//reset game after a win
// const gameBoard = [" ", " ", " ", " ", " ", " ", " ", " ", " "];
//keeps track of current player
const gameResults = document.querySelector("#game-results");
//clears the cells and resets the game board
const resetGameButton = document.querySelector(".reset-game-button");

//set the clear board and win game status to false while game is being played
let clearsGameBoard = false;
let winsGameStatus = false;
endCurrentGame = false;

//start with player one
const playerOne = "X";
const playerTwo = "O";
// const currentPlayer = "";

//wnning player combinations
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

//turn HTML array-like node list into an array
let cells = Array.from(document.querySelectorAll(".cell"));

//player turns
const playerTurn = () => {
  let playerOneTurn = true;
  let playerTwoTurn = false;
  for (let i = 0; i < cells.length; i++) {
    cells[i].addEventListener("click", () => {
      if (cells[i].innerText === "" && playerOneTurn === true) {
        cells[i].innerText = playerOne;
        playerTwoTurn = true;
        playerOneTurn = false;
      } if (cells[i].innerText === "" && playerTwoTurn === true) {
        cells[i].innerText = playerTwo;
        playerTwoTurn = false;
        playerOneTurn = true;
        wonGame();
        clearBoard ();
        endGame();
      }
    });
  }
};
playerTurn();

const wonGame = () => {
  for (let i = 0; i < cells.length; i++) {
    cells[i].addEventListener("click", () => {
      if (
        cells[0].innerText === playerOne &&
        cells[1].innerText === playerOne &&
        cells[2].innerText === playerOne
      ) {
        gameResults.innerHTML = "player 1 won";

       } else if (
          cells[0].innerText === playerTwo &&
          cells[1].innerText === playerTwo &&
          cells[2].innerText === playerTwo
        ) {
        gameResults.innerHTML = "player 2 won";
        endGame();
           winsGameStatus = true;         
      }
    });
  }
};

// clear board function
const clearBoard = () => {
  resetGameButton.addEventListener("click", () => {
    cells.forEach(cell => cell.innerText = " ");
    gameResults.innerHTML = "";
    clearsGameBoard = true;
  });
};

//ends a winning game or draw
const endGame = () => {
  if(wonGame()) {
  cells.forEach(cell => cell.innerText = " ");
  }
}