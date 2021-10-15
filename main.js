let randomNumber = Math.floor(Math.random() * 100) + 1;

const guesses = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');

const guessSubmit = document.querySelector('.guessSubmit');
const guessField = document.querySelector('.guessField');

let guessCount = 1;
let resetButton;
guessField.focus();

guessSubmit.addEventListener('click', checkGuess)

function checkGuess() {
    const userGuess = Number(guessField.value);

    if (guessCount === 1) {
      guesses.textContent = 'Все предположения: ';
    }
    guesses.textContent += userGuess + ' ';
  
    if (userGuess === randomNumber) {
      lastResult.textContent = "Поздравляю! Ты экстрасенс!";
      lastResult.style.backgroundColor = '#90be6d';
      lastResult.style.color = '#fff';
      lowOrHi.textContent = '';
      setGameOver();
    } else if (guessCount === 10) {
      lastResult.textContent = '!!!ТЫ ПРОИГРАЛ!!!';
      setGameOver();
    } else {
      lastResult.textContent = 'Неверно!';
      lastResult.style.backgroundColor = '#EF476F';
      lastResult.style.color = '#fff';
      if(userGuess < randomNumber) {
        lowOrHi.textContent = 'Последнее предположение было слишком маленьким!';
      } else if(userGuess > randomNumber) {
        lowOrHi.textContent = 'Последнее предположение было слишком большим!';
      }
    }
  
    guessCount++;
    guessField.value = '';
    guessField.focus();
  }

  function setGameOver() {
    guessField.disabled = true;
    guessSubmit.disabled = true;
    resetButton = document.createElement('button');
    resetButton.textContent = 'Начать занаово';
    document.body.appendChild(resetButton);
    resetButton.addEventListener('click', resetGame);
  }

function resetGame() {
  guessCount = 1;

  const resetParas = document.querySelectorAll('.resultParas p');
  for (let i = 0 ; i < resetParas.length ; i++) {
    resetParas[i].textContent = '';
  }

  resetButton.parentNode.removeChild(resetButton);

  guessField.disabled = false;
  guessSubmit.disabled = false;
  guessField.value = '';
  guessField.focus();

  lastResult.style.backgroundColor = '#577590';

  randomNumber = Math.floor(Math.random() * 100) + 1;
}