const name = "Richard Andersen Salcedo";

const firstSpace = name.indexOf(" ");
const lastSpace = name.lastIndexOf(" ");

console.log(name.substring(0, firstSpace));
console.log(name.substring(firstSpace + 1, lastSpace));
console.log(name.substring(lastSpace + 1));

const fullName = "Albus Percival Wulfric Brian Dumbledore";

const wizardFirst = fullName.indexOf(" ");
const wizardLast = fullName.lastIndexOf(" ");

console.log(fullName.substring(0, wizardFirst));
console.log(fullName.substring(wizardFirst + 1, wizardLast));
console.log(fullName.substring(wizardLast + 1));
