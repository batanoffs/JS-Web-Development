function vowelsSum (input) {

  let word = input[0];
  let letter = '';
  let sum = 0; 

  for (let i = 0; i < word.length; i++) {
    let vow = 0;
    letter = word[i];
    switch(letter) {
      case "a":
        vow = 1;
        break;
      case "e":
        vow = 2;
        break;
      case "i":
        vow = 3;
        break;
      case "o":
        vow = 4;
        break;
      case "u":
        vow = 5;
        break;
    }
    sum += vow;
  }

  console.log(sum);
} 
vowelsSum (["hello"]);