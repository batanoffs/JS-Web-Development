function dungeonestDark (input) {
   let health = 100;
   let coins = 0;

   let rooms = input[0].split("|");
   debugger

   console.log(`You died! Killed by {monster-name}.`);
   console.log(`Best room: {room}`);

   console.log(`You've made it!`);
   console.log(`Coins: ${coins}`);
   console.log(`Health: ${health}`);
}
dungeonestDark(["rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000"]);
console.log(`------------------------------------------`);
dungeonestDark(["cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"]);