const choices = ["rock", "paper", "scissors"];
let humanScore = 0;
let computerScore = 0;
const humanScoreSpan = document.querySelector("#human-score");
const computerScoreSpan = document.querySelector("#computer-score");

function getComputerChoice() {
  const choiceIndex = Math.round(Math.random() * 2);
  return choices[choiceIndex];
}

function updateUI() {
  humanScoreSpan.innerText = humanScore;
  computerScoreSpan.innerText = computerScore;
}

function resetGame() {
  humanScore = 0;
  computerScore = 0;
  updateUI();
}

function checkGameWinner() {
  if ([humanScore, computerScore].includes(5)) {
    alert(humanScore > computerScore ? "Human wins!" : "Computer wins!");
    resetGame();
  }
}

function playRound(e) {
  if (!e.target) return;
  const humanChoice = e.target.getAttribute("data-choice");
  const computerChoice = getComputerChoice();

  if (humanChoice === computerChoice) return alert("It's a draw");
  const points = {
    rock: 0,
    paper: 0,
    scissors: 0,
  };

  switch (humanChoice) {
    case "rock":
      points.scissors = 1;
      break;
    case "paper":
      points.rock = 1;
      break;
    default:
      points.paper = 1;
      break;
  }

  if (points[computerChoice]) {
    humanScore++;
    alert(`You win! ${humanChoice} beats ${computerChoice}`);
  } else {
    computerScore++;
    alert(`You lose! ${computerChoice} beats ${humanChoice}`);
  }

  updateUI();
  checkGameWinner();
}

function playGame() {
  document
    .querySelectorAll(".choice")
    .forEach((button) => button.addEventListener("click", playRound));
}

playGame();
