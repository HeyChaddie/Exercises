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

const etNavn = "Anders Jens Andersen";

const firstName = etNavn.substring(0, etNavn.indexOf(" "));
const middleName = etNavn.substring(etNavn.indexOf(" ") + 1, etNavn.lastIndexOf(" "));
const lastName = etNavn.substring(etNavn.lastIndexOf(" ") + 1);

console.log("firstName", `${firstName}`);
console.log("middleName", `${middleName}`);
console.log("lastName", `${lastName}`);

console.log(etNavn.split(" "));

const splittedString = etNavn.split(" ");
console.log("splittedString", splittedString);
console.log(splittedString.join(" "));
