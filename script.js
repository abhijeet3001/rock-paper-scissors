let playerScore = 0;
let computerScore = 0;
let isGameFinished = false;

function getComputerChoice() {
  let val = Math.floor(Math.random() * 3) + 1;
  if (val === 1) return "rock";
  if (val === 2) return "paper";
  if (val === 3) return "scissors";
}
function playRound(playerSelection, computerSelection) {
  if (isGameFinished) return;
  if (playerSelection === computerSelection) return "Tie";
  if (playerSelection === "rock") {
    if (computerSelection === "paper") {
      scores("computer");
      return "You Lose! Paper beats Rock";
    } else {
      scores("player");
      return "You Win! Rock beats Scissors";
    }
  }
  if (playerSelection === "paper") {
    if (computerSelection === "scissors") {
      scores("computer");
      return "You Lose! Scissors beats Paper";
    } else {
      scores("player");
      return "You Win! Paper beats Rock";
    }
  }
  if (playerSelection === "scissors") {
    if (computerSelection === "rock") {
      scores("computer");
      return "You Lose! Rock beats Scissors";
    } else {
      scores("player");
      return "You Win! Scissors beats Paper";
    }
  }
}

const resultbox = document.querySelector("#display");

function scores(winner) {
  winner === "player" ? playerScore++ : computerScore++;
  const playerScoreboard = document.querySelector(".player");
  const computerScoreboard = document.querySelector(".computer");
  playerScoreboard.textContent = playerScore;
  computerScoreboard.textContent = computerScore;
  if (playerScore === 5 || computerScore === 5) {
    isGameFinished = true;
  }
}

function game(e) {
  let result = playRound(e.target.value, getComputerChoice());
  resultbox.textContent = result;
  if (isGameFinished)
    resultbox.textContent =
      playerScore === 5 ? "You won the game" : "You lost the game to computer";
}
const btn = document.querySelectorAll(".btn");
btn.forEach((button) => button.addEventListener("click", game));
