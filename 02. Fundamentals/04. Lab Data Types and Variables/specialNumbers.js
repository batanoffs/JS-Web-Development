function specialNumbers(n) {
  for (let i = 1; i <= n; i++) {
    let newNumber = i;
    let sumOfDigits = 0;
    while (newNumber > 0) {
      sumOfDigits += newNumber % 10;
      newNumber = Math.floor(newNumber / 10);
    }
    switch (sumOfDigits) {
      case 5: case 7: case 11:
        console.log(`${i} -> True`);
        break;
      default:
        console.log(`${i} -> False`);
        break;
    }
  }
}
specialNumbers(20);