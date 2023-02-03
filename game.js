// get choice of computer in random
function computerChoice() {
  const options = ["Rock", "Paper", "Scissors"];
  const choice = options[Math.floor(Math.random() * options.length)];
  return choice;
}

// get the result of round
function playRound(playerSelection, computerSelection) {
  if (playerSelection == computerSelection) return "draw";
  else if (
    (playerSelection == "Rock" && computerSelection == "Paper") ||
    (playerSelection == "Paper" && computerSelection == "Scissors") ||
    (playerSelection == "Scissors" && computerSelection == "Rock")
  ) return "player_loose";
  else return "player_win";
}

// main function
function game() {
  // get the player name
  let playerName = prompt("Enter your name");
  console.log(`Your Name : ${playerName}`);
  alert(`Welcome ${playerName}`);

  // to store the result of scores of both player and computer
  let playerScore = 0;
  let computerScore = 0;

  //   play 5 round in total
  for (let i = 0; i < 5; i++) {
    // player selection of choice
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
    if (playerSelection == 1) playerSelection = "Rock";
    else if (playerSelection == 2) playerSelection = "Paper";
    else playerSelection = "Scissors";

    let computerSelection = computerChoice();

    console.log(`${playerName} choice : ${playerSelection}`);
    console.log(`Computer choice : ${computerSelection}`);

    if (playRound(playerSelection, computerSelection) == "player_win") {
      playerScore++;
      console.log(`you win this round`);
      console.log(`${playerSelection} beats ${computerSelection}.`);
    } else if (
      playRound(playerSelection, computerSelection) == "player_loose"
    ) {
      computerScore++;
      console.log(`you loose this round`);
      console.log(`${computerSelection} beats ${playerSelection}.`);
    } else {
      console.log("Round Tied!");
    }
  }
  console.log("Results");
  if (playerScore > 2) {
    console.log(`${playerName} is winner`);
  } else if (playerScore == computerScore) {
    console.log("Match draw!!!");
  } else {
    console.log(`Computer is winner\n${playerName} is looser`);
  }
}
game();
