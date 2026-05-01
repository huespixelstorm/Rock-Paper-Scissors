function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * 3)];
}

function results(player, computer) {
    if (player === computer)
        return "It's a Draw";

    if (
    (player === "rock" && computer === "scissors") ||
    (player === "scissors" && computer === "paper") ||
    (player === "paper" && computer === "rock") 
    )
    {
        return "You Win!"
    } else {
        return "You Lose!"
    }
}