function condenseArrayToNumber (arr) {
  let newArr = [];

    for (let index = 0; index < arr.length-1; index++) {
      const element1 = arr[index];
      const element2 = arr[(index+1)];
      let newElement = element1 + element2;
      newArr.push(newElement);    
    }
    return newArr;  
}

for (let index = 0; index < array.length; index++) {
  const element = array[index];
  
}

condenseArrayToNumber ([5,0,4,1,2]);