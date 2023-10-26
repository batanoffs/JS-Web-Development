class Stringer {

    constructor(s, l) {
        this.innerString = s;
        this.innerLength = l;
    }

    increase(length) {
        this.innerLength += length;
    }

    decrease(length) {
        const result = this.innerLength - length;
        this.innerLength = result < 0 ? 0 : result;
    }

    toString() {
       const LESS_THEN_INNITIAL_VALUE = "...";
       if(this.innerLength === 0) {
        return LESS_THEN_INNITIAL_VALUE;
       }

       if(this.innerString.length > this.innerLength) {
        return `${this.innerString.slice(0,this.innerLength)}${LESS_THEN_INNITIAL_VALUE}`
       }
       return this.innerString;
    }
}

let test = new Stringer("Test", 5);
console.log(test.toString()); // Test

test.decrease(3);
console.log(test.toString()); // Te...

test.decrease(5);
console.log(test.toString()); // ...

test.increase(4);
console.log(test.toString()); // Test
