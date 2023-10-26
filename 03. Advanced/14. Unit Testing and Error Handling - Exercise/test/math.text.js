let { assert } = require("chai");
let { mathEnforcer } = require("../mathEnforcer");

describe("addFive", () => {
    describe("incorrect value", () => {
        it("test str", () => {
            assert.equal(mathEnforcer.addFive("pesho"), undefined, "ret v");
        });
        it("test obj", () => {
            assert.ok(
                mathEnforcer.addFive({ name: "Pesho", age: 23 }),
                undefined,
                "retu uv"
            );
        });
        it("test arr", () => {
            assert.notOk(mathEnforcer.addFive([`1`, `2`]), "reert v");
        });
    });

    describe("correct value", () => {
        it("negative v", () => {
            assert.equal(mathEnforcer.addFive(-55), -50, "");
            assert.equal(mathEnforcer.addFive(-3), 2, "");
            assert.equal(mathEnforcer.addFive(-5), 0, "");
        });
        it("positiv v", () => {
            assert.equal(mathEnforcer.addFive(0), 5, "");
            assert.equal(mathEnforcer.addFive(10), 15, "");
        });
    });
});
describe("substractTen", ()=> {
    describe("with incorrect", ()=> {
        it("")
    })
})
