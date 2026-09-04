const colors = {
  dark: { theme: "dark", location: "body" },
  light: { theme: "light", location: "body" },
  fun: { theme: "fun", location: "body" },
};

const select = document.querySelector("select");
select.addEventListener("change", colorChange);

function colorChange() {
  const selectedColor = colors[select.value];

  document.querySelector("[data-theme]").setAttribute("data-theme", selectedColor.theme);
}
