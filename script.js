const choices = ["rock", "paper", "scissors"];
let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const choiceIndex = Math.round(Math.random() * 2);
  return choices[choiceIndex];
}

function getHumanChoice() {
  const choice = prompt(
    "What's your choice? (Rock, paper, scissors)",
    ""
  ).toLowerCase();

  return choice || getComputerChoice();
}

function playRound(humanChoice, computerChoice) {
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
}

function playGame() {
  for (let i = 0; i < 5; i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    playRound(humanSelection, computerSelection);

    if (humanScore + computerScore === 5) break;
  }

  if (humanScore === computerScore) {
    alert("Game Over! It's a draw");
  } else {
    alert(humanScore > computerScore ? "Human wins!" : "Computer wins!");
  }
}

playGame();
