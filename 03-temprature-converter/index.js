document.getElementById("convert").onclick = function () {
  let temp = parseFloat(document.getElementById("temp").value);
  let unit = document.getElementById("unit").value;

  let convetedTemp =
    unit === "C"
      ? (temp * 9) / 5 + 32 // Convert Celsius to Fahrenheit
      : (temp - 32) * (5 / 9); // Convert Fahrenheit to Celsius
  document.getElementById("converted").innerText = convetedTemp.toFixed(2);
};
