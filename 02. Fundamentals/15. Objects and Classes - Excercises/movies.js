function movies (data) {

   let action = ``;
   let movieName = ``;
   let director = ``;
   let date = ``;
   let moviesList = {};

   for (let command of data) {
      
      if (command.includes(`addMovie`)) {
         command.split(`addMovie `);
         action = command[0];
         movieName = command[1];
      } else if (command.includes(` directedBy `)) {
         command.split(` directedBy `);
         movieName = command[0];
         action = command[1];
         director = command[2];         
      } else if (command.includes(` onDate `)) {
         command.split(` onDate `);
         movieName = command[0];
         action = command[1];
         date = command[2];
      }
      switch (action) {
         case `addMovie `:
            
            break;
      
      }

   }
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