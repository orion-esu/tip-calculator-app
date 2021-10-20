'use strict';

let billCalcInput = Number(document.querySelector('.bill-calc__input').value);
let billCalcPeopleInput = Number(
  document.querySelector('.bill-calc__people--input').value
);
let billCalcInputCustom = document.querySelector(
  '.bill-calc__input--custom'
).value;
const billCalcValue = document.querySelectorAll('.bill-calc__value');
const tipFigure = document.querySelector('.tip-figure');
const totalFigure = document.querySelector('.total-figure');
const label = document.querySelectorAll('.label');
const btnReset = document.querySelector('.btn-reset');
let calcTipValue;
let billPercentage = 0.05;

const calcTip = (x, y, z) => {
  //function to calculate tip per person = billCalcInput * billPercentage * billCalcPeopleInput;
  // removes red outline and error styling class
  label[3].classList.add('hidden');
  document.querySelector('.bill-calc__people--input').style.outline =
    '2px solid transparent';
  // return calculated value of tip per person
  return x * y * z;
};
const calcTotal = (value1, value2) => value1 + value2; //function to calculate total tip = calcTipValue + billCalcInput;

for (let i = 0; i < billCalcValue.length; i++) {
  // Looping through the array

  billCalcValue[i].addEventListener('click', function () {
    // Checking for clicks on button elements

    billCalcInput = Number(document.querySelector('.bill-calc__input').value);
    billCalcPeopleInput = Number(
      document.querySelector('.bill-calc__people--input').value
    );
    calcTipValue = calcTip(billCalcInput, billPercentage, billCalcPeopleInput);

    if (!billCalcPeopleInput) {
      //checks for input value, if input value is 0 or if there is no input value
      document.querySelector('.bill-calc__people--input').style.outline =
        '2px solid red'; //display outline of input field red
      label[3].classList.remove('hidden'); //displays error styling class
    } else if (billCalcPeopleInput > 0) {
      //else if input value > 0

      if (billCalcValue[i] === billCalcValue[0]) {
        // ichecks if button clicked === first button of the array
        // Assign the value of calcTip function to the content of tipFigure & the value of calcTotal Function to the content of totalFigure
        tipFigure.textContent = `$${calcTipValue}`;
        totalFigure.textContent = `$${calcTotal(calcTipValue, billCalcInput)}`;
      } else if (billCalcValue[i] === billCalcValue[1]) {
        // checks if button clicked === second button of the array
        // Assign the value of calcTip function to the content of tipFigure & the value of calcTotal Function to the content of totalFigure
        tipFigure.textContent = `$${calcTipValue * 2}`; //multiply value of calcTipValue by 2
        totalFigure.textContent = `$${calcTotal(
          calcTipValue * 2,
          billCalcInput
        )}`; //multiply value of calcTipValue by 2
      } else if (billCalcValue[i] === billCalcValue[2]) {
        // checks if button clicked === third button of the array
        // Assign the value of calcTip function to the content of tipFigure & the value of calcTotal Function to the content of totalFigure
        tipFigure.textContent = `$${calcTipValue * 3}`; //multiply value of calcTipValue by 3
        totalFigure.textContent = `$${calcTotal(
          calcTipValue * 3,
          billCalcInput
        )}`; //multiply value of calcTipValue by 3
      } else if (billCalcValue[i] === billCalcValue[3]) {
        // checks if button clicked === fourth button of the array
        // Assign the value of calcTip function to the content of tipFigure & the value of calcTotal Function to the content of totalFigure
        tipFigure.textContent = `$${calcTipValue * 5}`; //multiply value of calcTipValue by 5
        totalFigure.textContent = `$${calcTotal(
          calcTipValue * 5,
          billCalcInput
        )}`; //multiply value of calcTipValue by 5
      } else if (billCalcValue[i] === billCalcValue[4]) {
        // checks if button clicked === fifth button of the array
        // Assign the value of calcTip function to the content of tipFigure & the value of calcTotal Function to the content of totalFigure
        tipFigure.textContent = `$${calcTipValue * 10}`; //multiply value of calcTipValue by 10
        totalFigure.textContent = `$${calcTotal(
          calcTipValue * 10,
          billCalcInput
        )}`; //multiply value of calcTipValue by 10
      }
    }
  });
}

const func = function () {
  billCalcInput = Number(document.querySelector('.bill-calc__input').value);
  billCalcInputCustom =
    Number(document.querySelector('.bill-calc__input--custom').value) / 100;
  billCalcPeopleInput = Number(
    document.querySelector('.bill-calc__people--input').value
  );
};

document
  .querySelector('.bill-calc__input--custom')
  .addEventListener('keyup', func);
document
  .querySelector('.bill-calc__people--input')
  .addEventListener('keyup', function () {
    billCalcPeopleInput = Number(
      document.querySelector('.bill-calc__people--input').value
    );
    calcTipValue = calcTip(
      billCalcInput,
      billCalcPeopleInput,
      billCalcInputCustom
    );
    let calcTotalValue = calcTotal(calcTipValue, billCalcInput);

    if (!billCalcPeopleInput) {
      document.querySelector('.bill-calc__people--input').style.outline =
        '2px solid red'; //display outline of input field red
      label[3].classList.remove('hidden'); //displays error styling class
      tipFigure.textContent = '$0.00';
      totalFigure.textContent = '$0.00';
    } else if (billCalcPeopleInput > 0) {
      func();
      tipFigure.textContent = `$${calcTipValue}`;
      totalFigure.textContent = `$${calcTotalValue}`;
    }
  });

btnReset.addEventListener('click', function () {
  //Resets the values of billCalcInput, billCalcPeopleInput, textcontent of tipFigure and totalFigure to 0.
  Number((document.querySelector('.bill-calc__input').value = '0'));
  Number((document.querySelector('.bill-calc__people--input').value = '0'));
  Number(
    (document.querySelector('.bill-calc__input--custom').value = 'Custom')
  );
  tipFigure.textContent = '$0.00';
  totalFigure.textContent = '$0.00';
});
