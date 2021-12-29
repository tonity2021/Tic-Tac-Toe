//do Readme
//add a draw to game?
//reset game after a win

//reveals the winner
const gameResults = document.querySelector("#game-results");
//clears the cells and resets the game board
const resetGameButton = document.querySelector(".reset-game-button");

//set the clear board and win game status to false while game is being played
let clearsGameBoard = false;
let winsGameStatus = false;
endCurrentGame = false;

const playerOne = "X";
const playerTwo = "O";

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
      }
      if (cells[i].innerText === "" && playerTwoTurn === true) {
        cells[i].innerText = playerTwo;
        playerTwoTurn = false;
        playerOneTurn = true;
        wonGame();
        wonGame2();
        clearBoard();
        // endGame();
      }
    });
  }
};
playerTurn();


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

// won game
// winningCombos[0] =
//horizontal: 0 1 2/ 3 4 5
//down: 0 3 6/1 4 7/ 
//diagonal: 2 4 6
// 

//put combos below in wonGame 2 function
// need 6 7 8 last row
//need 0 4 8 diagonal
// need 2 5 8 down

const wonGame = () => {
  for (let i = 0; i < cells.length; i++) {
    for (let i = 0; i < winningCombos.length; i++) {

      cells[i].addEventListener("click", () => {

        const playerComboWins = winningCombos[0];

        if (playerComboWins
          && cells[0].innerText === playerOne &&
          cells[1].innerText === playerOne &&
          cells[2].innerText === playerOne ||

          playerComboWins && cells[3].innerText === playerOne &&
          cells[4].innerText === playerOne &&
          cells[5].innerText === playerOne ||

          playerComboWins && cells[0].innerText === playerOne &&
          cells[3].innerText === playerOne &&
          cells[6].innerText === playerOne

          ||
          playerComboWins && cells[1].innerText === playerOne &&
          cells[4].innerText === playerOne &&
          cells[7].innerText === playerOne
          ||
          playerComboWins && cells[2].innerText === playerOne &&
          cells[4].innerText === playerOne &&
          cells[6].innerText === playerOne) {
          gameResults.innerHTML = "player 1 won";

        } if (playerComboWins
          && cells[0].innerText === playerTwo &&
          cells[1].innerText === playerTwo &&
          cells[2].innerText === playerTwo ||

          playerComboWins && cells[3].innerText === playerTwo &&
          cells[4].innerText === playerTwo &&
          cells[5].innerText === playerTwo ||

          playerComboWins && cells[0].innerText === playerTwo &&
          cells[3].innerText === playerTwo &&
          cells[6].innerText === playerTwo

          ||
          playerComboWins && cells[1].innerText === playerTwo &&
          cells[4].innerText === playerTwo &&
          cells[7].innerText === playerTwo
          ||
          playerComboWins && cells[2].innerText === playerTwo &&
          cells[4].innerText === playerTwo &&
          cells[6].innerText === playerTwo) {

          gameResults.innerHTML = "player 2 won";
          winsGameStatus = true;
        }
        if (!playerComboWins) {
          gameResults.innerHTML = "draw";
        }
      });
    }
  }
};



const wonGame2 = () => {
  for (let i = 0; i < cells.length; i++) {
    cells[i].addEventListener("click", () => {
      if (
        cells[0].innerText === playerOne &&
        cells[4].innerText === playerOne &&
        cells[8].innerText === playerOne
        ||
        cells[6].innerText === playerOne &&
        cells[7].innerText === playerOne &&
        cells[8].innerText === playerOne
        ||
        cells[2].innerText === playerOne &&
        cells[5].innerText === playerOne &&
        cells[8].innerText === playerOne
      ) {
        gameResults.innerHTML = "player 1 won";

      } else if (
        cells[0].innerText === playerTwo &&
        cells[4].innerText === playerTwo &&
        cells[8].innerText === playerTwo
        ||

        cells[6].innerText === playerTwo &&
        cells[7].innerText === playerTwo &&
        cells[8].innerText === playerTwo
        ||
        cells[2].innerText === playerTwo &&
        cells[5].innerText === playerTwo &&
        cells[8].innerText === playerTwo
      ) {
        gameResults.innerHTML = "player 2 won";
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
  if (wonGame()) {
    cells.forEach(cell => cell.innerText = " ");

  }
};
