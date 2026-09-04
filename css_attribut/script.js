"use strict";

document.querySelector("h1").addEventListener("click", color);

function color(prut) {
  console.log("prut.target", prut.target);
  const filter = prut.target.dataset.filter;
  prut.target.dataset.filter = filter === "fox" ? "bat" : "fox";

  //if (prut.target.dataset.filter === "fox") {
  //  prut.target.dataset.filter = "bat";
  //} else {
  //  prut.target.dataset.filter = "fox";
  //}
}
