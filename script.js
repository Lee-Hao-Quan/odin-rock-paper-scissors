let humanScore = 0;
let computerScore = 0;

let humanScoreCounter = document.getElementById('human-score');
let computerScoreCounter = document.getElementById('computer-score');

const choiceButtons = document.querySelectorAll('.human-choice');
const verdictMsg = document.getElementById('verdict');

function getComputerChoice() {
    const computerOptions = ['rock', 'paper', 'scissors'];
    let computerChoice = Math.floor(Math.random() * 3);
    return computerOptions[computerChoice];
}


const humanChoices = ['rock', 'paper', 'scissors', 'quit'];

let humanChoice = '';

choiceButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
    humanChoice = e.target.value;

    if (humanChoice == null) {
        humanChoice = 'quit';
    }
    if (!humanChoices.includes(humanChoice)) {
        console.log('Please choose either rock, paper or scissors');
    }
    console.log(humanChoice)

    playRound(getComputerChoice(), humanChoice)
});
})


function playRound(computerChoice, humanChoice) {
    if (computerChoice == humanChoice) {
        console.log('Tie!');
    }
    // possibilities for human losing
    if ((humanChoice == 'rock' && computerChoice == 'paper') ||
        (humanChoice == 'scissors' && computerChoice == 'rock') ||
        (humanChoice == 'paper' && computerChoice == 'scissors')) {
        verdictMsg.textContent = `
            Your choice: ${humanChoice}
            Computer choice: ${computerChoice}
            You lose! ${computerChoice} beats ${humanChoice}
        `;
        computerScore++;
        computerScoreCounter.textContent = computerScore;
    }
    // Possibilities for human winning
    if ((humanChoice == 'paper' && computerChoice == 'rock') ||
        (humanChoice == 'rock' && computerChoice == 'scissors') ||
        (humanChoice == 'scissors' && computerChoice == 'paper')) {
        verdictMsg.textContent = `
            Your choice: ${humanChoice}
            Computer choice: ${computerChoice}
            You win! ${humanChoice} beats ${computerChoice}
        `;
        humanScore++;
        humanScoreCounter.textContent = humanScore;
    }
    console.log('Human Score: ' + humanScore, '\nComputer Score: ' + computerScore);
}
