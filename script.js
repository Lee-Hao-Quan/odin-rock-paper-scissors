let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const computerOptions = ['rock', 'paper', 'scissors'];

    let computerChoice = Math.floor(Math.random() * 3);
    return computerOptions[computerChoice];
}

function getHumanChoice() {
    const humanChoices = ['rock', 'paper', 'scissors', 'quit']
    let humanChoice = prompt('Whats your choice, rock paper or scissors?')

    if(humanChoice == null){
        humanChoice = 'quit';
    }

    if (!humanChoices.includes(humanChoice)) {
        console.log('Please choose either rock, paper or scissors');
        return getHumanChoice()
    }

    return humanChoice;
}

function playRound(computerChoice, humanChoice) {
    if (computerChoice == humanChoice) {
        console.log('Tie!');
    }

    // possibilities for human losing
    if (
        (humanChoice == 'rock' && computerChoice == 'paper') ||
        (humanChoice == 'scissors' && computerChoice == 'rock') ||
        (humanChoice == 'paper' && computerChoice == 'scissors')
    ) {
        console.log(`
            Your choice: ${humanChoice}
            Computer choice: ${computerChoice}
            You lose! ${computerChoice} beats ${humanChoice}
        `)
    }

    // Possibilities for human winning
    if (
        (humanChoice == 'paper' && computerChoice == 'rock') ||
        (humanChoice == 'rock' && computerChoice == 'scissors') ||
        (humanChoice == 'scissors' && computerChoice == 'paper')
    ) {
        console.log(`
            Your choice: ${humanChoice}
            Computer choice: ${computerChoice}
            You win! ${humanChoice} beats ${computerChoice}
        `)
    }
}

function main() {
    let running = true;

    while (running) {
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();

        if (humanSelection == 'quit') running = false;

        playRound(computerSelection, humanSelection);
    }
}

main();
