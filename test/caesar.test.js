const expect = require("chai").expect;
const { caesar } = require("../src/caesar");


describe("caesar", () => {
    it("should return false if shift is not present", () => {
        
        const input = "thinkful";
        const expected = false;
        const actual = caesar(input);
        
        expect(actual).to.eql(expected);
    });
    it("should return false if shift number is less than -25", () => {
        const input = "misato";
        const shift = -27;
        const expected = false;
        actual = caesar(input, shift);
        expect(actual).to.eql(expected);

    });
    it("should return false if shift number is bigger than 25", () => {
        const input = "mikito";
        const shift = 29;
        const expected = false;
        const actual = caesar(input, shift);
        expect(actual).to.eql(expected);
    });
    it("should return spaces between words if spaced input is given & capital letters should be lowercased", () => {
        const input = "Misato and Mikito Saarna";
        const shift = 3;
        const expected = "plvdwr dqg plnlwr vdduqd";
        const actual = caesar(input, shift);
        expect(actual).to.eql(expected);
    });
    it("should return alphabetically wrapped around answer according to the input", () => {
        const input = "Zisato and Yikito Waarna";
        const shift = 3;
        const expected = "clvdwr dqg blnlwr zdduqd"
        const actual = caesar(input, shift);
        expect(actual).to.eql(expected);
    });
    it("should return decoded answer if the encode is false & return nonalphabetic letters as it is", () => {
        const input = "BPQA qa I amkzmb umaaiom?";
        const shift = 8;
        const encode = false;
        const expected = "this is a secret message?";
        const actual = caesar(input, shift, encode);
        expect(actual).to.eql(expected);
    });
})