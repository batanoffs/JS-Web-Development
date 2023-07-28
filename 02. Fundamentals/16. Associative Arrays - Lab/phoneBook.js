function phoneBook(array) {
   let persons = {};

   for (let person of array) {
      let [name, phone] = person.split(` `);
      person[name] = phone;
      if (persons.hasOwnProperty(name)) {
         persons[name] = phone;         
      } else {         
         persons[name] = phone;
      }
   }
   for (let[key,value] of Object.entries(persons)) {
      console.log(`${key} -> ${value}`);
   }
}

phoneBook(['Tim 0834212554',
'Peter 0877547887',
'Bill 0896543112',
'Tim 0876566344']);

phoneBook(['George 0552554',
'Peter 087587',
'George 0453112',
'Bill 0845344']);
