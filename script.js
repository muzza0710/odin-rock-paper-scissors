const choices = ['rock', 'paper', 'scissors'];

let humanScore = 0;
let computerScore = 0;

function getComputerChoice(){
    n = Math.floor(Math.random() * 3);
    return choices[n];
}

function getHumanChoice(){
    let choice = prompt('choose one from: rock, paper, scissors').toLowerCase()
    if (choices.includes(choice)){
        return choice;
    }
    else {
        console.warn(choice,` not valid`);
        return null;
    }
}

function playRound(humanChoice, computerChoice){
    if (humanChoice === computerChoice){
        console.log(`draw! you both picked ${humanChoice}`);
        return;
    }
    else {switch (humanChoice){
        case 'rock':
            if (computerChoice === 'paper'){
                console.log(`you lose! ${computerChoice} beats ${humanChoice}`);
                computerScore++;
            }
            else if(computerChoice === 'scissors'){
                console.log(`you win! ${humanChoice} beats ${computerChoice}`);
                humanScore++;
            }
            break
        
        case 'paper':
            if (computerChoice === 'scissors'){
                console.log(`you lose! ${computerChoice} beats ${humanChoice}`);
                computerScore++;
            }
            else if(computerChoice === 'rock'){
                console.log(`you win! ${humanChoice} beats ${computerChoice}`);
                humanScore++;
            }
            break;

        case 'scissors':
            if (computerChoice === 'rock'){
                console.log(`you lose! ${computerChoice} beats ${humanChoice}`);
                computerScore++;
            }
            else if(computerChoice === 'paper'){
                console.log(`you win! ${humanChoice} beats ${computerChoice}`);
                humanScore++;
            }
            break;
        }
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();
playRound(humanSelection, computerSelection);

console.log(`human score: ${humanScore} choice: ${humanSelection}`);
console.log(`computer score: ${computerScore} choice: ${computerSelection}`);
