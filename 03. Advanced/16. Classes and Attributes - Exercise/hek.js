class Hex {
    constructor(v) {
        this.value = v;
    }

    valueOf() {
        // This function should return the value property of the hex class.
        return this.value;
    }

    toString() {
        //This function will show its hexadecimal value starting with "0x"
        return "0x" + this.value.toString(16).toUpperCase();
    }
    plus(number) {
        // This function should add a number or Hex object and return a new Hex object.
        return new Hex(this.value + number)

    }
    minus(number) {
        // This function should subtract a number or Hex object and return a new Hex object.
        return new Hex (this.value - number);

    }
    parse(hexString) {
        // Create a parse class method that can parse Hexadecimal numbers and convert them to standard decimal numbers.
        return parseInt(hexString, 16);
    }
}

let FF = new Hex(255);
console.log(FF.toString()); // 0XFF
FF.valueOf() + 1 == 256;
let a = new Hex(10);
let b = new Hex(5);
console.log(a.plus(b).toString());  //0XF
console.log(a.plus(b).toString() === "0xF"); //true
console.log(FF.parse("AAA")); //2730
