function solve() {
  let input = document.getElementById(`text`).value;
  let currentCase = document.getElementById(`naming-convention`).value; 
  let words = input.toLowerCase().split(` `);
  let result = ``;

  

  if (currentCase.includes(`pascal`)) {

    for (let i = 0; i < words.length; i++) {
      let word = words[i];
      let splitStart = word.substring(0,1);
      let newWord = splitStart.toUpperCase().concat(word.substring(1));
      result += newWord;      
    }        
  } else if (currentCase.includes(`camel`)) {

    for (let i = 0; i < words.length; i++) {
      let word = words[i];
      if (i == 0) {
        result += word
      } else {
      let splitStart = word.substring(0,1);
      let newWord = splitStart.toUpperCase().concat(word.substring(1));
      result += newWord;
      }
    }        
  } else {
    result += `Error!`
  }

  document.getElementById(`result`).textContent = result;
}