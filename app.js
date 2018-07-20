const userScore = 0;
const computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result");
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


function game(userChoice) {
  const computerChoice = getComputerChoice();
  console.log("user choice => " + userChoice);
  console.log("computer choice => " + computerChoice);
}
// make a function with name of game (which grabs the userChoice)
// "game" will definie computerChoice as const and runs the function getComputerChoice
//


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


