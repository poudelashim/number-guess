//defining secret number//
const secretNumber = Math.trunc(Math.random() * 20) + 1;

//sate variable//
let score = 20;

document.querySelector('.number').textContent = secretNumber;

//game logic
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  //when there is no input
  if (!guess) {
    document.querySelector('.message').textContent = '⛔ No Number !';
    document.querySelector('body').style.background = '#E6816B ';
  } else if (guess === secretNumber) {
    //when player wins the game
    document.querySelector('.message').textContent =
      '🥳 Well done,  Correct Number';
    document.querySelector('body').style.background = '#60b347';

    //when player inputs high number
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📈 Too High!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💥 You Lost The Game';
      document.querySelector('.score').textContent = 0;
    }
  } else if (guess < secretNumber) {
    //when input is too low
    if (score > 1) {
      document.querySelector('.message').textContent = '📉Too Low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💥 You Lost The Game';
      document.querySelector('.score').textContent = 0;
    }
  }
});
