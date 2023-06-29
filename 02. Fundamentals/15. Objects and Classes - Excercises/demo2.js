function objectsDemo() {
   let obj = {
      name: `Ivo`,

      sister: {
         name: "Veronika"
      }
   };

   // ----------------INTERVIEW QUESTIONS-----------------
   // THATS HOW TO COPY AN OBJECT WHEN BRAKING REFERENCE
   // ---------- CALLED DEEP CLONING ------------------
   // because you can clone sub objects as well

   let obj2 = JSON.parse(JSON.stringify(obj));

   obj.name = "Stan";

   console.log(obj);
   console.log(obj2);
   
}
objectsDemo();