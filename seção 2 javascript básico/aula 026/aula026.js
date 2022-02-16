let firstNumber = 0.7;
let secondNumber = 0.1;

firstNumber += secondNumber;
firstNumber += secondNumber;
firstNumber += secondNumber;

firstNumber = parseFloat(firstNumber.toFixed(2));

console.log(firstNumber);
console.log(Number.isInteger(firstNumber));