function solve() {
    const health = 100;
    const stamina = 100;
    const mana = 100;

    let create = {

        mage: (name) => {
            return (obj = {
                name,
                health,
                mana,
                cast(spell) {
                    this.mana--;
                    console.log(`${name} cast ${spell}`);
                },
            });
        },
        fighter: (name) => {
            return (obj = {
                name,
                health,
                stamina,
                fight() {
                    this.stamina--;
                    console.log(`${name} slashes at the foe!`);
                },
            });
        },
    };
    return create;
}

let create = solve();
const scorcher = create.mage("Scorcher");
scorcher.cast("fireball");
scorcher.cast("thunder");
scorcher.cast("light");

const scorcher2 = create.fighter("Scorcher 2");
scorcher2.fight();

console.log(scorcher2.stamina);
console.log(scorcher.mana);
