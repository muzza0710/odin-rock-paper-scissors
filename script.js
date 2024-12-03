console.log('hello world!');

function computerChoice(){
    const choices = ['rock', 'paper', 'scissors'];
    n = Math.floor(Math.random() * 3);
    return choices[n];
}

console.log(`computer choice: ${computerChoice()}`);