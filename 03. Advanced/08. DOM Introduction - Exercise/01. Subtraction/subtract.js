function subtract() {
    let firstNum = document.getElementById(`firstNumber`);
    let secondNum = document.getElementById(`secondNumber`);

    firstNum = Number(firstNum.value);
    secondNum = Number(secondNum.value);

    let result = firstNum - secondNum;

    document.getElementById(`result`).textContent = result;
}