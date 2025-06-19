function squared(num) {
    if (typeof num !== 'number') {
        throw new TypeError('Input must be a number');
    }
    return num * num;
}

function cubed(num) {
    if (typeof num !== 'number') {
        throw new TypeError('Input must be a number');
    }
    return num * num * num;
}

function factorial(num) {
    if (typeof num !== 'number') {
        throw new TypeError('Input must be a number');
    }
    if (num < 0) {
        return undefined;
    } 
    if (num === 0) {
        return 1;
    }

    let x = num - 1;
    while (x > 1) {
        num *= x
        x--;
    }
    return num;
}

function random(num) {
    if (typeof num !== 'number') {
        throw new TypeError('Input must be a number');
    } 
    if (num <= 0) {
        throw new RangeError('Input must be a positive number');
    }
    return Math.floor(Math.random() * num);
}

module.exports = { squared, cubed, factorial, random };