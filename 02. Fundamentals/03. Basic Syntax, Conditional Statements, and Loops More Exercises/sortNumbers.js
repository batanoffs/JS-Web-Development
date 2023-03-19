function sortNumbers (a,b,c) {

  let arr = [a,b,c] 
  arr.sort(); 
  let arr2;

  for (let i=2; i >= 0; i--) {
    arr2 = arr[i];
    console.log(arr2);
  }
  
}

sortNumbers(0,  5,  2);