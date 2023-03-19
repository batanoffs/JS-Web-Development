function multiplicationTable (n) {

let multiplication = 0;
for (let i = 1; i <= 10; i++) {
    multiplication = i * n;
    console.log(`${n} X ${i} = ${multiplication}`);
}
}

multiplicationTable(2);