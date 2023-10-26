function solution(a) {
    return (b) => a + b;
}

let add5 = solution(5);
console.log(add5(this));
console.log(add5(3));
