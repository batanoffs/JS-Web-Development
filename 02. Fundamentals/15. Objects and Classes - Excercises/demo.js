function objectsDemo(name, age, job) {
   let obj = {
      name: name,
      age: age,
      job: job
   }
   obj.name = "Gosho";
   obj.isValid = true;
   return console.log(obj); 
}
objectsDemo("Pesho", 29, `fisher`);