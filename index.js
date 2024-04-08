const billInput = document.querySelector(".bill-input");
const numberOfPeopleInput = document.querySelector(".people-input");
const total = document.querySelector("#total");

let billValue = 0;
let valueOfPeople = 0;
let tipMultiplication = 0;

const tipSummary = document.querySelector("#tip-summary");
const calculateOnePersonTip = (bill, people, tip) => {
  const tipValue = bill + bill * tip - bill;
  if (!isFinite(tipValue)) {
    calculateOnePersonTip.innerHTML = "0";
  } else {
    const tipValueOnePerson = tipValue / people;
    tipSummary.innerHTML = tipValueOnePerson;
  }
};

const calculateOnePersonBill = (bill, people, tip) => {
  const summary = (bill + bill * tip) / people;
  if (!isFinite(summary)) {
    total.innerHTML = "0";
  } else {
    total.innerHTML = summary.toFixed(2);
  }
};

billInput.addEventListener("input", () => {
  billValue = parseFloat(billInput.value);
  calculateOnePersonBill(billValue, valueOfPeople, tipMultiplication);
  calculateOnePersonTip(billValue, valueOfPeople, tipMultiplication);
});

numberOfPeopleInput.addEventListener("input", () => {
  valueOfPeople = parseInt(numberOfPeopleInput.value);
  calculateOnePersonBill(billValue, valueOfPeople, tipMultiplication);
  calculateOnePersonTip(billValue, valueOfPeople, tipMultiplication);
});

const buttons = document.querySelectorAll(".button");
buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const tipPercentage = parseFloat(btn.textContent) / 100;
    tipMultiplication = tipPercentage;
    calculateOnePersonBill(billValue, valueOfPeople, tipMultiplication);
    calculateOnePersonTip(billValue, valueOfPeople, tipMultiplication);
  });
});

const reset = document.querySelector(".reset");
reset.addEventListener("click", () => {
  total.innerHTML = "0";
  tipSummary.innerHTML = "0";
  numberOfPeopleInput.value = 0;
  valueOfPeople = 0;
  tipMultiplication = 0;
  billInput.value = 0;
  billValue = 0;
});
