function reverseString(input) {

  let newStr = ``;

  for (let i = input.length-1; i>=0; i--) { 
    
    newStr += input[i];
  }
  console.log(newStr);

}

reverseString(`1234`);