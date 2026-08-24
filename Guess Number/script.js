import { randomNummer } from "../utils_lib/utils_lib.js";
import { $ } from "../utils_lib/utils_lib.js";
//function randomNummer(max) {
//return Math.ceil(Math.random() * max);
//}

const randomNr = randomNummer(100);

console.log("randomNr", randomNr);

const numberReveal = document.querySelector(".numberReveal");
const guessClick = document.querySelector(".guessClick");
const nrResult = document.querySelector(".nrResult");
const guessedNr = document.querySelector(".guessedNr");

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
