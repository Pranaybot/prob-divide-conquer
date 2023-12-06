function sortedFrequency(numArray, target) {
    return numArray.filter(num => num === target).length;
}

module.exports = sortedFrequency