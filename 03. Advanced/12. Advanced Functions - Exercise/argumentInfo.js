function argumentInfo(...data) {
    let result = {};
    for (const el of data) {
        let type = typeof el;
        console.log(`${type}: ${el}`);
        if (!result.hasOwnProperty(type)) {
            result[type] = 0;
        }
        result[type] = result[type] + 1;
    }

    let sortResult = Object.entries(result).sort((a, b) => b[1] - a[1]);

    for (const [key, count] of sortResult) {
        console.log(`${key} = ${count}`);
    }
}

//
//

argumentInfo("cat", 42, function () {
    console.log("Hello world!");
});
