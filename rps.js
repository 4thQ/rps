let humanScore = 0;
let computerScore = 0;

function getCompMove() {
  let rps = ["rock", "paper", "scissors"];

  let randomNum = Math.floor(Math.random() * rps.length);

  return rps[randomNum];
}

function getUserMove() {
  userInput = prompt("Choose Rock, Paper or Scissors");

  return userInput;
}

function compareMoves() {
  let userMove = getUserMove();
  let compMove = getCompMove();

  if (
    (userMove == "rock" && compMove == "rock") ||
    (userMove == "paper" && compMove == "paper") ||
    (userMove == "scissors" && compMove == "scissors")
  ) {
    console.log("Its a tie! You chose the same weapon.");
  } else if (
    (userMove == "rock" && compMove == "scissors") ||
    (userMove == "paper" && compMove == "rock") ||
    (userMove == "scissors" && compMove == "paper")
  ) {
    console.log("You won! Your weapon is superior.");
    humanScore++;
  } else if (
    (userMove == "rock" && compMove == "paper") ||
    (userMove == "paper" && compMove == "scissors") ||
    (userMove == "scissors" && compMove == "rock")
  ) {
    console.log("You lost! Your weapon is weak.");
    computerScore++;
  } else {
    console.log("Invalid Input");
  }
}



playGame();

if (humanScore > computerScore) {
  console.log(
    "WINNER! Final score: You: " +
      humanScore +
      " - " +
      "Computer: " +
      computerScore
  );
} else {
  console.log(
    "LOSER! Final score: You: " +
      humanScore +
      " - " +
      "Computer: " +
      computerScore
  );
}
