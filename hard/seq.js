/* 

SEQ

Resolve an array of promises in sequence (as opposed to Promise.all, which does it in parallel).

------------------------------------------------------------------------------------------

SOLUTION STEPS

1.


*/

// SOLUTION


const seq = async (promisesArray) => {
    try {
        const sequence = await promisesArray.map( promise => promise )
        console.log(sequence)
    } catch (err) {
        console.log(err)
    }
}
// TESTS
let a = Promise.resolve('a')
let b = Promise.resolve('b')
let c = Promise.resolve('c')
seq([a, b, c]) // ['a', 'b', 'c']
seq([a, c, b]) // ['a', 'c', 'b']

/*

SOURCE: https://www.thepolyglotdeveloper.com/2015/01/fibonacci-sequence-printed-javascript/
-------------------------------------------------------------------------------------------*/