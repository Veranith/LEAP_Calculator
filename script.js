let digits = document.querySelectorAll(".digit");
let operators = document.querySelectorAll(".operator");
let equals = document.getElementById("buttonEq");
let calcDisplay = document.getElementById("inputField");
let clear = document.getElementById("clear");
let firstNumber = null;
let mathOperator = null;

digits.forEach((digit) => {
  digit.addEventListener("click", () => {
    if (calcDisplay.value == 0) {
      calcDisplay.value = digit.innerText;
    } else {
      calcDisplay.value += digit.innerText;
    }
  });
});

operators.forEach((operator) => {
  operator.addEventListener("click", () => {
    if (firstNumber === null) {
      firstNumber = parseFloat(calcDisplay.value);
      calcDisplay.value = 0;
      mathOperator = operator.id;
    }
  });
});

equals.addEventListener("click", () => {
  if (mathOperator !== null) {
    switch (mathOperator) {
      case "buttonMultiply":
        calcDisplay.value = firstNumber * parseFloat(calcDisplay.value);
        break;

      case "buttonDivide":
        calcDisplay.value = firstNumber / parseFloat(calcDisplay.value);
        break;

      case "buttonPlus":
        calcDisplay.value = firstNumber + parseFloat(calcDisplay.value);
        break;

      case "buttonMinus":
        calcDisplay.value = firstNumber - parseFloat(calcDisplay.value);
        break;

      default:
        break;
    }

    firstNumber = null;
    mathOperator = null;
  }
});

clear.addEventListener("click", () => {
  firstNumber = null;
  mathOperator = null;
  calcDisplay.value = 0;
});

console.log(operators);
