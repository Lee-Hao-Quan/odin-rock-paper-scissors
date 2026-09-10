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

    if (humanChoice == 'quit') {
        resetGame();
        verdictMsg.textContent = "Game resetted successfully"
    }

    playRound(getComputerChoice(), humanChoice)
});
})


function playRound(computerChoice, humanChoice) {
    if (computerChoice == humanChoice) {
        verdictMsg.textContent = 'Tie!'
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

    if (humanScore === 5){
        verdictMsg.textContent = "Human Wins!"
        resetGame()
    } else if(computerScore === 5){
        verdictMsg.textContent = "Computer Wins!"
        resetGame()
    }
}

function resetGame(){
    humanScore = 0;
    computerScore = 0;
    
    humanScoreCounter.textContent = humanScore;
    computerScoreCounter.textContent = computerScore;
}
