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

  const h1 = document.querySelector(".h1");
  if (h1.hasChildNodes()) {
    h1.removeChild(h1.firstChild);
  }

  const h2 = document.querySelector(".h2");
  if (h2.hasChildNodes()) {
    h2.removeChild(h2.firstChild);
  }
  //bet
  document.querySelector(".result").style.display = "flex";
  document.querySelector(".score").style.display = "flex";

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
  } else if (e.target.value == "Play again!") {
    humanScore = 0;
    computerScore = 0;
    //bet2
    document.querySelector(".result").style.display = "none";
    document.querySelector(".score").style.display = "none";
    document.querySelector(".h1").style.display = "none";
    document.querySelector(".h2").style.display = "none";
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
    p.textContent = "You both picked the same weapon :o ";
    result.appendChild(p);

    //score
    const score = document.querySelector(".score");
    const span = document.createElement("span");
    span.textContent = `Score: ${humanScore} - ${computerScore} `;
    score.appendChild(span);
  } else if (
    (userMove == "rock" && compMove == "scissor") ||
    (userMove == "paper" && compMove == "rock") ||
    (userMove == "scissor" && compMove == "paper")
  ) {
    const result = document.querySelector(".result");
    const p = document.createElement("p");
    p.textContent = "Your weapon was superior >:";
    result.appendChild(p);
    humanScore++;
    //score
    const score = document.querySelector(".score");
    const span = document.createElement("span");
    span.textContent = `Score: ${humanScore} - ${computerScore} `;
    score.appendChild(span);
  } else if (
    (userMove == "rock" && compMove == "paper") ||
    (userMove == "paper" && compMove == "scissor") ||
    (userMove == "scissor" && compMove == "rock")
  ) {
    const result = document.querySelector(".result");
    const p = document.createElement("p");
    p.textContent = "Your weapon was too weak :(";
    result.appendChild(p);
    computerScore++;
    //score
    const score = document.querySelector(".score");
    const span = document.createElement("span");
    span.textContent = `Score: ${humanScore} - ${computerScore} `;
    score.appendChild(span);
  } else {
  }
  if (humanScore == 5) {
    const h1 = document.querySelector(".h1");
    h1.textContent = "YOU WON!";
    document.querySelector(".h1").style.display = "flex";
    const h2 = document.querySelector(".h2");
    document.querySelector(".h1").style.backgroundColor = "green";
    h2.textContent = "GAME OVER!";

    document.querySelector(".h2").style.display = "flex";
  } else if (computerScore == 5) {
    const h1 = document.querySelector(".h1");
    h1.textContent = "COMP WINS!";
    document.querySelector(".h1").style.display = "flex";
    document.querySelector(".h1").style.backgroundColor = "red";

    const h2 = document.querySelector(".h2");
    h2.textContent = "GAME OVER!";

    document.querySelector(".h2").style.display = "flex";
  }
}
