let { assert } = require("chai");
let { onlineStore } = require("../onlineStore");

describe("Test for onlineStore", () => {
    describe("isProductAvailable", () => {
        it("should return 'Great! Product is available for purchase.' when stock quantity is greater than 0", () => {
            const result = onlineStore.isProductAvailable("Product A", 5);
            assert.equal(result, "Great! Product A is available for purchase.");
        });
        it("should throw an error 'Invalid input' for non-number inputs", () => {
            assert.throw(
                () => onlineStore.isProductAvailable("Invalid", "Invalid"),
                "Invalid input"
            );
        });
        it("should throw an error 'Invalid input' for non-number inputs", () => {
            const result = onlineStore.isProductAvailable("Product A", 5);
            assert.equal(result, "Great! Product A is available for purchase.");
        });
        it("should return 'Sorry, Product is currently out of stock.' when stock quantity is 0", () => {
            const result = onlineStore.isProductAvailable("Product A", 5);
            assert.equal(result, "Great! Product A is available for purchase.");
        });
    });
});

describe(`test`, () => {
    describe(`test`, () => {
        it(`test`, () => {
            assert.equal(num, `explain test`);
        });
    });
});
