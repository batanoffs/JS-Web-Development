function validityChecker(x1, y1, x2, y2) {
    let distance1 = Math.sqrt((x1 - 0) ** 2 + (y1 - 0) ** 2);
    let distance2 = Math.sqrt((x2 - 0) ** 2 + (y2 - 0) ** 2);
    let distancePoints = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);

    function isValid(num) {
        return num % 1 === 0;
    }

    if (isValid(distance1)) {
        console.log(`{${x1}, ${y1}} to {0, 0} is valid`);
    } else {
        console.log(`{${x1}, ${y1}} to {0, 0} is invalid`);
    }

    if (isValid(distance2)) {
        console.log(`{${x2}, ${y2}} to {0, 0} is valid`);
    } else {
        console.log(`{${x2}, ${y2}} to {0, 0} is invalid`);
    }
    if (isValid(distancePoints)) {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
    } else {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
    }
}

validityChecker(3, 0, 0, 4);
validityChecker(2, 1, 1, 1);
