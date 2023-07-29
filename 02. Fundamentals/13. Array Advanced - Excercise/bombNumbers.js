function bomb(numbersArray, bombNumber) {
   let bomb = Number(bombNumber[0]);
   let range = Number(bombNumber[1]);
   while (numbersArray.includes(bomb)) {
       let index = numbersArray.indexOf(bomb);
       let elementsToRemove = range * 2 + 1;
       let startIndex = index - range;

       if (startIndex < 0) {
           elementsToRemove += startIndex;
           startIndex = 0;
       }
       numbersArray.splice(startIndex, elementsToRemove);
       
   }
   console.log(numbersArray.reduce((a, partial) => a + partial, 0));
}

detonate([1, 2, 2, 4, 2, 2, 2, 9], [4, 2]);
detonate([1, 4, 4, 2, 8, 9, 1], [9, 3]);
detonate([1, 7, 7, 1, 2, 3], [7, 1]);
detonate([1, 1, 2, 1, 1, 1, 2, 1, 1, 1], [2, 1]);