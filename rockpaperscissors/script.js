"use strict";
let computerensValg;
let brugerensValg;

const player1 = document.querySelector("#player1");
const player2 = document.querySelector("#player2");

const lose = document.querySelector("#lose");
const win = document.querySelector("#win");
const draw = document.querySelector("#draw");

const rockBtn = document.querySelector(".rock");
const paperBtn = document.querySelector(".paper");
const scissorsBtn = document.querySelector(".scissors");

rockBtn.addEventListener("click", rockClicked);
function rockClicked() {
  console.log("Rock Clicked");
  brugerensValg = 1;
  draw.classList.add("hidden");
  win.classList.add("hidden");
  lose.classList.add("hidden");

  player1.classList.remove("rock, paper, scissors");

  player2.classList.remove("rock, paper, scissors");

  traefferValg();
}

paperBtn.addEventListener("click", paperClicked);
function paperClicked() {
  console.log("Paper Clicked");
  brugerensValg = 2;
  draw.classList.add("hidden");
  win.classList.add("hidden");
  lose.classList.add("hidden");

  player1.classList.remove("rock, paper, scissors");

  player2.classList.remove("rock, paper, scissors");

  traefferValg();
}

scissorsBtn.addEventListener("click", scissorClicked);
function scissorClicked() {
  console.log("Scissor Clicked");
  brugerensValg = 3;
  draw.classList.add("hidden");
  win.classList.add("hidden");
  lose.classList.add("hidden");

  player1.classList.remove("rock, paper, scissors");

  player2.classList.remove("rock, paper, scissors");

  traefferValg();
}

function traefferValg() {
  //console.log("brugerensValg;", brugerensValg);
  computerensValg = comValg();
  function comValg() {
    return Math.ceil(Math.random() * 3);
  }
  nedTaelling();
}

function nedTaelling() {
  player1.classList.add("shake");
  player2.classList.add("shake");
  player1.addEventListener("animationend", visValg);
}

function visValg() {
  player1.classList.remove("shake");
  player2.classList.remove("shake");

  if (brugerensValg === 1) {
    player1.classList.add("rock");
  } else if (brugerensValg === 2) {
    player1.classList.add("paper");
  } else if (brugerensValg === 3) {
    player1.classList.add("scissors");
  }

  if (computerensValg === 1) {
    player2.classList.add("rock");
  } else if (computerensValg === 2) {
    player2.classList.add("paper");
  } else if (computerensValg === 3) {
    player2.classList.add("scissors");
  }

  afgoerResultat();
}

function afgoerResultat() {
  console.log("brugerensValg", brugerensValg);
  console.log("computerensValg", computerensValg);
  if (brugerensValg === computerensValg) {
    draw.classList.remove("hidden");
    console.log("A draw!");
  } else if (brugerensValg === 1 && computerensValg === 3) {
    win.classList.remove("hidden");
    console.log("Nice!");
  } else if (brugerensValg === 2 && computerensValg === 1) {
    win.classList.remove("hidden");
    console.log("Nice!");
  } else if (brugerensValg === 3 && computerensValg === 2) {
    win.classList.remove("hidden");
    console.log("Nice!");
  } else {
    lose.classList.remove("hidden");
    console.log("Damn!");
  }
}

//
//                   _ |\_
//                   \` ..\
//              __,.-" =__Y=
//            ."        )
//      _    /   ,    \/\_
//     ((____|    )_-\ \_-`
// jgs  `-----'`-----` `--`
//
