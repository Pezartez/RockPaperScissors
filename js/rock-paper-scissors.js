// Selects Computer Choice
let choices = ["Rock", "Paper", "Scissors"];
function getComputerChoice() {
    let choice = choices[(Math.floor(Math.random() * choices.length))];
    return choice;
}

/* 2. second function will play through
one round of rps using two parameters:
playerSelection -> should be case insensitive
computerSelection

example of return string: "You Lose! Paper beats Rock"

*/
function playRound(){
    // Uses player input to choose rock, paper, or scissors
    let playerTypedChoice = prompt("Do you choose 'Rock', 'Paper', or 'Scissors'?");
    if (playerTypedChoice.toLowerCase() == "rock") {
        playerSelection = choices[0];
        console.log("You Chose " + playerSelection);
    } else if (playerTypedChoice.toLowerCase() == "paper"){
        playerSelection = choices[1];
        console.log("You Chose " + playerSelection);
    } else if (playerTypedChoice.toLowerCase() == "scissors"){
        playerSelection = choices[2];
        console.log("You Chose " + playerSelection);
    } else {
        console.log("If you aren't sure, we can pick for you!")
        playerSelection = choices[(Math.floor(Math.random() * choices.length))];
        console.log("We Chose " + playerSelection);
    }
    // Sets this rounds' computer choice
    console.log("Computer is picking....");
    let computerSelection = getComputerChoice();
    console.log("Computer Chose " + computerSelection);
    

    // Uses both inputs to decide round winner
    if (playerSelection === computerSelection){
        console.log("Tie Game");
    } else if (playerSelection === choices[0] && computerSelection === choices[1]) {
        console.log("Your Lose! Paper beats Rock");
    } else if (playerSelection === choices[0] && computerSelection === choices[2]) {
        console.log("You Win! Rock beats Scissors");
    } else if (playerSelection === choices[1] && computerSelection === choices[0]) {
        console.log("You Lose! Rock beats Paper");
    } else if (playerSelection === choices[1] && computerSelection === choices[2]) {
        console.log("You Win! Rock beats Scissors");
    } else if (playerSelection === choices[2] && computerSelection === choices[0]) {
        console.log("You Lose! Rock beats Scissors");
    } else if (playerSelection === choices[2] && computerSelection === choices[1]) {
        console.log("You Win! Scissors beat Paper");
    }//nead to add points feature for when we play 5 rounds.
}




/* wrap playRound in a different function that plays through
 5 rounds before reporting winner or loser*/