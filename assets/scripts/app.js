const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
  const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`; //show math formula description
  outputResult(currentResult, calcDescription); // pass values to screen
}

function writeToLog(
  operationIdentifier,
  prevResult,
  operationNumber,
  newResult
) {
  const logEntry = {
    operation: operationIdentifier,
    currentNumber: prevResult,
    number: operationNumber,
    result: newResult,
  };
  logEntries.push(logEntry);
  console.log(logEntries);
}
//parseFloat change string to integer ore number with comate
function calculateResult(calculationType) {
  const input = parseFloat(userInput.value); // get input
  if (
    (calculationType !== "ADD" &&
      calculationType !== "Subtract" &&
      calculationType !== "Multiply" &&
      calculationType !== "Divide") ||
    !input
  ) {
    alert("Insert valid number");
  }
  const initialResult = currentResult; // get start value so its not changed after math function
  let mathOperator;
  if (calculationType === "ADD") {
    currentResult += input; // find the result
    mathOperator = "+";
  } else if (calculationType === "Subtract") {
    currentResult -= input;
    mathOperator = "-";
  } else if (calculationType === "Multiply") {
    currentResult *= input;
    mathOperator = "*";
  } else if (calculationType === "Divide") {
    currentResult /= input;
    mathOperator = "/";
  }
  createAndWriteOutput(mathOperator, initialResult, input); // pass values to creat function
  writeToLog(calculationType, initialResult, input, currentResult);
}

//When btn is clicked JS take function and bind the value
addBtn.addEventListener("click", calculateResult.bind(this, "ADD"));
subtractBtn.addEventListener("click", calculateResult.bind(this, "Subtract"));
multiplyBtn.addEventListener("click", calculateResult.bind(this, "Multiply"));
divideBtn.addEventListener("click", calculateResult.bind(this, "Divide"));
