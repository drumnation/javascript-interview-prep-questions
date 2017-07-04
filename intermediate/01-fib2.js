/* 

GET THE FIRST N FIBONACCI NUMBERS

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

const loopingFib = (number) => {
    let a = 0, b = 1, temp = 1
    for (let count = 2; count <= number; count++) {
        temp = a + b
        a = b
        b = temp
    }
    return temp
}

// TESTS

console.log('LOOPING FIB')
console.log(loopingFib(-50)) // 0
console.log(loopingFib(0)) // 0
console.log(loopingFib(1)) // 1
console.log(loopingFib(8)) // 21
console.log(loopingFib(10)) // 55
console.log(loopingFib(20)) // 6765
console.log(loopingFib(4)) // 3
console.log(loopingFib(50)) // 3

/*

SOURCE: https://www.thepolyglotdeveloper.com/2015/01/fibonacci-sequence-printed-javascript/
-------------------------------------------------------------------------------------------*/