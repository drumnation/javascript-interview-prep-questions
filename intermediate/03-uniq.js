/* 

UNIQ

Takes an array of numbers, and returns the unique numbers. 

Can you do it in O(N) time?

-------------------------------------------------------------------------

SOLUTION STEPS

1. Create a test object and a unique array to hold the deduped numbers
2. Iterate through all array numbers
    a. if test object item has a value that matches the current key
        1. that means it already exists
        2. ! bang means: if it doesn't exist
    b. set value of test key equal to true 
        1. so next time it will fail conditional
    c. push this number for first time to unique number array
3. Return the unique array

*/

// SOLUTION

Array.prototype.uniq = () => {
        let test = {}
        let unique = []
    for (let index = 0, len = this.length; index < len; index++) {
        if (!test[this[index]]) {
            test[this[index]] = true
            unique.push(this[index])
        }
    }
    return unique
}

// TESTS

console.log('([]) =>', [].uniq()) // []
console.log('([ 1, 4, 2, 3, 8 ]) =>', [1, 4, 2, 2, 3, 4, 8].uniq()) // [1, 4, 2, 3, 8]

/*

SOURCE: https://gist.github.com/inkdeep/5101971
-------------------------------------------------------------------------*/