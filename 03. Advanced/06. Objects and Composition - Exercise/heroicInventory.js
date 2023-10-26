function heroicInventory(heroesArray) {
    let register = [];

    for (let heroString of heroesArray) {
        let heroData = heroString.split(" / ");
        let hero = {
            name: heroData[0],
            level: Number(heroData[1]),
            items: heroData[2].split(", ")
        };
        register.push(hero);
    }

    console.log(JSON.stringify(register));
}

heroicInventory([
    "Isacc / 25 / Apple, GravityGun",
    "Derek / 12 / BarrelVest, DestructionSword",
    "Hes / 1 / Desolator, Sentinel, Antara",
]);

console.log(`[{"name":"Isacc","level":25,"items":["Apple","GravityGun"]},{"name":"Derek","level":12,"items":["BarrelVest","DestructionSword"]},{"name":"Hes","level":1,"items":["Desolator","Sentinel","Antara"]}]`);