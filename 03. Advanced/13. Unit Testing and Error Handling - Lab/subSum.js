// If the first element is not an array, return NaN
// If the start index is less than zero, consider its value to be a zero
// If the end index is outside the bounds of the array, assume it points to the last index of the array

function subSum(numbers, start, end) {
    if(!Array.isArray(numbers)) {
        return NaN;
    }
    let startIndex = Math.max(start,0);
    let endIndex = Math.min(end, numbers.length - 1);

    let subNumbers = numbers.slice(startIndex, endIndex + 1);
    let sum = subNumbers.reduce((a,x) => a + Number(x), 0);
    
    return sum;
}

// console.log(subSum([1, 2, 3, 4], 0, 2)); //6

console.log(subSum([10, 20, 30, 40, 50, 60], 3, 300));
// console.log(subSum([1.1, 2.2, 3.3, 4.4, 5.5], -3, 1));
// console.log(subSum([10, 'twenty', 30, 40], 0, 2));
// console.log(subSum([], 1, 2));
// console.log(subSum('text', 0, 2)); // NaN
