let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const computerChoiceOptions = ["rock", "paper", "scissors"];
    return computerChoiceOptions[
        Math.floor(Math.random() * computerChoiceOptions.length)
    ];
}

function getHumanChoice() {
    return prompt("Options: 'rock','paper','scissors'").toLowerCase();
}

function playRound(humanChoice, computerChoice) {
    let result;

    if (humanChoice === computerChoice) {
        result = "It's a Tie!!!";
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        result = "You win!";
        humanScore += 1;
    } else {
        result = "Computer wins!";
        computerScore += 1;
    }
    console.log(result);
}

function playGame() {
    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }
    if (humanScore > computerScore) {
        console.log(`Human Wins the Match: ${humanScore} : ${computerScore}`);
    } else {
        console.log(
            `Computer Wins the Match: ${computerScore} : ${humanScore}`,
        );
    }
}

playGame();
