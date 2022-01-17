const expect = require("chai").expect;
const { polybius } = require("../src/polybius");

describe("polybius", () => {
    it("should return false if the length of input is an odd number", () => {
        const input = "44324233521254134";
        const encode = false;
        const expected = false;
        const actual = polybius(input, encode);
        expect(actual).to.eql(expected);
    });
    it("should return a string", () => {
        const input = "thinkful";
        const actual = polybius(input);
        expect(actual).to.be.a("string");
    });
    it("should return spaced string if the input is a sentence & capital letters should be ignored", () => {
        const input = "Hello world";
        const expected = "3251131343 2543241341"
        const actual = polybius(input);
        expect(actual).to.eql(expected);
    });
    it("should return I/J when decoding 42", () => {
        const input = "4432423352125413";
        const encode = false;
        const expected = "th(i/j)nkful"
        const actual = polybius(input, encode);
        expect(actual).to.eql(expected);
    });

})