const bc = [
  { name: "Hvidevarer", link: "/hvidevarer" },
  { name: "Vaskemaskiner", link: "/hvidevarer/vaskemaskiner" },
  { name: "Bosch", link: "/hvidevarer/vaskemaskiner/bosch/" },
];

const genBtn = document.querySelector(".breadBtn");
const breadNav = document.querySelector(".breadNav");

genBtn.addEventListener("click", addBread);

function addBread() {
  //console.log("Brød krummer!");
  document.querySelector("ul").innerHTML = genBread();

  const liElm = document.createElement("li");
  breadNav.appendChild(liElm);
}

function genBread() {}
