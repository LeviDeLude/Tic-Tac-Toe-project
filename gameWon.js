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
