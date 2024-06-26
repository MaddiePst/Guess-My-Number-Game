'use strict';

/*console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct Number!';
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value)
*/
const secretNumber =Math.trunc(Math.random()*20) +1;
let score=20;
let highscore =0;

const displayMessage =function(message){
  document.querySelector('.message').textContent= message
}

document.querySelector('.check').addEventListener('click',function () {
const guess = Number (document.querySelector('.guess').value);
console.log(guess, typeof guess);
// When there is no imput
if(!guess){
  displayMessage('No Number!');

  // When player wins
} else if(guess === secretNumber){
  displayMessage('Correct Number!');
  document.querySelector('body').style.backgroundColor = '#60b347';
  document.querySelector('.number').style.width ='30rem';
  document.querySelector('.number').textContent = secretNumber;
  if(score > highscore){
    highscore=score;
    document.querySelector('.highscore').textContent = highscore;
  }
  
// When guess is not = with secretNumber
} else if(guess !== secretNumber){
  if(score>1){
  displayMessage((guess > secretNumber) ? 'Too high!' : 'Too Low');
  score--;
  document.querySelector('.score').textContent=score;
  }else{
    displayMessage('You lost the game!');
    document.querySelector('.score').textContent=0;
  }
}
});

// Again Button
document.querySelector('.again').addEventListener('click',function(){
 document.querySelector('.score').textContent = 20;
 document.querySelector('.message').textContent = 'Start Guessing...';
 document.querySelector('.guess').value = ' ';
 document.querySelector('.number').textContent ='?';
 document.querySelector('.number').style.width ='15rem';
 document.querySelector('body').style.backgroundColor = '#222';
})