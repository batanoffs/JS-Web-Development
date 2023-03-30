function equalArrays(firstArr, secondArr) {
  let difference = 0;
  let sum = 0;
  for (let i = 0; i < firstArr.length; i++) {
    const firstArrElement = Number(firstArr[i]);
    const secondArrElement = Number(secondArr[i]);
    sum += firstArrElement;

    if (firstArrElement !== secondArrElement) {
     difference = i;
     return console.log(`Arrays are not identical. Found difference at ${difference} index`);
    }    
  }  
  console.log(`Arrays are identical. Sum: ${sum}`);  
}
equalArrays(['1'], ['10']);