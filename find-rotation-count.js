function findRotationCount(numArray) {
    return numArray.indexOf(Math.min(numArray));
}

module.exports = findRotationCount