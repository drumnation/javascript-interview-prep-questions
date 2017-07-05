/* 

SEQ

The Fibonacci Sequence is the series of numbers: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, . . . 
Each subsequent number is the sum of the previous two.

Like the fib function you implemented above, able to handle numbers up to 50 (hint: look up memoization).

------------------------------------------------------------------------------------------*/

// NON-RECURSIVELY WITH FOR LOOP

/*

1. Start our loop at count = 2 since fib number is the sum of the previous 2. (3rd item)
2. a is dropped off and replaced with b.
3. b is replaced with the current index value of the sequence, being our new sum.
4. When loop reaches number index, return new sum value

*/

const resolve = (num) => {}

// TESTS

let a = Promise.resolve('a')
let b = Promise.resolve('b')
let c = Promise.resolve('c')
await console.log(seq([a, b, c])) // ['a', 'b', 'c']
await console.log(seq([a, c, b])() // ['a', 'c', 'b']

/*

SOURCE: https://www.thepolyglotdeveloper.com/2015/01/fibonacci-sequence-printed-javascript/
-------------------------------------------------------------------------------------------*/