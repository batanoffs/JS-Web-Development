function revealWords (words,sentance) {

   let wordsArray = words.split(`, `);
   for (const word of wordsArray) {
      let starsCount = `*`.repeat(word.length);
      sentance = sentance.replace(starsCount, word);
   }
   console.log(sentance);
}

revealWords('great',
'softuni is ***** place for learning new programming languages');
revealWords('great, learning',
'softuni is ***** place for ******** new programming languages');