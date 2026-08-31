const vehicles = [
  { type: "Bus", fuel: "Diesel", passengers: 45, stops: ["Nørrebrogade", "Elmegade"] },
  { type: "Bil", fuel: "Benzin", passengers: 4, ownedBy: "Klaus" },
  { type: "Cykel", fuel: "Rugbrød", passengers: 0, ownedBy: "Jonas", isElectric: true },
  { type: "Bil", passengers: 5, ownedBy: "Elon", isElectric: true },
  { type: "MC", fuel: "Benzin", passengers: 2, ownedBy: "Fonda" },
  { type: "Cykel", fuel: "Rugbrød", passengers: 2, ownedBy: "Vingegård", isTandem: true },
  { type: "MC", fuel: "Benzin", passengers: 2, ownedBy: "Yolanda" },
  { type: "Knallert", fuel: "Benzin", passengers: 1, ownedBy: "Børge" },
  { type: "Knallert", fuel: "Benzin", passengers: 1, ownedBy: "Jonas" },
  { type: "Løbehjul", passengers: 1, isElectric: true },
];

const tbodyPointer = document.querySelector("tbody");

showTheseVehicles(vehicles);

const electricVehicles = vehicles.filter((vehicles) => vehicles.isElectric);
const twoSeats = vehicles.filter((vehicles) => vehicles.passengers > 2);
const jonasOwns = vehicles.filter((vehicles) => vehicles.ownedBy === "Jonas");
const twoRyebread = vehicles.filter((vehicles) => vehicles.fuel === "Rugbrød" && vehicles.passengers >= 1);

const filterBtns = document.querySelectorAll("button");

filterBtns.forEach((filterBtn) => {
  filterBtn.addEventListener("click", function () {
    if (filterBtn.dataset.vehicle === "Electric") {
      showTheseVehicles(electricVehicles);
    } else if (filterBtn.dataset.vehicle === "twoSeats") {
      showTheseVehicles(twoSeats);
    } else if (filterBtn.dataset.vehicle === "jonasOwns") {
      showTheseVehicles(jonasOwns);
    } else if (filterBtn.dataset.vehicle === "twoRyebread") {
      showTheseVehicles(twoRyebread);
    }
  });
});

function showTheseVehicles(arr) {
  tbodyPointer.innerHTML = "";

  arr.forEach((each) => {
    tbodyPointer.innerHTML += `<tr>
      <td>${each.type}</td>
      <td>${each.fuel}</td>
      <td>${each.passengers}</td>
      <td>${each.stops}</td>
      <td>${each.ownedBy}</td>
      <td>${each.isElectric}</td>
      <td>${each.isTandem}</td>
    </tr>`;
  });
}
