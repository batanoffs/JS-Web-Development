function shoppingList(data) {
   let list = data.shift().split("!");

   let index = 0;
   let command = data[index];
   index++;

   while (command !== "Go Shopping!") {
      let token = command.split(' ');
      let isUrgent = token.includes("Urgent");
      let isUnnecessary = token.includes("Unnecessary");
      let isCorrect = token.includes("Correct");
      let isRearrange = token.includes("Rearrange");
      let item;

      if (isUrgent) {
         item = token[1];
         if (!list.includes(item)) {
            list.unshift(item);
         }
      }

      if (isUnnecessary) {
         item = token[1];
         if (list.includes(item)) {
            list.splice(list.indexOf(item), 1);
         }
      }

      if (isCorrect) {
         let oldItem = token[1];
         let newItem = token[2];

         if (list.includes(oldItem)) {
            list[list.indexOf(oldItem)] = newItem;
         }
      }

      if (isRearrange) {
         item = token[1];

         if (list.includes(item)) {
            let position = list.indexOf(item);
            let removedItem = list.splice(position, 1);
            list = list.push(removedItem[0]);
         }
      }
      command = data[index];
      index++;
   }

   console.log(list.join(`, `));
}

shoppingList([
   "Milk!Pepper!Salt!Water!Banana",
   "Urgent Salt",
   "Unnecessary Grapes",
   "Correct Pepper Onion",
   "Rearrange Grapes",
   "Correct Tomatoes Potatoes",
   "Go Shopping!",
]);

console.log(`----------------------`);

shoppingList([
   "Tomatoes!Potatoes!Bread",
   "Unnecessary Milk",
   "Urgent Tomatoes",
   "Go Shopping!"]);
