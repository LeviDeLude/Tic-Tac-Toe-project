var prompt = require('readline-sync');

var player1 = prompt.question("Are you ready to play, Player 1?");
if (player1 === "yes"){
  console.log("Great! Let's wait for your oponent Player 1!");
}
else{
  console.log("That's fine! Come back when your ready.");
}

var player2 = prompt.question("Are you ready to play, Player 2?")
if (player2 === "yes") {
  console.log("Awesome! Let's get started player 2.");
}
else {
  console.log("Alright! Just come back when you want to play.");
}

var choice1 = prompt.question("Player 1, do you want to be X or O?")
if (choice1.toLowerCase === "x") {
  console.log("Great! You will go first")
}
else {
  console.log("Good choice, but Player 2 will be going first.");
}

var start = prompt.question("Type ok to start!");
var oops = prompt.question("Sorry I forgot, is player 1 going first or is player 2 to going first.")

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
    var gameBoard = [" "," "," "," "," "," "," "," "," "]
  }
  else {
    console.log("Thanks for playing!");
  }
}

//Turn 1.
if (turn1 === 1) {
  gameBoard[0] = "x" ;
}
if (turn1 === 2) {
  gameBoard[1] = "x";
}
if (turn1 === 3) {
  gameBoard[2] = "x";
}
if (turn1 === 4) {
  gameBoard[3] = "x";
}
if (turn1 === 5) {
  gameBoard[4] = "x";
}
if (turn1 === 6) {
  gameBoard[5] = "x";
}
if (turn1 === 7) {
  gameBoard[6] = "x";
}
if (turn1 === 8) {
  gameBoard[7] = "x";
}
if (turn1 === 9) {
  gameBoard[8] = "x";
}

//Turn 2
if (turn2 === 1) {
  gameBoard[0] = "o" ;
}
if (turn2 === 2) {
  gameBoard[1] = "o" ;
}
if (turn2 === 3) {
  gameBoard[2] = "o" ;
}
if (turn2 === 4) {
  gameBoard[3] = "o" ;
}
if (turn2 === 5) {
  gameBoard[4] = "o" ;
}
if (turn2 === 6) {
  gameBoard[5] = "o" ;
}
if (turn2 === 7) {
  gameBoard[6] = "o" ;
}
if (turn2 === 8) {
  gameBoard[7] = "o" ;
}
if (turn2 === 9) {
  gameBoard[8] = "o" ;
}

//Turn 3
if (turn3 === 1) {
  gameBoard[0] = "x" ;
}
if (turn3 === 2) {
  gameBoard[1] = "x";
}
if (turn3 === 3) {
  gameBoard[2] = "x";
}
if (turn3 === 4) {
  gameBoard[3] = "x";
}
if (turn3 === 5) {
  gameBoard[4] = "x";
}
if (turn3 === 6) {
  gameBoard[5] = "x";
}
if (turn3 === 7) {
  gameBoard[6] = "x";
}
if (turn3 === 8) {
  gameBoard[7] = "x";
}
if (turn3 === 9) {
  gameBoard[8] = "x";
}

//Turn 4
if (turn4 === 1) {
  gameBoard[0] = "o" ;
}
if (turn4 === 2) {
  gameBoard[1] = "o" ;
}
if (turn4 === 3) {
  gameBoard[2] = "o" ;
}
if (turn4 === 4) {
  gameBoard[3] = "o" ;
}
if (turn4 === 5) {
  gameBoard[4] = "o" ;
}
if (turn4 === 6) {
  gameBoard[5] = "o" ;
}
if (turn4 === 7) {
  gameBoard[6] = "o" ;
}
if (turn4 === 8) {
  gameBoard[7] = "o" ;
}
if (turn4 === 9) {
  gameBoard[8] = "o" ;
}

//Turn 5
if (turn5 === 1) {
  gameBoard[0] = "x" ;
}
if (turn5 === 2) {
  gameBoard[1] = "x";
}
if (turn5 === 3) {
  gameBoard[2] = "x";
}
if (turn5 === 4) {
  gameBoard[3] = "x";
}
if (turn5 === 5) {
  gameBoard[4] = "x";
}
if (turn5 === 6) {
  gameBoard[5] = "x";
}
if (turn5 === 7) {
  gameBoard[6] = "x";
}
if (turn5 === 8) {
  gameBoard[7] = "x";
}
if (turn5 === 9) {
  gameBoard[8] = "x";
}

//Turn 6
if (turn6 === 1) {
  gameBoard[0] = "o" ;
}
if (turn6 === 2) {
  gameBoard[1] = "o" ;
}
if (turn6 === 3) {
  gameBoard[2] = "o" ;
}
if (turn6 === 4) {
  gameBoard[3] = "o" ;
}
if (turn6 === 5) {
  gameBoard[4] = "o" ;
}
if (turn6 === 6) {
  gameBoard[5] = "o" ;
}
if (turn6 === 7) {
  gameBoard[6] = "o" ;
}
if (turn6 === 8) {
  gameBoard[7] = "o" ;
}
if (turn6 === 9) {
  gameBoard[8] = "o" ;
}

//Turn 7
if (turn7 === 1) {
  gameBoard[0] = "x" ;
}
if (turn7 === 2) {
  gameBoard[1] = "x";
}
if (turn7 === 3) {
  gameBoard[2] = "x";
}
if (turn7 === 4) {
  gameBoard[3] = "x";
}
if (turn7 === 5) {
  gameBoard[4] = "x";
}
if (turn7 === 6) {
  gameBoard[5] = "x";
}
if (turn7 === 7) {
  gameBoard[6] = "x";
}
if (turn7 === 8) {
  gameBoard[7] = "x";
}
if (turn7 === 9) {
  gameBoard[8] = "x";
}

//Turn 8
if (turn8 === 1) {
  gameBoard[0] = "o" ;
}
if (turn8 === 2) {
  gameBoard[1] = "o" ;
}
if (turn8 === 3) {
  gameBoard[2] = "o" ;
}
if (turn8 === 4) {
  gameBoard[3] = "o" ;
}
if (turn8 === 5) {
  gameBoard[4] = "o" ;
}
if (turn8 === 6) {
  gameBoard[5] = "o" ;
}
if (turn8 === 7) {
  gameBoard[6] = "o" ;
}
if (turn8 === 8) {
  gameBoard[7] = "o" ;
}
if (turn8 === 9) {
  gameBoard[8] = "o" ;
}

//Turn 9
if (turn9 === 1) {
  gameBoard[0] = "x" ;
}
if (turn9 === 2) {
  gameBoard[1] = "x";
}
if (turn9 === 3) {
  gameBoard[2] = "x";
}
if (turn9 === 4) {
  gameBoard[3] = "x";
}
if (turn9 === 5) {
  gameBoard[4] = "x";
}
if (turn9 === 6) {
  gameBoard[5] = "x";
}
if (turn9 === 7) {
  gameBoard[6] = "x";
}
if (turn9 === 8) {
  gameBoard[7] = "x";
}
if (turn9 === 9) {
  gameBoard[8] = "x";
}

var retry = prompt.question("Where would you rather go?");
//Space 1
if (gameBoard[0].toLowerCase === "x") {
  console.log("That space has already been used, try a diffent one!");
  gameBoard[0]. = "x";
  console.log(retry);
}
else if (gameBoard[0].toLowerCase === "o") {
  console.log("That space has already been used, try a diffent one!");
  gameBoard[0] = "o";
  console.log(retry);
}

//Space 2
if (gameBoard[1].toLowerCase === "x") {
  console.log("That space has already been used, try a diffent one!");
  gameBoard[1] = "x";
  console.log(retry);
}
else if (gameBoard[1].toLowerCase === "o") {
  console.log("That space has already been used, try a diffent one!");
  gameBoard[1] = "o";
  console.log(retry);
}

//Space 3
if (gameBoard[2].toLowerCase === "x") {
  console.log("That space has already been used, try a diffent one!");
  gameBoard[2] = "x";
  console.log(retry);
}
else if (gameBoard[2].toLowerCase === "o") {
  console.log("That space has already been used, try a diffent one!");
  gameBoard[2] = "o";
  console.log(retry);
}

//Space 4
if (gameBoard[3].toLowerCase === "x") {
  console.log("That space has already been used, try a diffent one!");
  gameBoard[3] = "x";
  console.log(retry);
}
else if (gameBoard[3].toLowerCase === "o") {
  console.log("That space has already been used, try a diffent one!");
  gameBoard[3] = "o";
  console.log(retry);
}

//Space 5
if (gameBoard[4].toLowerCase === "x") {
  console.log("That space has already been used, try a diffent one!");
  gameBoard[4] = "x";
  console.log(retry);
}
else if (gameBoard[4].toLowerCase === "o") {
  console.log("That space has already been used, try a diffent one!");
  gameBoard[4] = "o";
  console.log(retry);
}

//Space 6
if (gameBoard[5].toLowerCase === "x") {
  console.log("That space has already been used, try a diffent one!");
  gameBoard[5] = "x";
  console.log(retry);
}
else if (gameBoard[5].toLowerCase === "o") {
  console.log("That space has already been used, try a diffent one!");
  gameBoard[5] = "o";
  console.log(retry);
}

//Space 7
if (gameBoard[6].toLowerCase === "x") {
  console.log("That space has already been used, try a diffent one!");
  gameBoard[6] = "x";
  console.log(retry);
}
else if (gameBoard[6].toLowerCase === "o") {
  console.log("That space has already been used, try a diffent one!");
  gameBoard[6] = "o";
  console.log(retry);
}

//Space 8
if (gameBoard[7].toLowerCase === "x") {
  console.log("That space has already been used, try a diffent one!");
  gameBoard[7] = "x";
  console.log(retry);
}
else if (gameBoard[7].toLowerCase === "o") {
  console.log("That space has already been used, try a diffent one!");
  gameBoard[7] = "o";
  console.log(retry);
}

//Space 9
if (gameBoard[8].toLowerCase === "x") {
  console.log("That space has already been used, try a diffent one!");
  gameBoard[8] = "x";
  console.log(retry);
}
else if (gameBoard[8].toLowerCase === "o") {
  console.log("That space has already been used, try a diffent one!");
  gameBoard[8] = "o";
  console.log(retry);
}



function isGameOver() {
if (gameBoard[0] && gameBoard[1] && gameBoard[2] === "o") {
  console.log("Great job x, you win");
  return true;
}
else if (gameBoard[0] && gameBoard[1] && gameBoard[2] === "o") {
  console.log("Great job o, you win");
  return true;
}

if (gameBoard[3] && gameBoard[4] && gameBoard[5] === "o") {
  console.log("Great job x, you win");
  return true;
}
else if (gameBoard[3] && gameBoard[4] && gameBoard[5] === "o") {
  console.log("Great job o, you win");
  return true;
}

if (gameBoard[6] && gameBoard[7] && gameBoard[8] === "o") {
  console.log("Great job x, you win");
  return true;
}
else if (gameBoard[6] && gameBoard[7] && gameBoard[8] === "o") {
  console.log("Great job o, you win");
  return true;
}

if (gameBoard[0] && gameBoard[3] && gameBoard[6] === "o") {
  console.log("Great job x, you win");
  return true;
}
else if (gameBoard[0] && gameBoard[3] && gameBoard[6] === "o") {
  console.log("Great job o, you win");
  return true;
}

if (gameBoard[1] && gameBoard[4] && gameBoard[7] === "o") {
  console.log("Great job x, you win");
  return true;
}
else if (gameBoard[1] && gameBoard[4] && gameBoard[7] === "o") {
  console.log("Great job o, you win");
  return true;
}

if (gameBoard[2] && gameBoard[5] && gameBoard[8] === "o") {
  console.log("Great job x, you win");
  return true;
}
else if (gameBoard[2] && gameBoard[5] && gameBoard[8] === "o") {
  console.log("Great job o, you win");
  return true;
}

if (gameBoard[0] && gameBoard[4] && gameBoard[8] === "o") {
  console.log("Great job x, you win");
  return true;
}
else if (gameBoard[0] && gameBoard[4] && gameBoard[8] === "o") {
  console.log("Great job o, you win");
  return true;
}

if (gameBoard[2] && gameBoard[4] && gameBoard[6] === "o") {
  console.log("Great job x, you win");
  return true;
}
else if (gameBoard[2] && gameBoard[4] && gameBoard[6] === "o") {
  console.log("Great job o, you win");
  return true;
}
else {
  return false;
}
}
