function calculator() {
    // Selectors
    let numberOneSelector;
    let numberTwoSelector;
    let resultInput;

    return {
        init: function (selector1, selector2, resultSelector) {
            numberOneSelector = document.querySelector(`${selector1}`);
            numberTwoSelector = document.querySelector(`${selector2}`);
            resultInput = document.querySelector(`${resultSelector}`);
        },

        add: function () {
            resultInput.value = Number(numberOneSelector.value) + Number(numberTwoSelector.value);
        },
        subtract: function () {
            resultInput.value = Number(numberOneSelector.value) - Number(numberTwoSelector.value);
        },
    };
}
let obj = calculator();

obj.init("#num1","#num2",'#result');
obj.add();