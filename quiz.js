'use strict';

function checkAnswer() {
  const correctAnswer = '4';
  const userAnswer = document.querySelector('[name="quiz"]').value;

  if (correctAnswer === userAnswer) {
    document.getElementById('feedback').textContent = 'Correct! Well done.';
  } else {
    document.getElementById('feedback').textContent =
      "That's incorrect. Try again!";
  }
}
