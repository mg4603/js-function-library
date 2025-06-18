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

module.exports = { squared, cubed };