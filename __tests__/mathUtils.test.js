const { squared } = require("../src/mathUtils.js");

describe('squared', ()=> {
    test('should return the square of a positive number', () => {
        expect(squared(4)).toBe(16);
    });
    test('should return the square of a negative number', () => {
        expect(squared(-4)).toBe(16);
    });
    test('should return 0 when input is 0', () => {
        expect(squared(0)).toBe(0);
    });
    test('should throw a TypeError when input is not a number', () => {
        expect(() => squared('a')).toThrow(TypeError);
        expect(() => squared(null)).toThrow(TypeError);
        expect(() => squared(undefined)).toThrow(TypeError);
        expect(() => squared([])).toThrow(TypeError);
        expect(() => squared({})).toThrow(TypeError);

    })
});