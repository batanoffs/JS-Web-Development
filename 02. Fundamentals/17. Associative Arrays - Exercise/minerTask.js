function minerTask(input) {
   let resorses = {};

   for (let i = 0; i < input.length; i = i + 2) {
      let resource = input[i];
      let quantity = Number(input[i + 1]);

      if(resorses.hasOwnProperty(resource)) {
         resorses[resource] += quantity;
      } else {
      resorses[resource] = quantity;
      }
   }
   for (let [key, value] of Object.entries(resorses)) {
      console.log(`${key} -> ${value}`);
   }
}

// minerTask([
//    'Gold',
//    '155',
//    'Silver',
//    '10',
//    'Copper',
//    '17'
//    ]);

minerTask([
   'gold',
   '155',
   'silver',
   '10',
   'copper',
   '17',
   'gold',
   '15'
]);