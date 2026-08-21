let colorParagraph = document.getElementById("color");
colorParagraph.textContent = "#FFFFFF";

document.getElementById("generate").onclick = function () {
  let randomColor =
    "#" +
    Math.floor(Math.random() * 16777215)
      .toString(16)
      .toUpperCase();
  colorParagraph.textContent = randomColor;
  document.body.style.backgroundColor = randomColor;
};
