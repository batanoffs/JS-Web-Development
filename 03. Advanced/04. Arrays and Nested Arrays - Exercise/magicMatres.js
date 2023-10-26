function magicMatres(data) {
    for (let row = 0; row < data.length-1; row++) {
        let sumRowOne = data[row].reduce((acc, el) => acc + el);
        let sumRowTwo = data[row + 1].reduce((acc, el) => acc + el);
        let sumColOne = 0;
        let sumColTwo = 0;
        for (let col = 0; col < data.length; col++) {
            sumColOne += data[row][col];
            sumColTwo += data[row + 1][col];
            
        }
        if(sumRowOne !== sumRowTwo || sumColOne !== sumColTwo) {
            console.log(false);
            return;
        }
    }
    console.log(true);
}
magicMatres([
    [4, 5, 6],
    [6, 5, 4],
    [5, 5, 5],
]);

console.log(`----------------`);
magicMatres([
    [11, 32, 45],
    [21, 0, 1],
    [21, 1, 1],
]);
