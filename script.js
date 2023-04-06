function getComputerChoice() {
  let val = Math.floor(Math.random() * 3) + 1;
  if (val === 1) return "rock";
  if (val === 2) return "paper";
  if (val === 3) return "scissors";
  
}
function playRound(playerSelection, computerSelection) {
  playerSelection=playerSelection.toLowerCase();
  if(playerSelection===computerSelection)
    return "Tie";  
  if (playerSelection === "rock") {
    return computerSelection === "paper"? "You Lose! Paper beats Rock": "You Win! Rock beats Scissors";
  }
  if (playerSelection === "paper") {
    return computerSelection === "scissors"? "You Lose! Scissors beats Paper": "You Win! Paper beats Rock";
  }
  if (playerSelection === "scissors") {
    return computerSelection === "rock"? "You Lose! Rock beats Scissors": "You Win! Scissors beats Paper";
  }
}
const resultbox=document.querySelector('.result');

function game(e){
  let result=playRound(e.target.value,getComputerChoice());
  resultbox.textContent=result;
}
const btn=document.querySelectorAll('.btn');
btn.forEach(button => button.addEventListener('click',game));