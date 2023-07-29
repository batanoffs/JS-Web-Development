function race(input) {
   let listOfParticipants = input.shift().split(`, `);
   let objOfParticipants = {};

   for (const name of listOfParticipants) {
      objOfParticipants[name] = 0;
   }

   let currentRow = input.shift();
   let lettersPattern = /[A-Za-z]/g;
   let digitPattern = /[0-9]/g;

   while (currentRow !== `end of race`) {
      let currentName = currentRow.match(lettersPattern).join(``);
      let distance = currentRow.match(digitPattern);

      let currentDistance = 0;

      distance.map(d => currentDistance += Number(d));

      if (objOfParticipants.hasOwnProperty(currentName)) {
         objOfParticipants[currentName] += currentDistance;
      }
      currentRow = input.shift();
   }

   let sortedParticipants = Object.entries(objOfParticipants).sort((a, b) => b[1] - a[1]);


   console.log(`1st place: ${sortedParticipants[0][0]}`);
   console.log(`2nd place: ${sortedParticipants[1][0]}`);
   console.log(`3rd place: ${sortedParticipants[2][0]}`);

}

race(['George, Peter, Bill, Tom',
   'G4e@55or%6g6!68e!!@ ',
   'R1@!3a$y4456@',
   'B5@i@#123ll',
   'G@e54o$r6ge#',
   '7P%et^#e5346r',
   'T$o553m&6',
   'end of race']);

// race(['Ronald, Bill, Tom, Timmy, Maggie, Michonne',
// 'Mi*&^%$ch123o!#$%#nne787) ',
// '%$$B(*&&)i89ll)*&) ',
// 'R**(on%^&ald992) ',
// 'T(*^^%immy77) ',
// 'Ma10**$#g0g0g0i0e',
// 'end of race']);