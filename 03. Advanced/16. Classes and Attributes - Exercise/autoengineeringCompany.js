function autoengineeringCompany(data) {
    let dataCars = new Map();
    const datas = [...data];
    datas.map((x) => x.split(` | `))
        .forEach((x) => {
            let [brand, model, quantity] = [...x];
            quantity = Number(quantity);

            if (!dataCars.has(brand)) {
                dataCars.set(brand, {});
            }
            if (!dataCars.get(brand).hasOwnProperty(model)) {
                dataCars.get(brand)[model] = quantity;
            } else {
                dataCars.get(brand)[model] += quantity;
            }
        });
    for (const car of dataCars) {
        console.log(car[0]);
        const models = car[1];
        for (const model of Object.keys(models)) {
            console.log(`###${model} -> ${models[model]}`);
        }
    }
}

autoengineeringCompany([
    "Audi | Q7 | 1000",
    "Audi | Q6 | 100",
    "BMW | X5 | 1000",
    "BMW | X6 | 100",
    "Citroen | C4 | 123",
    "Volga | GAZ-24 | 1000000",
    "Lada | Niva | 1000000",
    "Lada | Jigula | 1000000",
    "Citroen | C4 | 22",
    "Citroen | C5 | 10",
]);
