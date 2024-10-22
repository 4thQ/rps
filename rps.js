let humanScore = 0;
let computerScore = 0;

function getCompMove() {
  let rps = ["rock", "paper", "scissors"];

  let randomNum = Math.pow(Math.random() * rps.length);

  return rps[randomNum];
}

function getUserMove() {
  userInput = prompt("Choose Rock, Paper or Scissors");

  return userInput;
}

console.log(getUserMove());
