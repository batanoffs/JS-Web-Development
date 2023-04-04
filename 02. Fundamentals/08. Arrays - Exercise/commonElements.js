function commonElements (firstArr, secondArr) {
  for (let index = 0; index < firstArr.length; index++) {
    let firstLoopElement = firstArr[index];
    for (let j = 0; j < secondArr.length; j++) {
      let secondLoopElement = secondArr[j];
      if (firstLoopElement === secondLoopElement) {
        console.log(firstLoopElement);
      }      
    }    
  }
}
commonElements(['Hey', 'hello', 2, 4, 'Peter', 'e'],
              ['Petar', 10, 'hey', 4, 'hello', '2']);