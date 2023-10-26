function sort(arr) {
    let resultArr = [];
    let lowSort = sortLowToHigh(arr.slice());
    let highSort = sortHighToLow(arr.slice());
    let isOdd = false;
    let middle;
    if (arr.length % 2 !== 0) {
        isOdd = true;
        middle = lowSort[Math.floor(lowSort.length / 2)];
    }
    lowSort = lowSort.splice(0, lowSort.length / 2);
    highSort = highSort.splice(0, highSort.length / 2);

    while (lowSort[0] !== undefined) {
        let currentLow = lowSort.shift();
        let currentHigh = highSort.shift();
        resultArr.push(currentLow);
        resultArr.push(currentHigh);
    }

    function sortLowToHigh(array1) {
        return array1.sort((a, b) => a - b);
    }

    function sortHighToLow(array2) {
        return array2.sort((a, b) => b - a);
    }
    if (isOdd) {
        resultArr.push(middle);
        return resultArr;
    }
    return resultArr;
}

console.log(sort([1, 65, 3, 52, 48, 63, 31, 18, 56]));
// output        [-3, 65, 1, 63, 3, 56, 18, 52, 31, 48]
