function addSubstract(a, b, c) {
  let sum = (a, b) => a + b;
  let result = sum(a, b);
  let substact = (c) => result - c;

  console.log(substact(c));
}
addSubstract(23, 6, 10);
addSubstract(1, 17, 30);
addSubstract(42, 58, 100);
