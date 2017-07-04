/* 

ASSIGN DEEP

Like Object.assign, but merges objects deeply.

------------------------------------------------------------------

SOLUTION STEPS

1. 

*/

// SOLUTION

const assignDeep = (object1, object2) => {
    
}

// TESTS

console.log(assignDeep({ a: 1 }, {}))                                      // { a: 1 }
console.log(assignDeep({ a: 1 }, { a: 2 }))                                // { a: 2 }
console.log(assignDeep({ a: 1 }, { a: { b: 2 } }))                         // { a: { b: 2 } }
console.log(assignDeep({ a: { b: { c: 1 }}}, { a: { b: { d: 2 }}, e: 3 })) // { a: { b: { c: 1, d: 2 }}, e: 3 }

/*

SOURCE: 
-----------------------------------------------------------------------------------------------*/