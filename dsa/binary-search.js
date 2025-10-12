/**
 * Binary search implementation on sorted array
 * 
 * @param {number} needle 
 * @param {number[]} hayStack 
 * @returns 
 */
const binarySearch = (needle, hayStack) => {
    // get the high and low indexes in the array
    let high = hayStack.length - 1
    let low = 0
    
    while (low <= high) {
        // middle value of the array
        let mid = Math.floor((high + low) / 2)

        if (hayStack[mid] === needle) {
            return mid
        }

        if (hayStack[mid] < needle) {
            // if value is less than target,
            // move the low to the middle + 1
            // search right half
            low = mid + 1
        } else {
            // if value is greater than target,
            // move the high to the middle - 1
            // search left half
            high = mid - 1
        }
    }

    // no target found
    return -1
}

console.log(binarySearch(3, [0,1,2,3,4,5,6,7,8,9,10]))
console.log(binarySearch(7, [0,1,2,3,4,5,6,7,8,9,10]))
console.log(binarySearch(5, [0,1,2,3,4,5,6,7,8,9,10]))
console.log(binarySearch(15, [1, 3, 5, 7, 9, 11, 13, 15, 17, 19]))
console.log(binarySearch(100, [1, 3, 5, 7, 9, 11, 13, 15, 17, 19]))
