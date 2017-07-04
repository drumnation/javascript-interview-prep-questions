/* 

MISSING

Takes an unsorted array of unique numbers (ie. no repeats) from 1 through some number n, 
and returns the missing number in the sequence (there are either no missing numbers, or 
exactly one missing number). 

Can you do it in O(N) time? 

Hint: There’s a clever formula you can use.

------------------------------------------------------------------*/

// const missing = (numArray) => {
//     let missing = []
//     for (let index = 0; index < numArray.length; index++) {
//         if ((numArray[index + 1] - numArray[index]) > 1) {
//             missing.push(numArray[index + 1] - numArray[1])   
//         }
//     }

//     if (missing.length === 0) {
//         return undefined
//     } else {
//         return missing
//     }
// }

const missing = (numArray) => {
    let missing = []
    for (let index = 0; index < numArray.length; index++) {
        if ((numArray[index + 1] - numArray[index]) > 1) {
            missing.push(numArray[index + 1] - numArray[1])   
        }
    }
    var arrayLength = Math.max.apply(Math, intArray);

    for ( var i = 0; i < arrayLength; i++ ) {
        if ( intArray.indexOf(i) < 0 ) {
            missing.push( i );
        }
    }

    if (missing.length === 0) {
        return undefined
    } else {
        return missing
    }
}


// TESTS

console.log('[] (undefined) =>', missing([])) // undefined
console.log('[1, 4, 3] (2) =>', missing([1, 4, 3])) // 2
console.log('[2, 3, 4] (1) =>', missing( [2, 3, 4])) // 1
console.log('[5, 1, 4, 2] (3) =>', missing([5, 1, 4, 2])) // 3
console.log('[1, 2, 3, 4] (undefined) =>', missing([1, 2, 3, 4])) // undefined

/*

SOURCE: https://gist.github.com/amaxwell01/6108502
------------------------------------------------------------------*/