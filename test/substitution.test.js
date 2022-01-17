const expect = require("chai").expect;
const { substitution } = require("../src/substitution");

describe("substitution", () => {
    it("should encode a message by using the given substitution alphabet", () => {
        const input = "thinkful";
        const alphabet = "xoyqmcgrukswaflnthdjpzibev";
        const expected = 'jrufscpw';
        const actual = substitution(input, alphabet);
        expect(actual).to.eql(expected);
    });
    it("should work with any kind of key with unique characters", () => {
        const input = "thinkfu$";
        const alphabet = "xoyqmcgrukswafl@thdjpzibev";
        const expected = "jrufscp$"
        const actual = substitution(input, alphabet);
        expect(actual).to.eql(expected);
    });
    it("should preserve spaces", () => {
        const input = "You are an excellent spy";
        const alphabet = "xoyqmcgrukswaflnthdjpzibev";
        const expected = "elp xhm xf mbymwwmfj dne";
        const actual = substitution(input, alphabet);
        expect(actual).to.eql(expected);
    });
    it("should decode a message by using the given substitution alphabet", () => {
        const input = "jrufscpw";
        const alphabet = "xoyqmcgrukswaflnthdjpzibev"
        const encode = false;
        const expected = 'thinkful';
        const actual = substitution(input, alphabet, encode);
        expect(actual).to.eql(expected);
    });
    it("should work with any kind of key with unique characters", () => {
        const input = "y&ii$r&";
        const alphabet = "$wae&zrdxtfcygvuhbijnokmpl";
        const encode = false;
        const expected = "message";
        const actual = substitution(input, alphabet, encode);
        expect(actual).to.eql(expected);
    });
    it("should preserve spaces", () => {
        const input = "elp xhm xf mbymwwmfj dne";
        const alphabet = "xoyqmcgrukswaflnthdjpzibev";
        const  encode = false;
        const expected = "you are an excellent spy";
        const actual = substitution(input, alphabet, encode);
        expect(actual).to.eql(expected);
    });

})
