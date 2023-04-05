function mergeArrays(firstArr, secondArr) {
  let thirdArr = [];
  for (let index = 0; index < firstArr.length; index++) {
    let firstArrElement = firstArr[index];
    let secondArrElement = secondArr[index];
    if (index % 2 === 0) {
      let sum = Number(firstArrElement) + Number(secondArrElement);
      thirdArr.push(sum);
    } else {
      let newElement = firstArrElement+ secondArrElement;
      thirdArr.push(newElement);
    }    
  }
  console.log(thirdArr.join(" - "));
}
mergeArrays(
['5', '15', '23', '56', '35'],
['17', '22', '87', '36', '11']);

mergeArrays(
['13', '12312', '5', '77', '4'],
['22', '333', '5', '122', '44'])