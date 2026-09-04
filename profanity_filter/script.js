const curseWords = [
  { bad: "var", good: "const" },
  { bad: "float", good: "grid" },
  { bad: "marquee", good: "just don't" },
];

const theText = document.querySelector(".text");
const htmlText = theText.innerHTML;

const test = htmlText.indexOf(curseWords.bad);

console.log(test);

const filterBtn = document.querySelector(".filterBtn");
