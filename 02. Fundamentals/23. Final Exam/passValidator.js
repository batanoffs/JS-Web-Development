function passValidator(input) {
   let userPassowrd = input.shift(); //invalidpassword*

   for (const entry of input) {
      let token = entry.split(" ");
      let command = token[0];

      if (command === "Make") {
         command += ` ${token[1]}`;
      }

      let index = 0;
      let fisrtPart = "";
      let letter = "";
      let lastPart = "";

      if (command !== "Complete") {
         switch (command) {
            case `Make Upper`:
               index = Number(token[2]);

               fisrtPart = userPassowrd.substring(0, index);
               letter = userPassowrd.substring(index + 1, 2).toUpperCase();
               lastPart = userPassowrd.substring(index + 1);
               userPassowrd = fisrtPart + letter + lastPart;
               console.log(userPassowrd);
               break;

            case `Make Lower`:
               index = Number(token[2]);
               let a = index + 1;

               fisrtPart = userPassowrd.substring(0, index);
               letter = userPassowrd.substring(a, 3).toLowerCase();
               lastPart = userPassowrd.substring(index + 1);
               userPassowrd = fisrtPart + letter + lastPart;
               console.log(userPassowrd);

               break;

            case `Insert`:
               let charIndex = token[2];
               index = Number(token[1]);

               if (index) {
                  fisrtPart = userPassowrd.substring(0, index);
                  lastPart = userPassowrd.substring(index);
                  userPassowrd = fisrtPart + charIndex + lastPart;
                  console.log(userPassowrd);
               }

               break;

            case `Replace`:
               let charReplace = token[1];
               if (userPassowrd.includes(charReplace)) {
                  let value = Number(token[2]);
                  let asciCode = charReplace.charCodeAt(0);
                  let newValue = value + asciCode;
                  let newChar = String.fromCharCode(newValue);

                  for (const el of userPassowrd) {
                     if (el === charReplace) {
                        userPassowrd = userPassowrd.replace(
                           charReplace,
                           newChar
                        );
                     }
                  }
               }
               console.log(userPassowrd);
               break;

            case `Validation`:
               if (!(userPassowrd.length > 8)) {
                  console.log("Password must be at least 8 characters long!");
               }

               let pattern = /(\w*\d*)/g;
               let containsValidDate = pattern.test(userPassowrd);
               if (!containsValidDate) {
                  console.log(
                     "Password must consist only of letters, digits and _!"
                  );
               }

               // "Password must consist at least one uppercase letter!"
               // console.log("Password must consist at least one lowercase letter!");
               // "Password must consist at least one digit!"
               break;
         }
      }
   }
}

passValidator([
   "invalidpassword*",
   "Add 2 p",
   "Replace i -50",
   "Replace * 10",
   "Make Upper 2",
   "Validation",
   "Complete",
]);

console.log(`----------------------`);

passValidator([
   "123456789",
   "Insert 3 R",
   "Replace 5 15",
   "Validation",
   "Make Lower 3",
   "Complete",
]);
