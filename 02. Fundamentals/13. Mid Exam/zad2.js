function numbers(data) {
   let givenNumbers = data
      .shift()
      .split(" ")
      .map((x) => Number(x));

   let index = 0;
   let command = data[index];
   index++;

   while (!command.includes("Finish")) {
      let token = command.split(" ");
      let action = token[0];
      let value = Number(token[1]);
      let replacement = Number(token[2]);

      switch (action) {
         case "Add":
            givenNumbers.push(value);
            break;
         case "Remove":
            if (givenNumbers.includes(value)) {
               let position = givenNumbers.indexOf(value);
               givenNumbers.splice(position, 1);
               // problem here
            }
            break;
         case "Replace":
            if (givenNumbers.includes(value)) {
               let position2 = givenNumbers.indexOf(value);
               givenNumbers.splice(position2, 1, replacement);
            }
            break;
         case "Collapse":
            givenNumbers = givenNumbers.filter((x) => x > value);
            break;
      }

      command = data[index];
      index++;
   }

   console.log(givenNumbers.join(" "));
}

numbers(["1 4 5 4", "Add 1", "Remove 4", "Finish"]);

console.log(`----------------`);

numbers(["1 20 -1 10", "Collapse 8", "Finish"]);
console.log(`----------------`);

numbers(["5 9 70 -56 9 9", "Replace 9 10", "Remove 9", "Finish"]);
