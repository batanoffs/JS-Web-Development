function commandProcessor() {
  let str = ``;
  

  function append(string) {
    str = str + string;
  }
  function removeStart(n) {
    str = str.slice(n);
  }
  function removeEnd(n) {
    str = str.slice(0,-n);
  }
  function print() {
    console.log(str);
  } 

  let obj = {
    append,
    removeEnd,
    removeStart,
    print
  }
  return obj;
}

let firstZeroTest = commandProcessor();

firstZeroTest.append('hello');
firstZeroTest.append('again');
firstZeroTest.removeStart(3);
firstZeroTest.removeEnd(4);
firstZeroTest.print();