function library(data) {
   let shelfOfBooks = data.shift().split("&");
   let index = 0;
   let command = data[index];
   index++;

   while (!command.includes("Done")) {
      command = command.split(" | ");
      let token = command[0];
      let book1 = command[1];
      let book2 = command[2];

      switch (token) {
         case "Add Book":
            if (!shelfOfBooks.includes(book1)) {
               shelfOfBooks.unshift(book1);
            }
            break;
         case "Take Book":
            if (shelfOfBooks.includes(book1)) {
               let position = shelfOfBooks.indexOf(book1);
               shelfOfBooks.splice(position, 1);
            }
            break;
         case "Swap Books":
            if (shelfOfBooks.includes(book1) && shelfOfBooks.includes(book2)) {
               let position1 = shelfOfBooks.indexOf(book1);
               let position2 = shelfOfBooks.indexOf(book2);
               shelfOfBooks.splice(position1, 1, book2);
               shelfOfBooks.splice(position2, 1, book1);
            }
            break;
         case "Insert Book":
            if (!shelfOfBooks.includes(book1)) {
               shelfOfBooks.push(book1);
            }
            break;
         case "Check Book":
            let indexCheck = command[1];
            if (shelfOfBooks[indexCheck]) {
               console.log(shelfOfBooks[indexCheck]);
            }
            //problem
            break;
      }
      command = data[index];
      index++;
   }
   console.log(shelfOfBooks.join(", "));
}

library([
   "Don Quixote&The Great Gatsby&Moby Dick",
   "Add Book | Ulysses",
   "Take Book | Don Quixote",
   "Insert Book | Alice's Adventures in Wonderland",
   "Done",
]);

console.log(`--------------`);

library([
   "Anna Karenina&Heart of Darkness&Catch-22&The Stranger",
   "Add Book | Catch-22",
   "Swap Books | Anna Karenina | Catch-22",
   "Take Book | David Copperfield",
   "Done",
]);

console.log(`--------------`);

library([
   "War and Peace&Hamlet&Ulysses&MadameBovary",
   "Check Book | 2",
   "Swap Books | Don Quixote | Ulysses",
   "Done",
]);
