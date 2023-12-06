let { assert } = require("chai");
let petAdoptionAgency = require("../petAdoptionAgency.js");

describe("petAdoptionAgency", () => {
    describe("isPetAvailable", () => {    
        it("should return the correct message when only one pet is available", () => {
            assert.equal(petAdoptionAgency.isPetAvailable("dog", 1, true),
                "Great! We have 1 vaccinated dog(s) available for adoption at the agency.");
            });

        it("should return the correct message when only one pet is available", () => {
            assert.equal(petAdoptionAgency.isPetAvailable("dog", 1, false),
            "Great! We have 1 dog(s) available for adoption, but they need vaccination.");
            });
        
        it("should return the correct message when a pet is vaccinated", () => {
            assert.equal(petAdoptionAgency.isPetAvailable("dog", 3, true),
                "Great! We have 3 vaccinated dog(s) available for adoption at the agency.");
            });
        
        it("should return the correct message when a pet is not vaccinated", () => {
            assert.equal(petAdoptionAgency.isPetAvailable("dog", 3, false),
                "Great! We have 3 dog(s) available for adoption, but they need vaccination.");
            });
        
        it("should return the correct message when a pet is not available", () => {
            assert.equal(petAdoptionAgency.isPetAvailable("cat", 0, false),
                "Sorry, there are no cat(s) available for adoption at the agency.");
            });

        it("should throw an error for invalid input", () => {
            assert.throw(() => petAdoptionAgency.isPetAvailable(3, 3, true), "Invalid input");
            });
        
        it("should throw an error for invalid input", () => {
            assert.throw(() => petAdoptionAgency.isPetAvailable("dog", "3", true), "Invalid input");
            });
        
        it("should throw an error for invalid input", () => {
            assert.throw(() => petAdoptionAgency.isPetAvailable("dog", 3, `dog`), "Invalid input");
            });
        });
    
    describe("getRecommendedPets", () => {
        it("should return the correct message when recommended pets are available", () => {
        const petList = [
            { name: "Fluffy", traits: "friendly" },
            { name: "Buddy", traits: "playful" },
        ];

        assert.equal(petAdoptionAgency.getRecommendedPets(petList, "friendly"),
        "Recommended pets with the desired traits (friendly): Fluffy");
        });

        it("should return the correct message when no recommended pets are available", () => {
        const petList = [{ name: "Max", traits: "active" }];

        assert.equal(petAdoptionAgency.getRecommendedPets(petList, "friendly"),
            "Sorry, we currently have no recommended pets with the desired traits: friendly.");
        });

        it("should throw an error for invalid input", () => {
        const petList = {};

        assert.throw(() => petAdoptionAgency.getRecommendedPets(petList, "friendly"), "Invalid input");
        });

        it("should throw an error for invalid input", () => {
        const petList = [{ name: "Max", traits: "active" }];

        assert.throw(() => petAdoptionAgency.getRecommendedPets(petList, 5), "Invalid input");
        });
  });

    describe("adoptPet", () => {
        it("should return the correct message when a pet is adopted", () => {
            assert.equal(petAdoptionAgency.adoptPet("dog", "John"),
            "Congratulations, John! You have adopted dog from the agency. Enjoy your time with your new furry friend!");
        });

        it("should throw an error for invalid input", () => {
            assert.throw(() => petAdoptionAgency.adoptPet("dog", 123), "Invalid input");
        });

        it("should throw an error for invalid input", () => {
            assert.throw(() => petAdoptionAgency.adoptPet(123, "John"), "Invalid input");
        });
    });
});