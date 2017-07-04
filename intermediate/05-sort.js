/* 

SORT

Implement the sort function to sort an array of numbers in O(N×log(N)) time.

------------------------------------------------------------------

SOLUTION STEPS

1. Set array argument to temp variable
2. Set array argument length to a variable
3. Create an empty array for the sorted numbers
4. Iterate while count is less than length of unsorted array
    a. push smallest number from unsorted copy into sorted array
    b. splice to remove the smallest index from the copy
    c. loop until each smallest number has been moved to sorted array
5. Return sorted array

*/

// SOLUTION

Array.prototype.mySort = function() {
    let sorted = []
    let copy = this
    let count = 0
    const arrayLength = this.length
    
    while (count < arrayLength) {
        let smallestIndex =  copy.findMin() // or using 2 native js methods => copy.indexOf(Math.min.apply(null, copy))
        sorted.push(copy[smallestIndex])
        copy.splice(smallestIndex, 1)
        count++
    }
    return sorted
}

// Native Version of minNumber

Array.prototype.findMin() = function () {
    let smallest = this[0]
    let smallestNumber = 0
    for (index = 0; index < this.length; index++) {
        if (this[index] < smallest) {
            smallest = this[index]
            smallestNumber = index
        }
    }
    return smallestNumber
}

// TESTS

console.log( '([]) => ', [].mySort() ) // []
console.log( '([-4, 0, 1, 3, 3, Infinity]) =>', [-4, 1, Infinity, 3, 3, 0].mySort() ) // [-4, 0, 1, 3, 3, Infinity]
console.log( '([ -43, -7, 0, 1, 5, 6, 6, 9, 22, 34, 54, 57, 99, 545 ]) =>', [0, 1, 5, 6, -7, 54, 545, 34, 57, 9, 6, -43, 22, 99].mySort() ) // [ -43, -7, 0, 1, 5, 6, 6, 9, 22, 34, 54, 57, 99, 545 ]

/*

SOURCE: https://github.com/martinoamigo/grokking_alogritimhs/blob/f89fe24a55a8ed3aa2d85995206f28477e3db956/Selection%20Sort.js
--------------------------------------------------------------------------------------------------------------------------------------------*/