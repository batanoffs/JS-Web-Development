function solve(input) {

   let nCount = input.shift();
   let pattern = /!(?<command>[A-Z]{1}[a-z]{2,})!:([\[\]])(?<string>[A-Za-z]{8,})([\[\]])/g
   
   for (const entry of input) {

      let isValid = pattern.exec(entry);

      if(isValid !== null) {
         let command = isValid.groups.command;
         let string = isValid.groups.string;
         let asciSequence = "";
         for (const char of string) {
            let asciNum = char.charCodeAt(0);
            asciSequence += asciNum + " ";
         }
         console.log(`${command}: ${asciSequence.trimEnd()}`);
         //"{command}:{number1} {number2} … {numberN}"
         
      } else {
         console.log("The message is invalid");
      }
   }   
}

solve(["2",
"!Send!:[IvanisHere]",
"*Time@:[Itis5amAlready"]);


console.log(`----------------------`);

solve(["3",
"go:[outside]",
"!drive!:YourCarToACarWash",
"!Watch!:[LordofTheRings]"]);

