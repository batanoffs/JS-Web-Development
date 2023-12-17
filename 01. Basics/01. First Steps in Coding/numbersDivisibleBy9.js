function numbersDivisibleBy9 (input) {
let startNum = Number(input[0]);
let endNum = Number(input[1]);
let biggerNum = 0;
let lowNum = 0;
let sum = 0;
let buff = ``;

if (startNum > endNum) {  
  biggerNum = startNum;
  lowNum = endNum;
  } else {
  biggerNum = endNum;
  lowNum = startNum;
  }
  
  for (let i = lowNum; i <= biggerNum; i ++) {
    if (i%9 === 0) {
      sum += i;
      buff += i + "\n";
    }
  }
  
console.log(`The sum: ${sum}`);
console.log(buff);
}

numbersDivisibleBy9(["100", "200"]);