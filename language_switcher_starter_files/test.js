"use strict";

const texts = {
  de: {
    texts: [
      { text: "Das Bot", location: ".header" },
      { text: "Das Ro-Bot", location: ".footer" },
    ],
  },
  da: {
    texts: [
      { text: "Båden", location: ".header" },
      { text: "Robotten", location: ".footer" },
    ],
  },
};
console.log(document.querySelector(".header"));
console.log(document.querySelector(".footer"));

//making a const for the elements where I want to change the languages
const headOne = document.querySelector("h1");
const headTwo = document.querySelector("h2");

//making a const for the select element
const langChoicer = document.getElementById("language");

//making a function for the select element, depending on choice
langChoicer.addEventListener("change", function () {
  //a const depending on value from the select element
  const choice = langChoicer.value;

  //if the chosen value is danish, it will pick from the array of da
  if (choice === "danish") {
    //console.log(texts.da.texts[0].text);
    //console.log(texts.da.texts[1].text);

    //if the value is true, it will change the text in chosen referals, which is h1 and h2 in this case
    headOne.textContent = texts.da.texts[0].text;
    headTwo.textContent = texts.da.texts[1].text;

    //if the chosen value is german, it will pick from the array of de
  } else if (choice === "german") {
    //console.log(texts.de.texts[0].text);
    //console.log(texts.de.texts[1].text);

    //if the value is true, it will change the text in chosen referals, which is h1 and h2 in this case
    headOne.textContent = texts.de.texts[0].text;
    headTwo.textContent = texts.de.texts[1].text;
  }
});
