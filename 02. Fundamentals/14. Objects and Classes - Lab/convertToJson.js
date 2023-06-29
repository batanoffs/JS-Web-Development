function convertToJson(firstName, lastName, hairColor) {

   let obj = {
      "name": firstName,
      lastName,
      hairColor
   }
   let json = JSON.stringify(obj);
   console.log(json);
}

convertToJson('George', 'Jones', 'Brown');
convertToJson('Peter', 'Smith', 'Blond');