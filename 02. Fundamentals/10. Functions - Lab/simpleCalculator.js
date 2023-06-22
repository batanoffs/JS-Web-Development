function simpleCalculator(numOne, numTwo, operator) {
  let multiply = (numOne, numTwo) => numOne * numTwo; 
  let divide = (numOne, numTwo) => numOne / numTwo;
  let add = (numOne, numTwo) => numOne + numTwo;
  let substract = (numOne, numTwo) => numOne - numTwo;

  switch (operator) {
    case "multiply":
      console.log(multiply(numOne, numTwo));
      break;
    case "divide":
      console.log(divide(numOne, numTwo));
      break;
    case "add":
      console.log(add(numOne, numTwo));
      break;
    case "subtract":
      console.log(substract(numOne, numTwo));
      break;
  }
}
simpleCalculator(5, 5, "multiply");
simpleCalculator(40, 8, "divide");
simpleCalculator(12, 19, "add");
simpleCalculator(50, 13, "subtract");
