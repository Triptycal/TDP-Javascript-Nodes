const {factorialise} = require ("../maths");
const {expect} = require ("chai");

describe("factorialise tests", () => { // set of tests
    it("should equal 5", () => {// single test
    expect(factorialise(!5)).to.equal(120);
    })
})

