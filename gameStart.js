if (start.toLowerCase === "ok") { //Variables start and oops are on my prompts.js page.
  console.log("Great! Let's get started!");
}
if (oops.toLowerCase === "player 1" || oops.toLowerCase === "player1") {
  console.log("Player 1, you will be going first!");
}
else {
  console.log("Player 2, you get to start!");
}

var space1 = " ";
var space2 = " ";
var space3 = " ";
var space4 = " ";
var space5 = " ";
var space6 = " ";
var space7 = " ";
var space8 = " ";
var space9 = " ";

//game board
console.log("|"+space1"|"+space2"|"+space3"|");
console.log("|"+space4"|"+space5"|"+space6"|");
console.log("|"+space7"|"+space8"|"+space9"|");

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
