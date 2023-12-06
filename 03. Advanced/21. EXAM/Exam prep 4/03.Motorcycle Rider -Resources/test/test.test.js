const { log } = require("console");
let motorcycleRider = require("../Motorcycle Rider.js");
let assert = require("assert");

    
describe("motorcycleRider", () => {
    describe("licenseRestriction", () => {
        it("should return the license restrictions for category 'AM'", () => {
        const result = motorcycleRider.licenseRestriction("AM");
        assert.strictEqual(result, 'Mopeds with a maximum design speed of 45 km. per hour, engine volume is no more than 50 cubic centimeters, and the minimum age is 16.');
        });
    
        it("should return the license restrictions for category 'A1'", () => {
        const result = motorcycleRider.licenseRestriction("A1");
        assert.strictEqual(result, 'Motorcycles with engine volume is no more than 125 cubic centimeters, maximum power of 11KW. and the minimum age is 16.');
        });
    
        it("should return the license restrictions for category 'A2'", () => {
        const result = motorcycleRider.licenseRestriction("A2");
        assert.strictEqual(result, 'Motorcycles with maximum power of 35KW. and the minimum age is 18.');
        });
    
        it("should return the license restrictions for category 'A'", () => {
        const result = motorcycleRider.licenseRestriction("A");
        assert.strictEqual(result, 'No motorcycle restrictions, and the minimum age is 24.');
        });
    
        it("should throw an error for invalid category", () => {
        assert.throws(() => {
            motorcycleRider.licenseRestriction("Invalid");
        }, Error, "Invalid Information!");
        });
    });

    describe('motorcycleShowroom', () => {
        
        it('should return the correct number of available motorcycles', () => {
            const engineVolume = [100, 150, 200, 250];
            const maximumEngineVolume = 200;
            const expected = 'There are 3 available motorcycles matching your criteria!';
            const result = motorcycleRider.motorcycleShowroom(engineVolume, maximumEngineVolume);
            assert.equal(result, expected);

        });
        
        it('should throw an error if invalid information is provided', () => {
            assert.throws(() => motorcycleRider.motorcycleShowroom(100, '200'), Error, 'Invalid Information!');
            assert.throws(() => motorcycleRider.motorcycleShowroom([100, 150, 200], 30), Error, 'Invalid Information!');
            assert.throws(() => motorcycleRider.motorcycleShowroom([], 100), Error, 'Invalid Information!');
        });
    });

    describe("otherSpendings", () => {
        it("should calculate total price correctly without discount", () => {
            const equipment = ["helmet"];
            const consumables = ["engine oil", "oil filter"];
            const discount = false;
        
            const result = motorcycleRider.otherSpendings(equipment, consumables, discount);
        
            assert.equal(result, "You spend $300.00 for equipment and consumables!");
        });
        
        it("should calculate total price correctly with discount", () => {
            const equipment = ["helmet"];
            const consumables = ["engine oil", "oil filter"];
            const discount = true;
        
            const result = motorcycleRider.otherSpendings(equipment, consumables, discount);
        
            assert.equal(result, "You spend $270.00 for equipment and consumables with 10% discount!");
        });
        
        it("should throw an error for invalid input", () => {
            const equipment = "helmet";
            const consumables = ["engine oil", "oil filter"];
            const discount = true;
        
            assert.throws(() => {
                motorcycleRider.otherSpendings(equipment, consumables, discount);
            }, "Invalid Information!");
        });

        it("should throw an error for invalid input", () => {
            const equipment = ["helmet", "jacked"];
            const consumables = 44;
            const discount = 2;
        
            assert.throws(() => {
                motorcycleRider.otherSpendings(equipment, consumables, discount);
            }, "Invalid Information!");
        });
    });          
});
