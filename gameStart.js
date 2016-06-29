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
console.log("|"+gameBoard[0]"|"+gameBoard[1]"|"+gameBoard[2]"|");
console.log("|"+gameBoard[3]"|"+gameBoard[4]"|"+gameBoard[5]"|");
console.log("|"+gameBoard[6]"|"+gameBoard[7]"|"+gameBoard[8]"|");

var gameBoard = [turn1,turn2,turn3,turn4,turn5,turn6,turn7,turn8,turn9]

/*  //This is the part I can't figure out?
if(gameIsWonWithX === true) {
  stop game
  console.log("Great job Player 1!")
}
else if(gameIsWonWithO === true){
  stop game
  console.log("Great job Player 2!")
}
else {
  stop game
  console.log("It was a tie!")
}
*/
