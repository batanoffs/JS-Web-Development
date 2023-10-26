function sortArray(array, argument) {
    return argument === `asc` ? ascending() : descending();

    function ascending() {
        return array.sort((a, b) => a - b);
    }
    function descending() {
        return array.sort((a, b) => b - a);
    }
}

console.log(sortArray([14, 7, 17, 6, 8], "asc"));
console.log(sortArray([14, 7, 17, 6, 8], "desc"));
