// get choice of computer in random
function computerChoice() {
  const options = ["Rock", "Paper", "Scissors"];
  return options[Math.floor(Math.random() * options.length)];
}

const CHOICES = {
  Rock: "Rock",
  Paper: "Paper",
  Scissors: "Scissors",
};

const RESULTS = {
  Draw: "Draw",
  PlayerLost: "You Lost",
  PlayerWon: "You Won",
};

// get the result of round

function playRound(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) return RESULTS.Draw;

  switch (playerChoice) {
    case CHOICES.Rock:
      return computerChoice === CHOICES.Scissors
        ? RESULTS.PlayerWon
        : RESULTS.PlayerLost;
    case CHOICES.Paper:
      return computerChoice === CHOICES.Rock
        ? RESULTS.PlayerWon
        : RESULTS.PlayerLost;
    case CHOICES.Scissors:
      return computerChoice === CHOICES.Paper
        ? RESULTS.PlayerWon
        : RESULTS.PlayerLost;
    default:
      throw new Error(`Invalid choice: ${playerChoice}`);
  }
}

// get player name
function getPlayerName() {
  let yourName = prompt("Enter your name");
  console.log(`Your Name : ${yourName}`);
  alert(`Welcome ${yourName}`);
  return yourName;
}

// getting choice of the player
function playerChoice(i) {
  let playerSelection = null;
  console.log(`Round ${i + 1}`);
  while (true) {
    playerSelection = prompt(
      `Round : ${
        i + 1
      } \n > Enter 1 for Rock\n > Enter 2 for Paper\n > Enter 3 for Scissors`
    );

    if (playerSelection > 3 || playerSelection < 1) {
      alert("Not a valid input\nInput should be between 1 to 3");
    } else {
      break;
    }
  }
  return playerSelection;
}

// modify the choice of player ex-> 1 to Rock , 2 to Paper .
function modifyChoice(playerSelection) {
  if (playerSelection == 1) return CHOICES.Rock;

  return playerSelection == 2 ? CHOICES.Paper : CHOICES.Scissors;
}

// for displaying the result of each round and return Who win the round.
function displayCurrentResult(playerName, playerSelection, computerSelection) {
  console.log(`${playerName} choice : ${playerSelection}`);
  console.log(`Computer choice : ${computerSelection}`);

  if (playRound(playerSelection, computerSelection) == RESULTS.PlayerWon) {
    console.log(`you win this round`);
    console.log(`${playerSelection} beats ${computerSelection}.`);
    return 1;
  } else if (
    playRound(playerSelection, computerSelection) == RESULTS.PlayerLost
  ) {
    console.log(`you loose this round`);
    console.log(`${computerSelection} beats ${playerSelection}.`);
    return 2;
  } else {
    console.log("Round Tied!");
    return 0;
  }
}

// for displaying final result.
function finalResult(playerName, playerScore, computerScore) {
  console.log("Results");
  if (playerScore > 2) {
    console.log(`${playerName} is winner`);
  } else if (playerScore == computerScore) {
    console.log("Match draw!!!");
  } else {
    console.log(`Computer is winner\n${playerName} is looser`);
  }
}

// main function
function game() {
  // get the player name
  let playerName = getPlayerName();

  // to store the result of scores of both player and computer
  let playerScore = 0;
  let computerScore = 0;

  //   play 5 round in total
  for (let i = 0; i < 5; i++) {
    // player selection of choice
    let playerSelection = playerChoice(i);

    // modifiy the selection of player from number to string
    playerSelection = modifyChoice(playerSelection);

    // computer selection
    let computerSelection = computerChoice();

    //display the current round result and returns the result status
    let point = displayCurrentResult(
      playerName,
      playerSelection,
      computerSelection
    );

    // incrementing the scores
    if (point != 0) point == 1 ? playerScore++ : computerScore++;
  }

  // displaying the final result
  finalResult(playerName, playerScore, computerScore);
}
game();
