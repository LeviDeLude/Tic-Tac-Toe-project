if (start.toLowerCase === "ok") { //Variables start and oops are on my prompts.js page.
  console.log("Great! Let's get started!");
}
if (oops.toLowerCase === "player 1" || oops.toLowerCase === "player1") {
  console.log("Player 1, you will be going first!");
}
else {
  console.log("Player 2, you get to start!");
}

//game board
var logGameBoard1 = ("|"+gameBoard[0]+"|"+gameBoard[1]+"|"+gameBoard[2]+"|");
var logGameBoard2 = ("|"+gameBoard[3]+"|"+gameBoard[4]+"|"+gameBoard[5]+"|");
var logGameBoard3 = ("|"+gameBoard[6]+"|"+gameBoard[7]+"|"+gameBoard[8]+"|");

var gameBoard = [" "," "," "," "," "," "," "," "," "]

while (!isGameOver()) {
  //run turn code
  //collect user input
  //check game state
}
