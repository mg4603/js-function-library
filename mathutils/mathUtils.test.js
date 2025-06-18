const { squared, cubed, factorial } = require("./mathUtils.js");

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

describe('factorial', () => {
    test('factorial of 0', () => {
        expect(factorial(0)).toBe(1);
    });
    test('factorial of negative number', () => {
        expect(factorial(-5)).toBe(undefined);
    });
    test('factorial of 1', () => {
        expect(factorial(1)).toBe(1);
    });
    test('factorial of positive integer', () => {
        expect(factorial(5)).toBe(120);
    });
    test('should throw a TypeError when input iis not a number', () => {
        expect(() => factorial('a')).toThrow(TypeError);
        expect(() => factorial(null)).toThrow(TypeError);
        expect(() => factorial(undefined)).toThrow(TypeError);
        expect(() => factorial([])).toThrow(TypeError);
        expect(() => factorial({})).toThrow(TypeError);
    })
})