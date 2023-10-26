function carFactory(carRequirements) {
    let car = {
        model: carRequirements.model,
        engine: {},
        carriage: {},
        wheels: [],
    };
    const storage = [
        { power: 90, volume: 1800 },
        { power: 120, volume: 2400 },
        { power: 200, volume: 3500 },
        { type: "hatchback", color: undefined },
        { type: "coupe", color: undefined },
    ];

    if (carRequirements.wheelsize % 2 === 0) {
        let wheelsize = carRequirements.wheelsize - 1;
        car.wheels = [wheelsize, wheelsize, wheelsize, wheelsize];
    } else {
        let wheelsize = carRequirements.wheelsize;
        car.wheels = [wheelsize, wheelsize, wheelsize, wheelsize];
    }

    for (const part of storage) {
        if (carRequirements.power <= part.power) {
            carRequirements.power = part;
            car.engine = part;
        }
        if (carRequirements.carriage === part.type) {
            part.color = carRequirements.color;
            car.carriage = part;
        }
    }
    return car;
}
carFactory({ model: 'Opel Vectra',
power: 110,
color: 'grey',
carriage: 'coupe',
wheelsize: 17 });
