"use strict";
const billAmount = document.getElementById('bill');
const tipPercent = document.getElementById('percent');
const perPerson = document.getElementById('person');
const checkBtn = document.getElementById('check-btn');
const resultOne = document.getElementById('result1');
const resultTwo = document.getElementById('result2');
const clearBtn = document.getElementById('clear');
let isTipIncluded = false;
checkBtn.addEventListener('click', () => {
    const bill = parseFloat(billAmount.value);
    const percent = parseFloat(tipPercent.value);
    const people = parseInt(perPerson.value);
    if (isNaN(bill) || isNaN(people) || people <= 0) {
        alert("Please enter valid numbers!");
        return;
    }
    let tip = (bill * percent) / 100;
    let total = bill + tip;
    let perPersonAmount = total / people;
    console.log(`Total (including tip): $${total.toFixed(2)}`);
    console.log(`Each person pays: $${perPersonAmount.toFixed(2)}`);
    resultOne.textContent = `Total (including tip): $${total.toFixed(2)}`;
    resultTwo.textContent = `Each person pays: $${perPersonAmount.toFixed(2)}`;
});
clearBtn.addEventListener('click', () => {
    resultOne.textContent = "";
    resultTwo.textContent = "";
    billAmount.value = "";
    tipPercent.value = "";
    perPerson.value = "";
});
