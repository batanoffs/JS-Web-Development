function cats(cats) {
   class Cat {
      constructor(name, age) {
         this.name = name;
         this.age = age;
      }
      meow(name, age) {
         console.log(`${name}, age ${age} says Meow`);
      }
   }

   for (let cat of cats) {
      cat = cat.split(` `);
      let catName = cat[0];
      let catAge = cat[1];
      let myCat = new Cat(catName, catAge);
      myCat.meow(catName, catAge);
   }
}

cats(["Mellow 2", "Tom 5"]);
cats(["Candy 1", "Poppy 3", "Nyx 2"]);
