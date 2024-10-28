let humanScore = 0;
let computerScore = 0;

function getCompMove() {
  let rps = ["rock", "paper", "scissors"];

  let randomNum = Math.floor(Math.random() * rps.length);

  return rps[randomNum];
}

let userInput = "sdf";

let weps = document.querySelector(".weapons");

weps.addEventListener("click", (e) => {
  if (e.target.value == "rock") {
    userInput = e.target.value;
    console.log("User selected:", userInput);
  } else if (e.target.value == "paper") {
    userInput = e.target.value;
    console.log("User selected:", userInput);
  } else if (e.target.value == "scissor") {
    userInput = e.target.value;
    console.log("User selected:", userInput);
  }
});

function compareMoves() {
  let userMove = userInput;
  let compMove = getCompMove();
  console.log(userMove);
  console.log(compMove);
  if (
    (userMove == "rock" && compMove == "rock") ||
    (userMove == "paper" && compMove == "paper") ||
    (userMove == "scissor" && compMove == "scissor")
  ) {
    console.log("Its a tie! You chose the same weapon.");
  } else if (
    (userMove == "rock" && compMove == "scissor") ||
    (userMove == "paper" && compMove == "rock") ||
    (userMove == "scissor" && compMove == "paper")
  ) {
    console.log("You won! Your weapon is superior.");
    humanScore++;
  } else if (
    (userMove == "rock" && compMove == "paper") ||
    (userMove == "paper" && compMove == "scissor") ||
    (userMove == "scissor" && compMove == "rock")
  ) {
    console.log("You lost! Your weapon is weak.");
    computerScore++;
  } else {
    console.log("Invalid Input");
  }
}

function playGame() {
  compareMoves();
}

playGame();

// if (humanScore > computerScore) {
//   console.log(
//     "WINNER! Final score: You: " +
//       humanScore +
//       " - " +
//       "Computer: " +
//       computerScore
//   );
// } else {
//   console.log(
//     "LOSER! Final score: You: " +
//       humanScore +
//       " - " +
//       "Computer: " +
//       computerScore
//   );
// }
