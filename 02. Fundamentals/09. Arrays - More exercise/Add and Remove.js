function addAndRemove (array) {
   let finalarr = [];
   let element = 1;
   for (let index = 0; index < array.length; index++) {
      let command = array[index];
      if (command === `add`) {         
         finalarr.push(element);
      } else {
         finalarr.pop();
      }
      element++;   
   }
   console.log(finalarr.join(` `));
}
addAndRemove(['add', 'add', 'add', 'add']);
addAndRemove(['add', 'add', 'remove', 'add', 'add']);
addAndRemove(['remove', 'remove', 'remove']);