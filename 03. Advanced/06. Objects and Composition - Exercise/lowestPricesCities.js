function lowestPricesCities(array) {
    let dataTowns = {};
    array.forEach((element) => {
        let [town, product, price] = element.split(" | ");
            price = Number(price);
        if (!dataTowns.hasOwnProperty(product)) {
            dataTowns[product] = {};
        }
        if (
            dataTowns[product][`price`] === undefined ||
            dataTowns[product][`price`] > price
        ) {
            dataTowns[product][`town`] = town;
            dataTowns[product][`price`] = price;
        }
    });

    for (const [key, value] of Object.entries(dataTowns)) {
        console.log(`${key} -> ${value.price} (${value.town})`);
    }
}
lowestPricesCities([
    "Sample Town | Sample Product | 1000",
    "Sample Town | Orange | 2",
    "Sample Town | Peach | 1",
    "Sofia | Orange | 3",
    "Sofia | Peach | 2",
    "New York | Sample Product | 1000.1",
    "New York | Burger | 10",
]);
