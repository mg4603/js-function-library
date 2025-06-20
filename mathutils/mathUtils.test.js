const { squared, cubed, factorial, random, randomBetween } = require("./mathUtils.js");

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
    test('should throw a TypeError when input is not a number', () => {
        expect(() => factorial('a')).toThrow(TypeError);
        expect(() => factorial(null)).toThrow(TypeError);
        expect(() => factorial(undefined)).toThrow(TypeError);
        expect(() => factorial([])).toThrow(TypeError);
        expect(() => factorial({})).toThrow(TypeError);
    })
})

describe('random', () => {
    test('should throw a TypeError when input is not a number', () => {
        expect(() => random('a')).toThrow(TypeError);
        expect(() => random(null)).toThrow(TypeError);
        expect(() => random(undefined)).toThrow(TypeError);
        expect(() => random([])).toThrow(TypeError);
        expect(() => random({})).toThrow(TypeError);
    });

    test('should throw a RangeError when input is <= 0', () => {
        expect(() => random(0)).toThrow(RangeError);
        expect(() => random(-5)).toThrow(RangeError);
    });

    // range validation
    test('should return a number within the range [0, num)', () => {
        const num = 10;
        const result = random(10);
        expect(result).toBeGreaterThanOrEqual(0);
        expect(result).toBeLessThan(num);
    });

    test('should return an integer', () => {
        const num = 10;
        const result = random(num);
        expect(Number.isInteger(result)).toBe(true);
    });
});

describe('randomBetween', () => {
    test('should throw a TypeError if start(param) is not a number', () => {
        expect(() => randomBetween('a', 15)).toThrow(TypeError);
        expect(() => randomBetween(null, 15)).toThrow(TypeError);
        expect(() => randomBetween(undefined, 15)).toThrow(TypeError);
        expect(() => randomBetween([], 15)).toThrow(TypeError);
        expect(() => randomBetween({}, 15)).toThrow(TypeError);
    });

    test('shoud throw a RangeError if start(param) is greater than or equal to end', () => {
        expect(() => randomBetween(10, 10)).toThrow(RangeError);
        expect(() => randomBetween(11, 10)).toThrow(RangeError);
    });

    test('should returrn an integer', () => {
        const result = randomBetween(5, 10);
        expect(Number.isInteger(result)).toBe(true);
    });

    test('should return a number within the range [start, end)', () => {
        const result = randomBetween(-15, -10);
        expect(result).toBeGreaterThanOrEqual(-15);
        expect(result).toBeLessThan(-10);
    })
})