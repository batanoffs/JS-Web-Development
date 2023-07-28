function inventory(heroes) {

   let result = [];
   

   for (let line of heroes) {
      let [name, level, items] = line.split(` / `);
      
      let hero = {
         name: name,
         level: Number(level),
         items: items
      };
      
      result.push(hero);       
   }
   result.sort((a,b) => a.level - b.level);

   for (let iterator of result) {
      console.log(`Hero: ${iterator.name}` + "\n" + 
      `level => ${iterator.level}` + "\n" + 
      `items => ${iterator.items}`);
   }
}

inventory([
   'Isacc / 25 / Apple, GravityGun',
   'Derek / 12 / BarrelVest, DestructionSword',
   'Hes / 1 / Desolator, Sentinel, Antara'
   ]);

inventory([
   'Batman / 2 / Banana, Gun',
   'Superman / 18 / Sword',
   'Poppy / 28 / Sentinel, Antara'
   ]);