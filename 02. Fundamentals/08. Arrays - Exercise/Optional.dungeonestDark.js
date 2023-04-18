function dungeonestDark (input) {
   let health = 100;
   let coins = 0;
   let roomCounter = 0;
   let rooms = input[0].split("|");
   
   for (let room of rooms) {
      let command = room.split(" ");
      let encounter = command[0];
      let value = Number(command[1]);
      roomCounter ++;
      switch(encounter) {
         case "potion":
            let healingNumber = 0;
            if (health >= 100) {               
               console.log(`You healed for ${healingNumber} hp.`);
            } else {
               healingNumber = health + value > 100 ? 100 - health : value;
               health += healingNumber;
               console.log(`You healed for ${healingNumber} hp.`);
               console.log(`Current health: ${health} hp.`);
            }
         break;
         case "chest":
            coins += value;
            console.log(`You found ${value} coins.`);
         break;
         default:
            health -= value;
            if (health > 0) {
               console.log(`You slayed ${encounter}.`);
            } else {
               console.log(`You died! Killed by ${encounter}.`);
               console.log(`Best room: ${roomCounter}`);
               return;
            }
            break;
      }
   }
   console.log(`You've made it!`);   
   console.log(`Coins: ${coins}`);   
   console.log(`Health: ${health}`);   
}

dungeonestDark(["rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000"]);
console.log(`------------------------------------------`);
dungeonestDark(["cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"]);