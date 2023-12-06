function findFloor(numArray, target) {
    let firstPointer = 0;
    let secondPointer = numArray.length-1;
    let midPointer = 0;

    while(firstPointer < secondPointer) {
        if (numArray[firstPointer] <= target && firstPointer === 0) {
            return numArray[firstPointer];
        } else if(numArray[[secondPointer] <= target] && secondPointer === numArray.length-1) {
            return numArray[secondPointer];
        } else if (numArray[firstPointer] > target && firstPointer === 0) {
            return -1;
        } else {
            midPointer = Math.floor((firstPointer + secondPointer) / 2);
            if(numArray[midPointer] <= target) return true;

            if(numArray[midPointer] > target) {
                secondPointer = midPointer-1;
            } else{
                firstPointer = midPointer+1;
            }
        }

    }
    return -1;
}

module.exports = findFloor