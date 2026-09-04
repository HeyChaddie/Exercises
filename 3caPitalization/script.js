"use strict";

const name = "PETER";

console.log("3capitalized name", name.substring(0, 2).toLowerCase());
console.log("3capitalized name", name.substring(2, 3).toLowerCase());
console.log("3capitalized name", name.substring(3).toLowerCase());

console.log(
  "3capitalized name",
  `${name.substring(0, 2).toLowerCase()}${name.substring(2, 3).toLowerCase()}${name.substring(3).toLowerCase()}`,
);
