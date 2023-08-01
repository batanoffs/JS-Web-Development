function mirrorWords (input) {

   let pattern = /([@#])(?<wordOne>[A-Za-z]{3,})\1\1(?<wordTwo>[A-Za-z]{3,})\1/g
   let extracted = pattern.exec(input);
   let mirrorWords = [];
   let allPairs = [];
   let counter = 0;   

   while(extracted) {
      counter ++;
      let firstWord = extracted.groups.wordOne;
      let secondWord = extracted.groups.wordTwo;
      let reverseWord = "";
      
      for (let i = secondWord.length-1; i >= 0; i--) {         
         reverseWord += secondWord[i];
      }
      
      if(firstWord === reverseWord) {
         mirrorWords.push(reverseWord);
         allPairs.push(firstWord);
         allPairs.push(secondWord);
      }     
      extracted = pattern.exec(input);
   }

   if(counter > 0) {
      console.log(`${counter} word pairs found!`);
   } else {
      console.log("No word pairs found!");
   }

   if(mirrorWords.length > 0) {
      
      console.log("The mirror words are:");
      let buff = [];
      for (let i = 0; i < allPairs.length; i = i+2) {
         let word1 = allPairs[i];
         let word2 = allPairs[i+1];

         buff.push(`${word1} <=> ${word2}`);       
      }
      console.log(buff.join(", "));
   } else {
      console.log("No mirror words!");
   }   
}

mirrorWords([
   '@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r'
   ]);

// mirrorWords([`#po0l##l0op# @bAc##cAB@ @LM@ML@ #xxxXxx##xxxXxx# @aba@@ababa@`]);

// mirrorWords([ '#lol#lol# @#God@@doG@# #abC@@Cba# @Xyu@#uyX#' ]);
