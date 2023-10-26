function rotateArr(arr, num) {
    let myArr = [];
    let currArr = arr;

    for (let index = 0; index < num; index++) {
        let el = currArr.pop();
        myArr.push(el);
        myArr = myArr.concat(currArr);
        currArr = myArr;
        myArr = [];
    }
    console.log(currArr.join(` `));
}

rotateArr(["1", "2", "3", "4"], 2);
rotateArr(["Banana", "Orange", "Coconut", "Apple"], 15);

// 1 2 3 4
// 4 1 2 3
// 3 4 1 2
