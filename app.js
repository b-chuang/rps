let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");
// First cache the DOM, define everything to use for future processes

function getComputerChoice() {
  const choices = ['r', 'p', 's'];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices [randomNumber];
}
// math.random() will get random 0-1, --> x3 will make it between 0-3
// math.floor on math.random will make the random value between 0-3 round down to whole number.
// return choices [randomNumber] will turn the randomNumber number value --> choices "r,p,s" string value.

function convertToWord(letter) {
  if (letter === "r") return "Rock";
  if (letter === "p") return "Paper";
  return  "Scissors";
}

function win(userChoice, computerChoice) {
  const smallUserWord = "user".fontsize(3).sub();
  const smallCompWord = "comp".fontsize(3).sub();
  const userChoice_div = document.getElementById(userChoice);

  userScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;

  result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} beats ${convertToWord(computerChoice)}${smallCompWord} = You win!`;
  userChoice_div.classList.add('green-glow');
  setTimeout(function() {userChoice_div.classList.remove('green-glow')}, 300);
}



function lose(userChoice, computerChoice) {
  const smallUserWord = "user".fontsize(3).sub();
  const smallCompWord = "comp".fontsize(3).sub();
  const userChoice_div = document.getElementById(userChoice);

  computerScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;

  result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} loses to ${convertToWord(computerChoice)}${smallCompWord} = You lost!`;
   userChoice_div.classList.add('red-glow');
  setTimeout(function() {userChoice_div.classList.remove('red-glow')}, 300);
}



function draw(userChoice, computerChoice) {
  const smallUserWord = "user".fontsize(3).sub();
  const smallCompWord = "comp".fontsize(3).sub();
  const userChoice_div = document.getElementById(userChoice);

  result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} equals ${convertToWord(computerChoice)}${smallCompWord} = Draw!`;
   userChoice_div.classList.add('grey-glow');
  setTimeout(function() {userChoice_div.classList.remove('grey-glow')}, 300);
}



function game(userChoice) {
  const computerChoice = getComputerChoice();
// make a function with name of game (which grabs the userChoice)
// "game" will define computerChoice as const and runs the function getComputerChoice
//

  switch (userChoice + computerChoice) {
    case "rs":
    case "pr":
    case "sp":
      win(userChoice, computerChoice);
      break;
    case "rp":
    case "ps":
    case "sr":
      lose(userChoice, computerChoice);
      break;
    case "rr":
    case "pp":
    case "ss":
      draw(userChoice, computerChoice);
      break;
  }
}

  // console.log("user choice => " + userChoice);
  // console.log("computer choice => " + computerChoice);





function main() {
  rock_div.addEventListener('click', function() {
    game("r");
  })

 paper_div.addEventListener('click', function() {
    game("p");
  })

  scissors_div.addEventListener('click', function() {
    game("s");
  })

}
main();


