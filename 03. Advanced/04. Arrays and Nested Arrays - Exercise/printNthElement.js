function printNthElement(array, num) {
    let output = [];
    for (let index = 0; index < array.length; index += num) {
        
        output.push(array[index]);
    }
    return output;
}
printNthElement(["5", "20", "31", "4", "20"], 2);
