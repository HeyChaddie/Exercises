"use strict";

function randomNummer() {
  return Math.ceil(Math.random() * 10);
}

const numberReveal = document.querySelector(".numberReveal");
const guessClick = document.querySelector(".guessClick");
const nrResult = document.querySelector(".nrResult");
const guessedNr = document.querySelector(".guessedNr");

const randomNr = randomNummer();

guessClick.addEventListener("click", function () {
  const guess = Number(guessedNr.value);

  if (randomNr > guess) {
    nrResult.textContent = "For lavt!";
  } else if (randomNr < guess) {
    nrResult.textContent = "For højt!";
  } else {
    nrResult.textContent = "Yippy, you guessed right!";
    numberReveal.textContent = randomNr;
  }

  console.log(randomNr);
});
