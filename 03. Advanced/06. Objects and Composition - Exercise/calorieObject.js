function calorie(properties) {
    let obj = {};
    for (let i = 0; i < properties.length; i += 2) {
        let key = properties[i];
        let value = Number(properties[i + 1]);
        obj[key] = value;
    }

    console.log(obj);
}

calorie(["Yoghurt", "48", "Rise", "138", "Apple", "52"]);
