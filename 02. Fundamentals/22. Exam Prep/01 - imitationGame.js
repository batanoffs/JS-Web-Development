function imitationGame(data) {
  let crypted = data.shift();

  for (const entry of data) {
    let token = entry.split(`|`);
    let command = token[0];

    if (command === "Move") {
      let numberOfMoves = token[1];
      let firstPart = crypted.substring(0, numberOfMoves);
      let lastPart = crypted.substring(numberOfMoves);
      crypted = lastPart + firstPart;

    } else if (command === "Insert") {
      let index = token[1];
      let value = token[2];
      let partOne = crypted.substring(0, index);
      let partTwo = crypted.substring(index);
      crypted = partOne + value + partTwo;

    } else if (command === "ChangeAll") {
      let substring = token[1];
      let replacement = token[2];
      while (crypted.includes(substring)) {
        crypted = crypted.replace(substring, replacement);
      }
      

    } else if (command === "Decode") {
      console.log(`The decrypted message is: ${crypted}`);
      return;
    }
  }
}

imitationGame([
  'zzHe',
  'ChangeAll|z|l',
  'Insert|2|o',
  'Move|3',
  'Decode',
]);

// imitationGame([
//    'owyouh',
//    'Move|2',
//    'Move|3',
//    'Insert|3|are',
//    'Insert|9|?'
//    'Decode',
//  ]);