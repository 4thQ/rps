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
  }

  const score1 = document.querySelector(".score");
  if (score1.hasChildNodes()) {
    score1.removeChild(score1.firstChild);
  }

  if (e.target.value == "rock") {
    userInput = e.target.value;
    console.log(userInput);
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
    //result
    const result = document.querySelector(".result");
    const p = document.createElement("p");
    p.textContent = "You both picked the same weapon. Its a Tie!";
    result.appendChild(p);

    //score
    const score = document.querySelector(".score");
    const span = document.createElement("span");
    span.textContent = `Score: ${humanScore} ${computerScore} `;
    score.appendChild(span);
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
    //score
    const score = document.querySelector(".score");
    const span = document.createElement("span");
    span.textContent = `Score: ${humanScore} ${computerScore} `;
    score.appendChild(span);
  } else if (
    (userMove == "rock" && compMove == "paper") ||
    (userMove == "paper" && compMove == "scissor") ||
    (userMove == "scissor" && compMove == "rock")
  ) {
    const result = document.querySelector(".result");
    const p = document.createElement("p");
    p.textContent = "Loser!";
    result.appendChild(p);
    computerScore++;
    //score
    const score = document.querySelector(".score");
    const span = document.createElement("span");
    span.textContent = `Score: ${humanScore} ${computerScore} `;
    score.appendChild(span);
  } else {
  }
  if (humanScore == 5) {
    const h1 = document.querySelector(".h1");
    h1.textContent = "YOU WON!";

    let newWep = weps.cloneNode(true);
    weps.parentNode.replaceChild(newWep, weps);
    weps = newWep;
    // humanScore = 0;
  } else if (computerScore == 5) {
    const h1 = document.querySelector(".h1");
    h1.textContent = "COMP WINS!";
    let newWep = weps.cloneNode(true);
    weps.parentNode.replaceChild(newWep, weps);
    weps = newWep;
    // computerScore = 0;
  }
}

// const playAgain = document.querySelector(".playAgain");

// playAgain.addEventListener("click", (e) => {
//   console.log(e.target);
// });
