function storage(data) {

   let myMap = new Map();
   for (let entry of data) {
      let[item, quantity] = entry.split(` `);
      if(myMap.has(item)) {
         quantity = Number(myMap.get(item)) + Number(quantity);
         myMap.set(item,quantity);
      } else {
         myMap.set(item,quantity);         
      }
   }
   for (const [key, value] of myMap.entries()) {
      console.log(`${key} -> ${value}`);
    }
}

storage(['tomatoes 10',
'coffee 5',
'olives 100',
'coffee 40']);

storage(['apple 50',
'apple 61',
'coffee 115',
'coffee 40']);