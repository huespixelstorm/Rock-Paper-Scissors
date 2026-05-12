let choices = ["rock", "paper", "scissors"];

function getComputerChoice() {
    return choices[Math.floor(Math.random() * choices.length)];
}
//  Player Prompts
alert("Rock Paper Scissors! press 'ok' to play");
let playerName = prompt("Enter your Player name: ");

function getPlayerChoice() {
    let choice = prompt("Pick either, 'Rock', 'Paper', 'Scissors'").toLowerCase()

        if (choice != "rock" && choice != "paper" && choice != "scissors")
            return choice = prompt("choice is INVALID, choose from the options given, 'Rock', 'Paper', or 'Scissors'")
        else return choice
}

//  Win-Loss-Draw Conditions
function getRoundResult() {

    let playerChoice = getPlayerChoice();
    let computerChoice = getComputerChoice();

    // Draw
    if (playerChoice === "rock" && computerChoice === "rock" ||
        playerChoice === "paper" && computerChoice === "paper" ||
        playerChoice === "scissors" && computerChoice === "scissors"
    )
    return alert(`${playerName} and the comoputer chose the same move, It's a Draw.`)


    // Win-Lose
    if (playerChoice === "rock" && computerChoice === "scissors" ||
        playerChoice === "paper" && computerChoice === "rock" ||
        playerChoice === "scissors" && computerChoice === "paper"
    )
    return alert(
        `${playerName} chose ${playerChoice}
        Computer chose ${computerChoice}, You Won the round!`)
    else alert(`${playerName} chose ${playerChoice}
        Computer chose ${computerChoice}, You Lost the round...`)
}
console.log(getRoundResult())