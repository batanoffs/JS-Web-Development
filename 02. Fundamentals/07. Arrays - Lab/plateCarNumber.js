function plateCarNumber(input) {
  let allowedLetters = input[0];
  let numberLicensePlates = Number(input[1]);
  let currentPlate = ``;
  let isValidFirst2 = false;
  let isValidLast2 = false;
  let isValidMiddle = false;

  //commas removed from string
  allowedLetters = allowedLetters.replaceAll(",", "");

  //changing plate numbers
  for (let index = 2; index <= numberLicensePlates+1; index++) {
    currentPlate = input[index];
    //cycle to check the first two characters of the current plate
    for (let j = 0; j <= 1; j++) {
      for (let k = 0; k < allowedLetters.length; k++) {
        if (currentPlate[j] === allowedLetters[k]) {
          isValidFirst2 = true;
          break;
        } else {
          isValidFirst2 = false;
        }
      }
    }
    //cycle to check the last two characters
    for (let j = 6; j <= 7; j++) {
      for (let k = 0; k < allowedLetters.length; k++) {
        if (currentPlate[j] === allowedLetters[k]) {
          isValidLast2 = true;
          break;
        } else {
          isValidLast2 = false;
        }
      }
    }
    //cycle to check from 3rd to 6th char
    for (let j = 2; j <= 5; j++) {
      let num = parseInt(currentPlate[j], 10);

      if (Number.isNaN(num)) {
        let testNum = Number(currentPlate[j]);
        if ((testNum = 0)) {
          isValidMiddle = true;
        } else {
          isValidMiddle = false;
          break;
        }
      } else {
        isValidMiddle = true;
      }
    }

    if (isValidFirst2 === true) {
      if (isValidLast2 === true) {
        if (isValidMiddle === true) {
          console.log(currentPlate);
        } 
      } 
    } 
  }
}

plateCarNumber([
  "E,T,O,P,A,H,K,X,C,B,M",
  "5",
  "CH3604AC",
  "CEOOO7TO",
  "CC4140CC",
  "HO1CCCBB",
  "EK9ETTBE",
]);

// A valid license plate is one that:
//     Has a letter from the allowed letters at position 1
//     Has a letter from the allowed letters at position 2
//     Has a number at position 3
//     Has a number at position 4
//     Has a number at position 5
//     Has a number at position 6
//     Has a letter from the allowed letters at position 7
//     Has a letter from the allowed letters at position 8
