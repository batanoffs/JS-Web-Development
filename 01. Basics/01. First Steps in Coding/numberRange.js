function numberRange (input) {
    let num = Number(input[0]);

    if (num >= -100 && num <= 100 && num !== 0) {
        console.log("Yes");
    } else {
        console.log("No");
    }
}

numberRange (["-25"])
numberRange (["0"])
numberRange (["25"])