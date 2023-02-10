const form = document.querySelector("#form");
const numStocks1Input = document.querySelector("#numStocks1");
const price1Input = document.querySelector("#price1");
const numStocks2Input = document.querySelector("#numStocks2");
const price2Input = document.querySelector("#price2");
const resultDiv = document.querySelector("#result");
const resetButton = document.getElementById("reset");

form.addEventListener("submit", event => {
  event.preventDefault();

  const numStocks1 = parseInt(numStocks1Input.value);
  const price1 = parseFloat(price1Input.value);
  const numStocks2 = parseInt(numStocks2Input.value);
  const price2 = parseFloat(price2Input.value);

  const totalStocks = numStocks1 + numStocks2;
  const totalCost = (numStocks1 * price1) + (numStocks2 * price2);
  const average = totalCost / totalStocks;

  resultDiv.innerHTML = `The average cost per stock is ${average.toFixed(2)}`;
});

resetButton.addEventListener("click", function() {
  numStocks1Input.value = "";
  price1Input.value = "";
  numStocks2Input.value = "";
  price2Input.value = "";
});




