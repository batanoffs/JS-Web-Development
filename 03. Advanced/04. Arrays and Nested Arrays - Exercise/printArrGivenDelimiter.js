function printArrGivenDelimiter(arr, delimeter) {
    return console.log(arr.join(`${delimeter}`));
}

printArrGivenDelimiter(["One", "Two", "Three", "Four", "Five"], "-");