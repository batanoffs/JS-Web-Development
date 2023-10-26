function fibonacci() {

    let firstNum = 0;
    let secondNum = 1;

    return function add () {
        let result = firstNum + secondNum;
        firstNum = secondNum;
        secondNum = result;
        return firstNum;
    }
}

let fib = fibonacci();

console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());