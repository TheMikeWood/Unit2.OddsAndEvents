// TODO: this file! :)
const numInput = document.getElementById("number");
const form = document.querySelector("form");
const numberBankOutput = document.querySelector("#numberBank output");
const oddsOutput = document.querySelector("#odds output");
const evensOutput = document.querySelector("#evens output");
const sortOneButton = document.getElementById("sortOne");
const sortAllButton = document.getElementById("sortAll");

const numBank = [];

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const number = parseInt(numInput.value, 10);
  if (!isNaN(number)) {
    numBank.push(number);
    updateNumberBank();
    numInput.value = "";
  }
});

sortOneButton.addEventListener("click", () => {
  if (numBank.length > 0) {
    const number = numBank.shift();
    sortNumber(number);
    updateNumberBank();
  }
});

sortAllButton.addEventListener("click", () => {
  while (numBank.length > 0) {
    const number = numBank.shift();
    sortNumber(number);
  }
  updateNumberBank();
});

function updateNumberBank() {
  numberBankOutput.textContent = numBank.join(", ");
}

function sortNumber(number) {
  if (number % 2 === 0) {
    evensOutput.textContent += `${number} `;
  } else {
    oddsOutput.textContent += `${number} `;
  }
}
