function mirrorWords(input) {
   let pattern = /([@]|[#])(?<firstWord>[A-Za-z]{3,})\1\1(?<secondWord>[A-Za-z]{3,})\1/g;
   let matched = pattern.exec(input)

   let arr = [];

   while (matched) {
       let firstWord = matched.groups.firstWord;
       let secondWord = matched.groups.secondWord;
       arr.push(firstWord);
       arr.push(secondWord);
       matched = pattern.exec(input);
   }

   let counter = Math.floor(arr.length / 2);
   let newArr = [];

   for (let i = 0; i < arr.length - 1; i++) {
       let word = arr[i];
       let wordToChek = arr[i + 1]
       let reversedWord = arr[i + 1].split(``).reverse().join(``)

       if (word === reversedWord) {
           newArr.push(`${word} <=> ${wordToChek}`)
       }
   }

   if (counter > 0) {
       console.log(`${counter} word pairs found!`);
   } else {
       console.log(`No word pairs found!`);
   }

   if (newArr.length > 0) {
       console.log(`The mirror words are:`);
       console.log(newArr.join(`, `));
   } else {
       console.log(`No mirror words!`);
   }
}

mirrorWords([
    '@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r'
    ]);