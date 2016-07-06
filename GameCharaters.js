var prompt = require('readline-sync');

console.log("The game board will be lined up in a way such as this,");
console.log("|1|2|3|");
console.log("|4|5|6|");
console.log("|7|8|9|");
console.log("Remember this order because this will be how the game is played.");

var turn1 = prompt.question("Player 1, which space would you like to go in first?")
console.log(logGameBoard1);
console.log(logGameBoard2);
console.log(logGameBoard3);
var turn2 = prompt.question("Player 2, which space would you like to go in?")
console.log(logGameBoard1);
console.log(logGameBoard2);
console.log(logGameBoard3);
var turn3 = prompt.question("Player 1, which space would you like to go in?")
console.log(logGameBoard1);
console.log(logGameBoard2);
console.log(logGameBoard3);
var turn4 = prompt.question("Player 2, which space would you like to go in?")
console.log(logGameBoard1);
console.log(logGameBoard2);
console.log(logGameBoard3);
var turn5 = prompt.question("Player 1, which space would you like to go in?")
console.log(logGameBoard1);
console.log(logGameBoard2);
console.log(logGameBoard3);
var turn6 = prompt.question("Player 2, which space would you like to go in?")
console.log(logGameBoard1);
console.log(logGameBoard2);
console.log(logGameBoard3);
var turn7 = prompt.question("Player 1, which space would you like to go in?")
console.log(logGameBoard1);
console.log(logGameBoard2);
console.log(logGameBoard3);
var turn8 = prompt.question("Player 2, which space would you like to go in?")
console.log(logGameBoard1);
console.log(logGameBoard2);
console.log(logGameBoard3);
var turn9 = prompt.question("Player 1, which space would you like to go in?")
console.log(logGameBoard1);
console.log(logGameBoard2);
console.log(logGameBoard3);

if (isGameOver === false) {
  console.log("It was a tie!");
  var playAgainTie = prompt.question("Do you want to play again?")
  if (playAgainTie.toLowerCase === "yes") {
    //run prompts.js
    //reset code
  }
  else {
    //end game
  }
}
