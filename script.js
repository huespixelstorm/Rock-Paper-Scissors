let choices = ["rock", "paper", "scissors"];
let playerRoundsWon = 0;
let computerRoundsWon = 0;

function getComputerChoice() {
    return choices[Math.floor(Math.random() * choices.length)];
}
//  Player Prompts
alert("Rock Paper Scissors! press 'ok' to play");
let playerName = prompt("Enter your Player name: ");

function getPlayerChoice() {
    let choice = prompt("Pick either, 'Rock', 'Paper', 'Scissors'").toLowerCase()

        while (
        choice !== "rock" &&
        choice !== "paper" &&
        choice !== "scissors") {
            choice = prompt('choice is INVALID, please pick either, "Rock", "Paper", "Scissors".').toLowerCase()
        } return choice
}


//  Win-Loss-Draw Conditions
function getRoundResult() {

    let playerChoice = getPlayerChoice();
    let computerChoice = getComputerChoice();

    if (playerChoice === computerChoice)
    return alert(`"${playerName}" and the computer chose the same move, It's a Draw.`)

    // Win-Lose
    if (playerChoice === "rock" && computerChoice === "scissors" ||
        playerChoice === "paper" && computerChoice === "rock" ||
        playerChoice === "scissors" && computerChoice === "paper") {
    
        playerRoundsWon++
            
        return alert(`${playerName} chose ${playerChoice}
        Computer chose ${computerChoice},
         You Won the round!
         score: ${playerRoundsWon} - ${computerRoundsWon}`)

        } else {
        
        computerRoundsWon++
            
        alert(`${playerName} chose ${playerChoice}
        Computer chose ${computerChoice},
         You Lost the round...
         score: ${playerRoundsWon} - ${computerRoundsWon}`) }
}

while (playerRoundsWon < 5 && computerRoundsWon < 5) {
    getRoundResult();
}

matchWinner();  

//  Match Results/determiner
function matchWinner() {
    if (playerRoundsWon === 5) {
        return alert("You Won the game!")
    } else {
        if (computerRoundsWon === 5) {
            return alert("You Lost the game...")
        }

    }
}
