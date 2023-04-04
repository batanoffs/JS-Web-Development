// function condenseArrayToNumber (arr) {
//   let lastArr = [];
   
//   for(let i = 0; i<arr.length-1; i++) {  
//     let firstNum = arr[i];  
//     let secondNum = arr[j]; 
//     temp = firstNum + secondNum;
//     newArr.push(temp);      
//   }
// }


// condenseArrayToNumber ([5,0,4,1,2]);

function condenseArray(nums) {
  while (nums.length > 1) {
    const condensed = [];
    for (let i = 0; i < nums.length - 1; i++) {
      condensed.push(nums[i] + nums[i+1]);
    }
    nums = condensed;
  }
  console.log(nums[0]);
}
condenseArray([2, 10, 3]);

// const nums = [2, 10, 3];
// const result = condenseArray(nums);
// console.log(result); // output: 25