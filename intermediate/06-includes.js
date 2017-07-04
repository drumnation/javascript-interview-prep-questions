/* 

INCLUDES

Return true or false indicating whether the given number appears in the given sorted array. 

Can you do it in O(log(N)) time?

------------------------------------------------------------------

SOLUTION STEPS

1. Set the index to the this.length to start the counter at the last index
2. Iterate backwards until zero
    a. if element is equal to argument elementToCheck
    b. return true
3. otherwise return false

*/

// SOLUTION

Array.prototype.myIncludes = function(elementToCheck) {
    let index = this.length
    while (index--) {
        if (this[index] === elementToCheck) {
            return true
        }
    }
    return false
}

// TESTS

console.log( ( [1, 3, 8, 10] ).myIncludes(8) ) // true
console.log( ( [1, 3, 8, 8, 15] ).myIncludes(15) ) // true
console.log( ( [1, 3, 8, 10, 15] ).myIncludes(9) ) // false

/*

SOURCE: https://stackoverflow.com/a/237176/8245251
-----------------------------------------------------------------------------------------------*/