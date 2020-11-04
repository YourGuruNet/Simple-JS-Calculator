const defaultResult = 0;
let currentResult = defaultResult;

function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
  const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`; //show math formula description
  outputResult(currentResult, calcDescription); // pass values to screen
}

//parseFloat change string to integer ore number with comate
function add() {
  const input = parseFloat(userInput.value); // get input
  const initialResult = currentResult; // get start value so its not changed after math function
  currentResult = currentResult + input; // find the result
  createAndWriteOutput("+", initialResult, input);
}

function subtract() {
  const input = parseFloat(userInput.value);
  const initialResult = currentResult;
  currentResult = currentResult - input;
  createAndWriteOutput("-", initialResult, input);
}

function multiply() {
  const input = parseFloat(userInput.value);
  const initialResult = currentResult;
  currentResult = currentResult * input;
  createAndWriteOutput("*", initialResult, input);
}

function divide() {
  const input = parseFloat(userInput.value);
  const initialResult = currentResult;
  currentResult = currentResult / input;
  createAndWriteOutput("/", initialResult, input);
}

//When btn is clicked JS take function add
addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);
