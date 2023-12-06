function countZeroes(numArray) {
    return numArray.filter(num => num === 0).length;
}

module.exports = countZeroes