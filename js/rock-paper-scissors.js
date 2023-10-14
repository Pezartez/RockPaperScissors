/* Selects Computer Choice */
let choices = ["rock", "paper", "scissors"];
function getComputerChoice() {
    let computerSelection = choices[(Math.floor(Math.random() * choices.length))];
    return computerSelection;
}

/* 2. second function will play through
one round of rps using two parameters:
playerSelection -> should be case insensitive
computerSelection

example of return string: "You Lose! Paper beats Rock"

*/
function playRound(playerSelection, computerSelection){

}
/* wrap playRound in a different function that plays through
 5 rounds before reporting winner or loser*/