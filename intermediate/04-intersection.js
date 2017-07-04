/* 

INTERSECTION

Find the intersection of two arrays. 

Can you do it in O(M+N) time (where M and N are the lengths of the two arrays)?

------------------------------------------------------------------

SOLUTION STEPS

1.

*/


// SOLUTION

const intersection = (array1, array2) => {
    for (let index = 0; index < array1.length; index++) {
        return array1.filter( number => array2.indexOf(number) !== -1 )
    }
}

// TESTS

console.log('([4, 1]) =>', intersection([1, 5, 4, 2], [8, 91, 4, 1, 3])) // [4, 1]
console.log('([]) =>', intersection([1, 5, 4, 2], [7, 12])) // []

/*

SOURCE: 
------------------------------------------------------------------*/