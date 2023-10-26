function add(num) {
    const adder = (accumulator) => add(num + accumulator);
    adder.toString = () => num;
    return adder;
}

// Example usage:
console.log(add(4)(3).toString()); // Output: 7
console.log(add(1).toString()); // Output: 1
console.log(add(1)(6)(-3).toString()); // Output: 4
