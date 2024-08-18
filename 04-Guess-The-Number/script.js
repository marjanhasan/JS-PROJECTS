const form = document.querySelector("#form");
const guessField = document.querySelector("#guessField");
const guessedNumbers = document.querySelector("#guessedNumbers");
let guessedNumbersList = [];
const remainingGuesses = document.querySelector("#remainingGuesses");
let remainingGuessesNumber = 5;
const resultSlot = document.querySelector("#resultSlot");
let randomNumber = parseInt(Math.random() * 10 + 1);
let winNumbers = 0;
form.addEventListener("submit", (e) => {
  e.preventDefault();
  let num = parseInt(guessField.value);
  validateNumbers(num);
});

const validateNumbers = (num) => {
  if (isNaN(num)) {
    alert(`Please input valid number`);
  } else if (num <= 0 || num > 10) {
    alert(`Please give number between 1 and 100`);
  } else {
    guessedNumbersListControl(num);
  }
};

const guessedNumbersListControl = (num) => {
  guessedNumbersList.push(num);
  guessedNumbers.innerHTML = guessedNumbersList;
  remainingGuessesNumber--;
  remainingGuesses.innerHTML = remainingGuessesNumber;
  guessField.value = "";

  if (randomNumber === num) {
    alert(`You Guessed the right number ${num}`);
    endGameControl();
  } else {
    resultSlot.innerHTML = `You Guessed the wrong number ${num}`;
  }

  if (remainingGuessesNumber === 0) {
    alert(`The right number was ${randomNumber}`);
    endGameControl();
  }
};

const endGameControl = () => {
  randomNumber = parseInt(Math.random() * 10 + 1);
  remainingGuessesNumber = 5;
  remainingGuesses.innerHTML = remainingGuessesNumber;
  guessedNumbersList = [];
  guessedNumbers.innerHTML = guessedNumbersList;
  resultSlot.innerHTML = `The Game Started Again`;
};
