function extractArray(array) {
    let biggestOne = Number.MIN_SAFE_INTEGER;
    return array.reduce((acc, el) => {
        if (el >= biggestOne) {
            biggestOne = el;
            acc.push(el);
        }
        return acc;
    }, []);
}
// extractArray([1, 3, 8, 4, 10, 12, 3, 2, 24]);
// extractArray([20, 3, 2, 15, 6, 1]);
extractArray([1, 2, 3, 4]);


// function extractArray(array) {
//     let myArr = [];
//     myArr.push(array[0]);

//     for (let i = 0; i < array.length - 1; i++) {
//         let first = myArr.slice(-1)[0];
//         let current = array[i + 1];

//         if (first < current) {
//             myArr.push(current);
//         }
//     }
//     return myArr;
// }