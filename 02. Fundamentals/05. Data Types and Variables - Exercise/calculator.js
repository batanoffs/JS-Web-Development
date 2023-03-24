function calculator(num, operator, diffNum) {
  let calc = 0;
  switch (operator) {
    case "+":
      calc = num + diffNum;
      break;
    case "-":
      calc = num - diffNum;
      break;
    case "/":
      calc = num / diffNum;
      break;
    case "*":
      calc = num * diffNum;
      break;
  }
  console.log(calc.toFixed(2));
}
calculator(25.5, "*", 3);
