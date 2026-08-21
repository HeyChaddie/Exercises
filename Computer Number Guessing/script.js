"use strict";

function randomNummer() {
  return Math.ceil(Math.random() * 100);
}

let randomNr;

const startBtn = document.querySelector(".startBotBtn");
const highBtn = document.querySelector(".highBtn");
const lowBtn = document.querySelector(".lowBtn");
const winBtn = document.querySelector(".winBtn");

const numberReveal = document.querySelector(".numberReveal");

startBtn.addEventListener("click", function () {
  randomNr = randomNummer();

  numberReveal.textContent = randomNr;
});

highBtn.addEventListener("click", function () {
  const halfHigh = 2;

  randomNr = randomNr + randomNr / halfHigh;
  numberReveal.textContent = Math.ceil(randomNr);
});

lowBtn.addEventListener("click", function () {
  const halfLow = 2;

  randomNr = randomNr + randomNr / halfLow;
  numberReveal.textContent = Math.ceil(randomNr);
});
