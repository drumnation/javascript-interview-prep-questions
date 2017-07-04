/* 

ASSIGN DEEP

Like Object.assign, but merges objects deeply.

------------------------------------------------------------------

SOLUTION STEPS

1. 

*/

// SOLUTION

const assignDeep = (target, source) => {
    for (let key in source) {
        if (source.hasOwnProperty(key)) {
            let value = source[key]
            if (typeof value === 'object' && value) {
                target[key] = target[key] || {}
                assignDeep(target[key], value)
            } else {
                target[key] = value
            }
        }
    }
    return target
}

// TESTS

console.log( '({ a: 1 }) =>', assignDeep({ a: 1 }, {}) ) // { a: 1 }
console.log( '({ a: 2 }) =>', assignDeep({ a: 1 }, { a: 2 }))  // { a: 2 }
console.log( '({ a: { b: 2 } }) =>', assignDeep({ a: 1 }, { a: { b: 2 } } ) ) // { a: { b: 2 } }
console.log( '({ a: { b: { c: 1, d: 2 }}, e: 3 }) =>', assignDeep({ a: { b: { c: 1 }}}, { a: { b: { d: 2 }}, e: 3 }) ) // { a: { b: { c: 1, d: 2 }}, e: 3 }

/*

SOURCE: https://www.reddit.com/r/javascript/comments/4g0904/objectassign_question/
-----------------------------------------------------------------------------------------------*/