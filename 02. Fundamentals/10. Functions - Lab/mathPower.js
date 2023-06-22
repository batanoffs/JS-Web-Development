function mathPower (num, raser) {
   let pow = num;

   while (raser > 1) {
      pow *= num;
      raser -= 1;
   }
   console.log(pow);   
}
mathPower(2,8);
mathPower(3,4);