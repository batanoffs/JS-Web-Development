function repeatString (string,n) {
   let newStr = ``;
   while (n > 0) {
      newStr += string;
      n -= 1;
   }
   console.log(newStr);
}
repeatString("abc", 3);
repeatString("String", 2);