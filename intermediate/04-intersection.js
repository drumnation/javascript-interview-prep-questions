/* 

INTERSECTION

Find the intersection of two arrays. 

Can you do it in O(M+N) time (where M and N are the lengths of the two arrays)?

------------------------------------------------------------------

SOLUTION STEPS

1. Return an array that checks every testNumber against every number in array2
2. If the index of the number being checked is not -1 (then it exists)
3. Return array of testNumbers that intersect

*/


// SOLUTION

const intersection = (array1, array2) => array1.filter( testNumber => array2.indexOf(testNumber) !== -1 )

// TESTS

console.log('([4, 1]) =>', intersection([1, 5, 4, 2], [8, 91, 4, 1, 3])) // [4, 1]
console.log('([]) =>', intersection([1, 5, 4, 2], [7, 12])) // []

/*

SOURCE: https://stackoverflow.com/a/1885569/8245251
------------------------------------------------------------------*/