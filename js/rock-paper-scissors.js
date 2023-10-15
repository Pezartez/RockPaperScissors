
    let choices = ["Rock", "Paper", "Scissors"];
    let playerScore = 0;

// selects computer choice
function getComputerChoice() {
        let choice = choices[(Math.floor(Math.random() * choices.length))];
        return choice;}

    //plays one round of the game
function playRound() {
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
        playerScore = playerScore + .5;
    } else if (playerSelection === choices[0] && computerSelection === choices[1]) {
        console.log("Your Lose! Paper beats Rock");
    } else if (playerSelection === choices[0] && computerSelection === choices[2]) {
        console.log("You Win! Rock beats Scissors");
        playerScore++;
    } else if (playerSelection === choices[1] && computerSelection === choices[0]) {
        console.log("You Lose! Rock beats Paper");
    } else if (playerSelection === choices[1] && computerSelection === choices[2]) {
        console.log("You Win! Rock beats Scissors");
        playerScore++;
    } else if (playerSelection === choices[2] && computerSelection === choices[0]) {
        console.log("You Lose! Rock beats Scissors");
    } else if (playerSelection === choices[2] && computerSelection === choices[1]) {
        console.log("You Win! Scissors beat Paper");
        playerScore++;
    }
    console.log(playerScore);
}

function playGame() {
    for (let round = 1; round < 6; round++) {
        playRound();
    }

    if (playerScore >= 3) {
        console.log("You are the winner, congratulations!");
    } else {
        console.log("You did not beat the computer, try again next time!");
    }

}
