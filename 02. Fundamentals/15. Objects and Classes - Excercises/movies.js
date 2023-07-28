function movies (data) {

   let movies = [];

   for (let command of data) {
      
      if (command.includes(`addMovie`)) {
         let name = command.split(`addMovie `)[1];
         movies.push({name});
         
      } else if (command.includes(`directedBy`)) {
         let [name, director] = command.split(` directedBy `);
         let movie = movies.find(m => m.name === name);
         if (movie) {
            movie.director = director;
         }
                  
      } else if (command.includes(`onDate`)) {
         let [name, date] = command.split(` onDate `);
         let movie = movies.find(m => m.name === name);
         if(movie) {
            movie.date = date;
         }         
      }     
   }

   movies.forEach(movie => {
      if (movie.name && movie.director && movie.date) {
         console.log(JSON.stringify(movie));
      }
      
   });
}

movies([
   'addMovie Fast and Furious',
   'addMovie Godfather',
   'Inception directedBy Christopher Nolan',
   'Godfather directedBy Francis Ford Coppola',
   'Godfather onDate 29.07.2018',
   'Fast and Furious onDate 30.07.2018',
   'Batman onDate 01.08.2018',
   'Fast and Furious directedBy Rob Cohen'
   ]);

movies([
   'addMovie The Avengers',
   'addMovie Superman',
   'The Avengers directedBy Anthony Russo',
   'The Avengers onDate 30.07.2010',
   'Captain America onDate 30.07.2010',
   'Captain America directedBy Joe Russo'
   ]);