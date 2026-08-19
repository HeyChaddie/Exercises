"use strict";

function randomNummer() {
  return Math.ceil(Math.random() * 10);
}

const numberReveal = document.querySelector(".numberReveal");
const guessedNr = document.querySelector(".guessedNr");
const guessClick = document.querySelector(".guessClick");
const nrResult = document.querySelector(".nrResult");

guessClick.addEventListener("click", function () {
  const randomNr = randomNummer();
  const guess = Number(guessedNr.value);

  numberReveal.textContent = randomNr;

  if (randomNr > guess) {
    nrResult.textContent = "For lavt!";
  } else if (randomNr < guess) {
    nrResult.textContent = "For højt!";
  } else {
    nrResult.textContent = "Yippy!";
  }
});
