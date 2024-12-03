const choices = ['rock', 'paper', 'scissors'];

let humanScore = 0;
let computerScore = 0;

function getComputerChoice(){
    n = Math.floor(Math.random() * 3);
    return choices[n];
}

function getHumanChoice(){
    let choice = prompt('choose one from: rock, paper, scissors');
    if (choice){
        choice.trim().toLocaleLowerCase();
    }
    return choice;
}

function playRound(humanChoice, computerChoice){
    if (humanChoice === computerChoice){
        console.log(`draw! you both picked ${humanChoice}`);
    }
    else if (humanChoice === null){
        ++computerScore;
        console.log(`choice invalid you forfeit this round`);
    }
    else if (choices.includes(humanChoice)) 
        {switch (humanChoice){
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
                    ++computerScore;
                    console.log(`you lose! ${computerChoice} beats ${humanChoice}`);
                }
                else if(computerChoice === 'rock'){
                    ++humanScore;
                    console.log(`you win! ${humanChoice} beats ${computerChoice}`);
                }
                break;

            case 'scissors':
                if (computerChoice === 'rock'){
                    ++computerScore;
                    console.log(`you lose! ${computerChoice} beats ${humanChoice}`);
                }
                else if(computerChoice === 'paper'){
                    ++humanScore;
                    console.log(`you win! ${humanChoice} beats ${computerChoice}`);
                }
                break;
            }
    }
    else{
        ++computerScore;
        console.log(`${humanChoice} is invalid! you Forteit this round`);
    }
    console.log(`Score: Human ${humanScore} | computer ${computerScore}`);
}

function playGame(){
    for (i = 0; i < 5; i++){
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
    }

    if (humanScore > computerScore){
        console.log(`You win! ${humanScore} - ${computerScore}`);
    }
    else if (humanScore < computerScore){
        console.log(`You lose! ${computerScore} - ${humanScore}`);
    }
    else if (humanScore === computerScore){
        console.log(`Draw! ${humanScore} - ${computerScore}`);
    }
}

playGame();