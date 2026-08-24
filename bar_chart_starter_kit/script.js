const list = document.querySelector("ul");
const valueArr = [];
setInterval(generateColumns, 500);

function generateColumns() {
  const randomNum = Math.ceil(Math.random() * 100);
  valueArr.push(randomNum);
  if (valueArr.length > 20) {
    //console.log("længere end 20");
    valueArr.shift();
    list.firstElementChild.remove();
  }

  const li = document.createElement("li");
  li.style.setProperty("--height", randomNum);
  list.appendChild(li);

  console.log("valueArr", valueArr);
}
