//  getComputerChoice
const choices = ["rock", "paper", "scissors"];

function getComputerChoice() {
    return choices[Math.floor(Math.random() * choices.length)]
}

//  PLAY ROUND  
const roundsCount = document.querySelector("#roundsCount");
let roundNo = 0

const playerScore = document.querySelector("#playerScore");
let playerRoundsWon = 0
const computerScore = document.querySelector("#computerScore");
let computerRoundsWon = 0


function playRound(playerChoice) {

    const computerChoice = getComputerChoice()

    let result;
    roundNo++
    roundsCount.textContent = `Round ${roundNo}`

    if (playerChoice === computerChoice) {
        result = "It's a Draw"
    }
    else
    if (playerChoice === "rock" && computerChoice === "scissors" ||
        playerChoice === "paper" && computerChoice === "rock" ||
        playerChoice === "scissors" && computerChoice === "paper") {
            result = "You Win"
            playerRoundsWon++
            playerScore.textContent = `Player - ${playerRoundsWon}`
        } else {
            result = "You Lose"
            computerRoundsWon++
            computerScore.textContent = `Computer - ${computerRoundsWon}`
        } return {playerChoice, computerChoice, result};
}

//  getPlayerChoice
const chooseRock = document.querySelector("#chooseRock")
const choosePaper = document.querySelector("#choosePaper")
const chooseScissors = document.querySelector("#chooseScissors")

chooseRock.addEventListener("click", () => {
    const round = playRound("rock")
    announce(round)
})
choosePaper.addEventListener("click", () => {
    const round = playRound("paper")
    announce(round)
})
chooseScissors.addEventListener("click", () => {
    const round = playRound("scissors")
    announce(round)
})

//  announceResults
const announceResult = document.querySelector("#announceResult")

const computerResponse = document.querySelector("#computerResponse")
const playerResponse = document.querySelector("#playerResponse")

function announce(resultObj) {
    const {playerChoice, computerChoice, result} = resultObj;

    computerResponse.textContent = `Computer played ${computerChoice}`
    playerResponse.textContent = `Player played ${playerChoice}`

    announceResult.textContent = `${result}`
}