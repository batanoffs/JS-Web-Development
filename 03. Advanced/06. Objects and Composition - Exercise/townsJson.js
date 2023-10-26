function townsJson(array) {
    let townData = [];

    array.forEach((element, index) => {
        if (index === 0) {
            return;
        }
        let token = element.split(` | `);
        let town = token[0].slice(2);
        let latitude = Number(token[1]).toFixed(2);
        let longitude = Number(token[2].slice(0, -1)).toFixed(2);

        let data = {
            Town: town,
            Latitude: Number(latitude),
            Longitude: Number(longitude),
        };

        townData.push(data);
    });

    console.log(JSON.stringify(townData));
}

townsJson([
    "| Town | Latitude | Longitude |",
    "| Sofia | 42.696552 | 23.32601 |",
    "| Beijing | 39.913818 | 116.363625 |",
]);
