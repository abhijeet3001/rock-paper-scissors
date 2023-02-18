function getComputerChoice() {
  let val = Math.floor(Math.random() * 3) + 1;
  if (val === 1) return "Rock";
  if (val === 2) return "Paper";
  if (val === 3) return "Scissor";
}
