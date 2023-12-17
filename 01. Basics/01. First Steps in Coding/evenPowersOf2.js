function evenPowersOf2 (input) {
  let n = Number(input[0]);
  for (let j = 0; j <= n ; j += 2) {
    let i = Math.pow(2,j);
    console.log(i);
  }
  
}
evenPowersOf2 (["7"]);


