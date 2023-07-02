function train (array) {

   let wagons = array.shift().split(" ").map(x => x = Number(x));
   let maxWagonCapacity = Number(array.shift());
   let index = 0;
   let command = [];
   

   for (index; index < array.length; index++) {
      command = array[index];

      if (command.includes(`Add`)) {
         command = command.split(`Add `).pop();
         let newWagon = Number(command);
         wagons.push(newWagon);
      } else {
         for (let i = 0; i < wagons.length; i++) {
            command = Number(command);
            if(wagons[i] + command <= maxWagonCapacity) {
               wagons[i] += command;
               break;
            }            
         }
      }      
   }
   console.log(wagons.join(" "));
}

// train (['32 54 21 12 4 0 23',
// '75',
// 'Add 10',
// 'Add 0',
// '30',
// '10',
// '75']);


train (['0 0 0 10 2 4',
'10',
'Add 10',
'10',
'10',
'10',
'8',
'6']);