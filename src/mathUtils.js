function squared(num) {
    if (typeof num !== 'number') {
        throw new TypeError('Input must be a number');
    }
    return num * num;
}

module.exports = { squared };