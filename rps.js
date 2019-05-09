let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreboard_div = document.querySelector(".scoreboard");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getComputerChoice() {
  const choices = ['r', 'p', 's']
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

function convertToWord(letter) {
  if (letter === "r") return "Rock";
  if (letter === "p") return "Paper";
  return "Scissors";
}

function win(userChoice, computerChoice) {
  const smallUserWord = "user".fontsize(3);
  const smallCompWord = "comp".fontsize(3);
  const userChoice_div = document.getElementById(userChoice);
  userScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result_p.innerHTML = convertToWord(userChoice) + " beats " + convertToWord(computerChoice) + ". You Win!";
  document.getElementById(userChoice).classList.add('green-glow');
  setTimeout(function() { document.getElementById(userChoice).classList.remove('green-glow') }, 420);
}

function lose(userChoice, computerChoice) {
  const smallUserWord = "user".fontsize(3);
  const smallCompWord = "comp".fontsize(3);
  const userChoice_div = document.getElementById(userChoice);
  computerScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result_p.innerHTML = convertToWord(userChoice) + " loses to " + convertToWord(computerChoice) + ". You Lose!";
  document.getElementById(userChoice).classList.add('red-glow');
  setTimeout(function() { document.getElementById(userChoice).classList.remove('red-glow') }, 500);

}

function draw(userChoice, computerChoice) {
  const smallUserWord = "user".fontsize(3);
  const smallCompWord = "comp".fontsize(3);
  const userChoice_div = document.getElementById(userChoice);
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result_p.innerHTML = convertToWord(userChoice) + " is the same as " + convertToWord(computerChoice) + ". Draw. Try Again!";
  document.getElementById(userChoice).classList.add('grey-glow');
  setTimeout(function() { document.getElementById(userChoice).classList.remove('grey-glow') }, 500);

}

setTimeout(function() { document.getElementById(userChoice).classList.remove('green-glow') }, 500);

function game(userChoice) {
const computerChoice = getComputerChoice();
switch (userChoice + computerChoice) {
  case "rs":
  case "pr":
  case "sp":
    win(userChoice , computerChoice);
    break;
  case "rp":
  case "ps":
  case "sr":
    lose(userChoice , computerChoice);
    break;
  case "rr":
  case "pp":
  case "ss":
    draw (userChoice , computerChoice);
    break;
}
}

function main() {
  rock_div.addEventListener('click', function () {
    game("r");
  })

  paper_div.addEventListener('click', function () {
    game("p");
  })

  scissors_div.addEventListener('click', function () {
    game("s");
  })
}

main () ;