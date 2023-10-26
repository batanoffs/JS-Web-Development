const { describe } = require("mocha");
let { PaymentPackage } = require(`../PaymentPackage`);
let { assert } = require("chai");

describe("create instance", () => {
    let paymentPackage;

    beforeEach(() => {
        paymentPackage = new PaymentPackage("Pesho", 10);
    });

    it("name should be correct", () => {
        assert.equal(paymentPackage._name, "Pesho", "name is correct value");
    });
    it("value should be correct", () => {
        assert.equal(paymentPackage._value, 10, "value is correct");
    });
    it("VAT should be correct", () => {
        assert.equal(paymentPackage._VAT, 20, "VAT has correct value");
    });
    it("active should be correct", () => {
        assert.ok(paymentPackage._active, "active has correct value");
    });
});

describe("test Accessor", () => {
    let paymentPackage;
    beforeEach(() => {
        paymentPackage = new PaymentPackage("Pesho", 30);
    });
    it("instance correct get and set name", () => {
        assert.equal(paymentPackage.name, "Pesho");
        paymentPackage.name = "Gosho";
        assert.equal(paymentPackage.name, "Gosho");
    });

    it("instance correct get and set value", () => {
        assert.equal(paymentPackage.value, 30);
        paymentPackage.value = 40;
        assert.equal(paymentPackage.value, 40);
        paymentPackage.value = 0;
        assert.equal(paymentPackage.value, 0);
    });

    it("instance correct get and set VAT", () => {
        assert.equal(paymentPackage.VAT, 20);
        paymentPackage.VAT = 40;
        assert.equal(paymentPackage.VAT, 40);
        paymentPackage.VAT = 0;
        assert.equal(paymentPackage.VAT, 0);
    });

    it("instance correct get and set active", () => {
        assert.ok(paymentPackage.active);
        paymentPackage.active = false;
        assert.notOk(paymentPackage.active);
    });
});

describe("test incorrect value", () => {
    let paymentPackage;

    beforeEach(() => {
        paymentPackage = new PaymentPackage("Pesho", 10);
    });

    it("incorrect name", () => {
        assert.throws(() => new PaymentPackage("", 10));
        assert.throws(() => new PaymentPackage(10, 10));
    });
    it("incorrect value - non-negative number", () => {
        assert.throws(() => new PaymentPackage("Pesho", `10`));
        assert.throws(() => new PaymentPackage("Pesho", -10));
    });
    it("incorrect VAT - non-negative number", () => {
        assert.throws(() => paymentPackage.VAT = "Gosho");
        assert.throws(() => paymentPackage.VAT = -10);
    });
    it("incorrect active - Boolean", () => {
        assert.throws(() => paymentPackage.active = "Todor");
        assert.throws(() => paymentPackage.active = 10);
    });
});

describe("test toString", () => {
    let paymentPackage;
    beforeEach(() => {
        paymentPackage = new PaymentPackage("Pesho", 30);
    });
    it("test active property with actice state", () => {
        let result = [
            `Package: Pesho`,
            `- Value (excl. VAT): 30`,
            `- Value (VAT 20%): 36`,
        ].join(`\n`);
        assert.equal(paymentPackage.toString(), result);
    });
    it("test active property with inactive state", () => {
        paymentPackage.active = false;
        let result = [
            `Package: Pesho (inactive)`,
            `- Value (excl. VAT): 30`,
            `- Value (VAT 20%): 36`,
        ].join(`\n`);
        assert.equal(paymentPackage.toString(), result);
    });
});
