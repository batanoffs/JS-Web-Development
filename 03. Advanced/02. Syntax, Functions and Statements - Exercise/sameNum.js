function sameNum(num) {
    let isSame = true;
    let numAsString = num.toString();
    let firstChar = numAsString[0];
    let sum = 0;
    for (let i = 0; i < numAsString.length; i++) {
        if (numAsString[i] !== firstChar) {
            isSame = false;
        }
        sum += Number(numAsString[i]);
    }
    console.log(isSame);
    console.log(sum);
}

sameNum(2222222);
sameNum(1234);