function solve() {
  const input = Array.from(document.querySelector(`#input`)).split(`.`);
  let result = ``;
  let output = document.querySelector(`#output`);

  for (let newP of input) {
    result += create(<p>newP</p>);
  }
  output = result;
}