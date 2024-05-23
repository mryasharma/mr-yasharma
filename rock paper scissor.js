let userScore = 0;
let computerScore = 0;
const result = document.getElementById("msg_game");
const user_score = document.getElementById("userScore");
const Computer_score = document.getElementById("compScore");
const rock_div = document.getElementById('Rock');
const paper_div = document.getElementById('Paper');
const scissors_div = document.getElementById('Scissor');

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissor'];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

function win(userChoice, computerChoice) {
    userScore++;
    user_score.textContent = userScore;
    result.textContent = `your ${(userChoice)} beats ${computerChoice} u Win!!`;
    result.style.backgroundColor="green"
}

function lose(userChoice, computerChoice) {
    computerScore++;
    Computer_score.textContent = computerScore;
    result.textContent = ` ${computerChoice} beats your ${(userChoice)}  u Loss`;
    result.style.backgroundColor="red"
}

function draw(userChoice, computerChoice) {
    result.textContent = "Its draw Play again"
    result.style.backgroundColor="rgb(176, 91, 255)"
}

function game(userChoice) {
    const computerChoice = getComputerChoice();
    
    if (userChoice === 'rock' && computerChoice === 'scissor' ||
        userChoice === 'paper' && computerChoice === 'rock' ||
        userChoice === 'scissor' && computerChoice === 'paper') {
        win(userChoice, computerChoice);
    } else if (userChoice === computerChoice) {
        draw(userChoice, computerChoice);
    } else {
        lose(userChoice, computerChoice);
    }
}
rock_div.addEventListener('click', () => game('rock'));
paper_div.addEventListener('click', () => game('paper'));
scissors_div.addEventListener('click', () => game('scissor'));
