const { squared, cubed } = require("../src/mathUtils.js");

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


describe('cubed', ()=> {
    test('should return the cube of a positive number', () => {
        expect(cubed(4)).toBe(64);
    });
    test('should return the cube of a negative number', () => {
        expect(cubed(-4)).toBe(-64);
    });
    test('should return 0 when input is 0', () => {
        expect(cubed(0)).toBe(0);
    });
    test('should throw a TypeError when input is not a number', () => {
        expect(() => cubed('a')).toThrow(TypeError);
        expect(() => cubed(null)).toThrow(TypeError);
        expect(() => cubed(undefined)).toThrow(TypeError);
        expect(() => cubed([])).toThrow(TypeError);
        expect(() => cubed({})).toThrow(TypeError);

    })
});