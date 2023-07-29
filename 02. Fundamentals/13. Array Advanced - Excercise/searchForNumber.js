function searchForNumber(numbersArray, commandsArray) {

   let numbersToTake = commandsArray[0];
   let numbersToDel = commandsArray[1];
   let searchedNumber = commandsArray[2];

   let newArr = numbersArray.slice(0,numbersToTake);
   newArr.splice(0, numbersToDel);

   let numberCounter = newArr.filter(e => e === searchedNumber).length;

   console.log(`Number ${searchedNumber} occurs ${numberCounter} times.`);
}

searchForNumber([5, 2, 3, 4, 1, 6],
   [5, 2, 3]);