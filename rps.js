let humanScore = 0;
let computerScore = 0;
let userInput = "";

function getCompMove() {
  let rps = ["rock", "paper", "scissor"];

  let randomNum = Math.floor(Math.random() * rps.length);

  return rps[randomNum];
}

let weps = document.querySelector(".weapons");

weps.addEventListener("click", (e) => {
  const result = document.querySelector(".result");
  if (result.hasChildNodes()) {
    result.removeChild(result.firstChild);

    if (e.target.value == "rock") {
      userInput = e.target.value;
    }

    compareMoves();
  } else if (e.target.value == "paper") {
    userInput = e.target.value;
    compareMoves();
  } else if (e.target.value == "scissor") {
    userInput = e.target.value;
    compareMoves();
  }
});

function compareMoves() {
  let userMove = userInput;
  let compMove = getCompMove();

  if (
    (userMove == "rock" && compMove == "rock") ||
    (userMove == "paper" && compMove == "paper") ||
    (userMove == "scissor" && compMove == "scissor")
  ) {
    const result = document.querySelector(".result");
    const p = document.createElement("p");
    p.textContent = "You both picked the same weapon. Its a Tie!";
    result.appendChild(p);
  } else if (
    (userMove == "rock" && compMove == "scissor") ||
    (userMove == "paper" && compMove == "rock") ||
    (userMove == "scissor" && compMove == "paper")
  ) {
    const result = document.querySelector(".result");
    const p = document.createElement("p");
    p.textContent = "Your weapon is stronger. Winner!";
    result.appendChild(p);
    humanScore++;
  } else if (
    (userMove == "rock" && compMove == "paper") ||
    (userMove == "paper" && compMove == "scissor") ||
    (userMove == "scissor" && compMove == "rock")
  ) {
    const result = document.querySelector(".result");
    const p = document.createElement("p");
    p.textContent = "Loser!";
    result.appendChild(p);
    console.log("Your weapon is weak. You lost!");
    computerScore++;
  } else {
  }
}

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
