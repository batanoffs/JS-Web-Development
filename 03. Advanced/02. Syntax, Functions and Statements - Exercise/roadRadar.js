function roadRadar(speed, area) {
    let isSpeedOk = true;
    let data = {
        motorway: 130,
        interstate: 90,
        city: 50,
        residential: 20,
    };
    let difference = 0;
    let statuses = [`speeding`, `excessive speeding`, `reckless driving`];

    if (data.hasOwnProperty(area)) {
        isSpeedOk = data[area] >= speed ? true : false;
    }
    // What is the speeding over the limit

    if (isSpeedOk) {
        console.log(`Driving ${speed} km/h in a ${data[area]} zone`);
    }

    if (!isSpeedOk) {
        difference = speed - data[area];
        let status =
            difference < 20
                ? statuses[0]
                : difference < 40
                ? statuses[1]
                : difference >= 40
                ? statuses[2]
                : undefined;

        console.log(
            `The speed is ${difference} km/h faster than the allowed speed of ${data[area]} - ${status}`
        );
    }
}

roadRadar(40, "city");
roadRadar(21, "residential");
roadRadar(120, "interstate");
roadRadar(200, "motorway");
