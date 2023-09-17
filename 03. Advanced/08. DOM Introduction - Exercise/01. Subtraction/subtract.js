function subtract() {
    const firstNum = Number(document.getElementById(`firstNumber`));
    const secondNum = Number(document.getElementById(`secondNumber`));
    const sum = firstNum - secondNum;

    document.getElementById(`result`).textContent = sum;
}