const choices = ['rock', 'paper', 'scissors'];

const output = document.querySelector("#output");
const msg = document.querySelector("#msg");
const scoreText = document.querySelector("#score");
const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        playRound(button.textContent, getComputerChoice());
    })
});

let humanScore = 0;
let computerScore = 0;


function getComputerChoice(){
    n = Math.floor(Math.random() * 3);
    return choices[n];
}

function playRound(humanChoice, computerChoice){
    if (humanChoice === computerChoice){
        msg.textContent = `draw! you both picked ${humanChoice}`;
    }
    else if (humanChoice === null){
        ++computerScore;
        msg.textContent = `choice invalid you forfeit this round`;
    }
    else if (choices.includes(humanChoice)) 
        {switch (humanChoice){
            case 'rock':
                if (computerChoice === 'paper'){
                    msg.textContent = `you lose! ${computerChoice} beats ${humanChoice}`;
                    computerScore++;
                }
                else if(computerChoice === 'scissors'){
                    msg.textContent = `you win! ${humanChoice} beats ${computerChoice}`;
                    humanScore++;
                }
                break
            
            case 'paper':
                if (computerChoice === 'scissors'){
                    ++computerScore;
                    msg.textContent = `you lose! ${computerChoice} beats ${humanChoice}`;
                }
                else if(computerChoice === 'rock'){
                    ++humanScore;
                    msg.textContent = `you win! ${humanChoice} beats ${computerChoice}`;
                }
                break;

            case 'scissors':
                if (computerChoice === 'rock'){
                    ++computerScore;
                    msg.textContent = `you lose! ${computerChoice} beats ${humanChoice}`;
                }
                else if(computerChoice === 'paper'){
                    ++humanScore;
                    msg.textContent = `you win! ${humanChoice} beats ${computerChoice}`;
                }
                break;
            }
    }
    else{
        ++computerScore;
        msg.textContent = `${humanChoice} is invalid! you Forteit this round`;
    }
    scoreText.textContent = `Score: Human ${humanScore} | computer ${computerScore}`;
    if (humanScore === 5 || computerScore === 5){
        buttons.forEach((button) => {
            button.disabled = true;
        })
        const winnerText = document.createElement("p");
        humanScore === 5 ? winnerText.textContent = "You win!!" : winnerText.textContent = "You Lose!!";
        output.appendChild(winnerText);

        const resetBtn = document.createElement("button");
        resetBtn.addEventListener("click", () =>{
            resetGame(winnerText)
            output.removeChild(resetBtn);
        })
        resetBtn.textContent = "restart?"
        output.appendChild(resetBtn);
    }
}

function resetGame(winnerText){
    humanScore = 0;
    computerScore = 0;
    output.removeChild(winnerText);
    msg.textContent = '';
    scoreText.textContent = '';
    buttons.forEach((button) =>{
        button.disabled = false;
    })
}


