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

console.log(`Human choice: ${getHumanChoice()}`);
console.log(`computer choice: ${getComputerChoice()}`);