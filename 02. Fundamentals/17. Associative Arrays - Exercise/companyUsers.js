function companyUsers(data) {
   let companies = {};
   data.forEach(pair => {
      let [company, id] = pair.split(` -> `);

      if(!companies.hasOwnProperty(company)) {
         companies[company] = [];
      }

      companies[company].push(id);
   });

   let sorted = Object.entries(companies);

   sorted.sort((a,b) => a[0].localeCompare(b[0]));
   
   for (const iterator of sorted) {
      let companyName = iterator[0];
      console.log(companyName);
      
      let set = new Set(iterator[1])
      for (const number of set) {
         console.log(`-- ${number}`);
         
      }
   }
}

companyUsers([
   'SoftUni -> AA12345',
   'SoftUni -> BB12345',
   'Microsoft -> CC12345',
   'HP -> BB12345'
]);

companyUsers([
   'SoftUni -> AA12345',
   'SoftUni -> CC12344',
   'Lenovo -> XX23456',
   'SoftUni -> AA12345',
   'Movement -> DD11111'
]);