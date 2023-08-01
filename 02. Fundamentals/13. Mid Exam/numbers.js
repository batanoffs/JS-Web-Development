function demo(data) {
   let sum = 0;
   let count = 0;

   data = data.split(" ").sort((a, b) => b - a);
   for (let i = 0; i < data.length; i++) {
      let curNum = Number(data[i]);
      sum += curNum;
      count++;
   }
   let avg = sum / count;
   let arr = [];

   for (let i = 0; i < data.length; i++) {
      let curNum = Number(data[i]);
      if (curNum > avg) {
         arr.push(curNum);
      }
      if (arr.length <= 0) {
         console.log("No");
      }
      if (arr.length === 5) {
         break;
      }
   }
   console.log(arr.join(" "));
}

demo(`-10 0 -30`);
