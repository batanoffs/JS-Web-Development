function addSubtract (array) {
  let newArr = [];
  let sumOldArr = 0;
  let sumNewdArr = 0;
  for (let index = 0; index < array.length; index++) {
    let number = array[index];
    sumOldArr += array[index];
    if (number % 2 === 0) {
      number += index;
    } else {
      number -= index;
    }
    newArr.push(number);
    sumNewdArr += number;
  }
  console.log(newArr);
  console.log(sumOldArr);
  console.log(sumNewdArr);
}
addSubtract([-5, 11, 3, 0, 2]);