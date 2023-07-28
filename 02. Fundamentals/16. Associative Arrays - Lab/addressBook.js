function addressBook(data) {

   let persons = {};

   for (let entry of data) {
      let[name, adress] = entry.split(`:`);

      if(persons.hasOwnProperty(name)) {
         persons[name] = adress;
      } else {
         persons[name] = adress;
      }
   }

   let entries = Object.entries(persons); 
   entries.sort((a,b) => a[0].localeCompare(b[0]));

   for (let [key,value] of entries) {
      console.log(`${key} -> ${value}`);
   }   
}


addressBook(['Tim:Doe Crossing',
'Bill:Nelson Place',
'Peter:Carlyle Ave',
'Bill:Ornery Rd']);

// addressBook(['Bob:Huxley Rd',
// 'John:Milwaukee Crossing',
// 'Peter:Fordem Ave',
// 'Bob:Redwing Ave',
// 'George:Mesta Crossing',
// 'Ted:Gateway Way',
// 'Bill:Gateway Way',
// 'John:Grover Rd',
// 'Peter:Huxley Rd',
// 'Jeff:Gateway Way',
// 'Jeff:Huxley Rd']);