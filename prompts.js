var prompt = require('prompt');

var player1 = prompt.get("Are you ready to play, Player 1?");
if (player1 === "yes"){
  console.log("Great! Let's wait for your oponent Player 1!");
}
else{
  console.log("That's fine! Come back when your ready.");
}

var player2 = prompt.get("Are you ready to play, Player 2?")
if (player2 === "yes") {
  console.log("Awesome! Let's get started player 2.");
}
else {
  console.log("Alright! Just come back when you want to play.");
}

var choice1 = prompt.get("Player 1, do you want to be X or O?")
if (choice1.toLowerCase === "x") {
  console.log("Great! You will go first")
}
else {
  console.log("Good choice, but Player 2 will be going first.");
}

var start = prompt.get("Type ok to start!");
var oops = prompt.get("Sorry I forgot, is player 1 going first or is player 2 to going first.")
