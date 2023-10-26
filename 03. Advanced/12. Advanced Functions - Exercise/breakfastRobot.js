function breakfastRobot() {
    let storage = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0,
    };

    let recipes = {
        apple: {
            carbohydrate: 1,
            flavour: 2,
        },
        lemonade: {
            carbohydrate: 10,
            flavour: 20,
        },
        burger: {
            carbohydrate: 5,
            fat: 7,
            flavour: 3,
        },
        eggs: {
            protein: 5,
            fat: 1,
            flavour: 1,
        },
        turkey: {
            protein: 10,
            carbohydrate: 10,
            fat: 10,
            flavour: 10,
        },
    };

    let cmd = {
        restock,
        prepare,
        report
    }

    return function manager(data) {
        let token = data.split(` `);
        let action = token[0];

        return cmd[action](token[1], Number(token[2]));
    };

    function prepare(recipe, quantity) {
        let prepareIngredients = {};
        for (let [el, value] of Object.entries(recipes[recipe])) {
            let neededQuantity = value * quantity;
            if (storage[el] < neededQuantity) {
                return `Error: not enough ${el} in stock`;
            }
            prepareIngredients[el] = neededQuantity;
        }
        for (let [element, value] of Object.entries(prepareIngredients)) {
            storage[element] -= value;
        }

        return "Success";
    }

    function restock(microelement, quantity) {
        storage[microelement] += quantity;
        return "Success";
    }

    function report() {

        return `protein=${storage[`protein`]} carbohydrate=${storage[`carbohydrate`]} fat=${storage[`fat`]} flavour=${storage[`flavour`]}`
    }
}

// let manager = breakfastRobot();
// console.log(manager("restock flavour 50")); 
// console.log(manager("prepare lemonade 4")); 
// console.log(manager("restock carbohydrate 10"));
// console.log(manager("restock flavour 10"));
// console.log(manager("prepare apple 1"));
// console.log(manager("restock fat 10"));
// console.log(manager("prepare burger 1"));
// console.log(manager("report"));



let manager2 = breakfastRobot();
console.log(manager2(`prepare turkey 1`));
console.log(manager2(`restock protein 10`));
console.log(manager2(`prepare turkey 1`));
console.log(manager2(`restock carbohydrate 10`));
console.log(manager2(`prepare turkey 1`));
console.log(manager2(`restock fat 10`));
console.log(manager2(`prepare turkey 1`));
console.log(manager2(`restock flavour 10`));
console.log(manager2(`prepare turkey 1`));
console.log(manager2(`report`));
