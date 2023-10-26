function storeCatalogue(data) {
    let catalogue = {};
    let letters = {};
    let currentLetter;
    data.sort((a, b) => a.localeCompare(b)).forEach((element) => {
        let [product, price] = element.split(" : ");
        price = Number(price);
        if (!catalogue.hasOwnProperty(product)) {
            catalogue[product] = price;
        }
    });

    for (const [key, value] of Object.entries(catalogue)) {
        let letter = key.slice(0, 1);

        if (letter !== currentLetter) {
            currentLetter = letter;
            console.log(currentLetter);
        }

        console.log(` ${key}: ${value}`);
    }
}

storeCatalogue([
    "Banana : 2",
    "Rubic's Cube : 5",
    "Raspberry P : 4999",
    "Rolex : 100000",
    "Rollon : 10",
    "Rali Car : 2000000",
    "Pesho : 0.000001",
    "Barrel : 10",
]);

/* Output 
A
  Anti-Bug Spray: 15
  Apple: 1.25
  Appricot: 20.4
B
  Boiler: 300
D
  Deodorant: 10
F
  Fridge: 1500
T
  T-Shirt: 10
  TV: 1499 
  */
