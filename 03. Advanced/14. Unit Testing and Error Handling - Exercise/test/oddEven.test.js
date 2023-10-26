let { assert } = require("chai");
let {isOddOrEven} = require(`../isOddOrEven`)

describe("test with incorrect parameter", ()=> {
    it("test with obj", ()=> {
        assert.equal(isOddOrEven({prop: `Pesho`}, undefined, "return value must be undefined"))
    })
    it("test with array", ()=> {
        assert.equal(isOddOrEven(["Pesho"], undefined, "return value must be undefined"))
    })
    it("test with number", ()=> {
        assert.equal(isOddOrEven(10, undefined, "return value must be undefined"))
    })
})

describe("test with correct parameters", () => {
    it("test with obj", ()=> {
        assert.equal(isOddOrEven(`toto`), 'even', "return value should be even");
        assert.equal(isOddOrEven(`2222`), 'even', "return value should be even");
        assert.equal(isOddOrEven(`[]`), 'even', "return value should be even");
    })
    it("test with odd word", ()=>{
        assert.equal(isOddOrEven(`tot`), "odd", "return value should be odd")
        assert.equal(isOddOrEven(`222`), "odd", "return value should be odd")
        assert.equal(isOddOrEven(`(()`), "odd", "return value should be odd")
    })
});