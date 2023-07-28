function towns (array){


   for (const townInfo of array) {
      let [name, latitude, longitude] = townInfo.split(` | `);
      let currentTown = {
         town: name,
         latitude: Number(latitude).toFixed(2),
         longitude: Number(longitude).toFixed(2) 
      }
      console.log(currentTown);
   }

}
towns(['Sofia | 42.696552 | 23.32601',
'Beijing | 39.913818 | 116.363625']);
towns(['Plovdiv | 136.45 | 812.575']);