const colors = {
  dark: { theme: "dark" },
  light: { theme: "light" },
  fun: { theme: "fun" },
};

const select = document.querySelector("select");
select.addEventListener("change", colorChange);

function colorChange(evt) {
  const selectedColor = colors[select.value];

  document.querySelector("[data-theme]").setAttribute("data-theme", selectedColor.theme);

  setTheme(evt.target.value);
}

function setTheme(theme) {
  console.log("theme", theme);
  localStorage.setItem("tsTheme", theme);
  document.querySelector("[data-theme]").dataset.theme = theme;
}
