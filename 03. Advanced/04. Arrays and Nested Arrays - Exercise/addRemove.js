function addRemove(arr) {
    let initialNumber = 1;
    let current = 1;
    let myArr = [];

    let index = 0;
    while (arr[index] !== undefined) {
        switch (arr[index]) {
            case `add`:
                if (index === 0) {
                    myArr.push(initialNumber);
                    current += 1;
                } else {
                    myArr.push(current);
                    current += 1;
                }

                break;
            case `remove`:
                myArr.pop();
                current += 1;
                break;

            default:
                break;
        }
        index++;
    }
    if (myArr[0] !== undefined) {
        console.log(myArr.join(`\n`));
    } else {
        console.log("Empty");
    }
}
addRemove(["add", "add", "add", "add"]);
addRemove(["add", "add", "remove", "add", "add"]);
addRemove(["remove", "remove", "remove"]);
