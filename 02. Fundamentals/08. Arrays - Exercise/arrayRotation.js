function arrayRotation(arr, rotationCount) {
  let newArr = [];
  for (let index = 0; index < rotationCount; index++) {
    let currentElement = arr[0];
    for(let i = 1; i < arr.length; i++) {
      newArr.push(arr[i]);
    }
    newArr.push(currentElement);
    arr = newArr;
    newArr = [];
  }
  console.log(arr.join(" "));
}
arrayRotation([51, 47, 32, 61, 21], 2);
arrayRotation([32, 21, 61, 1], 4);
arrayRotation([2, 4, 15, 31], 5);

  // let newArr = [];
  // let temp = 0;
  // if (arr.length > n) {
  //   for (let index = 0; index < arr.length - n; index++) {
  //   temp = arr[index + n]
  //   newArr.push(temp.toString());
  //   }
  //   for (let i = 0; i < n; i++) {
  //     let current = arr[i];
  //     newArr.push(current.toString());
  //   }
  //   console.log(newArr.join(" ")); 
  // } else {
    
  //   for (let index = 0; index < (arr.length - (n-arr.length)); index++) {
  //   temp = arr[index + (n - arr.length)];
  //   newArr.push(temp.toString());
  //   }
  //   for (let i = 0; i < Math.abs(n-arr.length); i++) {
  //     let current = arr[i];
  //     newArr.push(current.toString());
  //   }
  //   console.log(newArr.join(" ")); 
  // }
