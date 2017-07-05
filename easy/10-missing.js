/* 

MISSING

Takes an unsorted array of unique numbers (ie. no repeats) from 1 through some number n, 
and returns the missing number in the sequence (there are either no missing numbers, or 
exactly one missing number). 

Can you do it in O(N) time? 

Hint: There’s a clever formula you can use.

------------------------------------------------------------------

SOLUTION STEPS

1. Create empty array for missing sequence numbers
2. Set a sequenceLength const using the last number (or max) as the array length
(with the missing numbers, sequence.length would not be the length of the full sequence and would chop off 17 in ex. 6)
3. Iterate through all indexes in full sequence
4. If the possibleMissingNum is not in the sequence it will return -1 which is true
5. Push the -1 possibleMissingNum to the missingNumbers array
5. If the array is empty return undefined, otherwise return the missingNumbers array

*/


const missing = (sequence) => {
    let missingNumbers = []
    const sequenceLength = Math.max.apply(null, sequence)
    for (let possibleMissingNum = 1; possibleMissingNum < sequenceLength; possibleMissingNum++) {
        sequence.indexOf(possibleMissingNum) === -1 ? missingNumbers.push(possibleMissingNum) : null
    }
    return missingNumbers.length > 0 ? missingNumbers : undefined
}


// TESTS

console.log('[] (undefined) =>', missing([])) // undefined
console.log('[1, 4, 3] (2) =>', missing([1, 4, 3])) // 2
console.log('[2, 3, 4] (1) =>', missing( [2, 3, 4])) // 1
console.log('[5, 1, 4, 2] (3) =>', missing([5, 1, 4, 2])) // 3
console.log('[1, 2, 3, 4] (undefined) =>', missing([1, 2, 3, 4])) // undefined
console.log('[9,1,5,8,7,4,3,0,10,13,15,19,12,16,18] (2,6,11,14,17) =>', missing([9,1,5,8,7,4,3,0,10,13,15,19,12,16,18]))  // 2,6,11,14,17
console.log('[0,1,3,4,5,7,8] (2,6) =>', missing([0,1,3,4,5,7,8]))  // 2,6

/*

SOURCE: https://gist.github.com/amaxwell01/6108502
------------------------------------------------------------------*/