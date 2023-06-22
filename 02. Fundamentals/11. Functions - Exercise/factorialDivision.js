function factorialDivision(a,b){

   function factorial (num) {
      if (num === 0) {
         return 1;
      } else {
         return num * factorial(num - 1);
      }
   }

   let firstNumberFactorial = factorial(a);
   let secondNumFactorial = factorial(b);
   let result = firstNumberFactorial / secondNumFactorial;
   console.log(result.toFixed(2));
}

factorialDivision(5,2);
factorialDivision(6,2);