let randonNumber = parseInt((Math.random()*100)+1);

const submit = document.querySelector('#sub');
const input = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const ramaining = document.querySelector('.resultPress');
const startOver = document.querySelector('#sub');
const lowOrHi = document.querySelector('.lowOrHi');

const p = document.createElement('p');

let previousGuesses =[];
let numGuesses = 1;
let playGame = true;

if(playGame){
    submit.addEventListener('click',function(e){
        e.preventDefault();
        const guess = parseInt(userInput.value);
        validGuess(guess);
    });
}
function validGuess(guess){
    if(isNaN(guess)){
        alert('Please enter a valid number');
    }else if(guess < 1){
        alert('Please enter a number greater than 11');
    }else if(guess > 100){
        alert('Please enter a number less than 500!');
    }
    
}





