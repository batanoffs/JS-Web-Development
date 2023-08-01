function cutReverse(input) {
   let stringSize = input.length;
   let firstHalf = input.substring(0, stringSize / 2);
   let secondHalf = input.substring(stringSize / 2);

   let firstHalfReversed = "";
   let secondHalfReversed = "";

   for (let i = firstHalf.length - 1; i >= 0; i--) {
      let char = firstHalf[i];
      firstHalfReversed += char;
   }
   for (let i = secondHalf.length - 1; i >= 0; i--) {
      let char = secondHalf[i];
      secondHalfReversed += char;
   }

   console.log(firstHalfReversed);
   console.log(secondHalfReversed);
}
cutReverse("tluciffiDsIsihTgnizamAoSsIsihT");
cutReverse("sihToDtnaCuoYteBIboJsihTtAdooGoSmI");
