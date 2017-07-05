/* 

GET THE FIRST N FIBONACCI NUMBERS

The Fibonacci Sequence is the series of numbers: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, . . . 
Each subsequent number is the sum of the previous two.

------------------------------------------------------------------------------------------*/

// RECURSIVELY

/*

NOTE: This can't handle numbers over 50, the looping version above can fufilling the requirements of Fib2

SOLUTION STEPS

1. If number is negative it's fibValue is zero
2. If number is less or equal to 2 it's fibValue is 1
3. Otherwise fibValue is the sum of the two previous fib numbers

*/ 

function fib(number) {
    switch(number) {
        case 0: return 0
        case 1: return 1
        default: return fib(number - 1) + fib(number - 2)
    }
}

// TESTS

console.log('RECURSIVE FIB')
// console.log(fib(-50)) // 0
console.log(fib(0)) // 0
console.log(fib(1)) // 1
console.log(fib(8)) // 21
console.log(fib(10)) // 55
console.log(fib(20)) // 6765
console.log(fib(4)) // 3
// console.log(fib(50)) // 3

/* DIAGRAM

fibonacci(4)   .--------> 2 + 1 = 3
      |          /               |
      '--> fibonacci(3) + fibonacci(2)
            |    ^           
            |    '----------- 2 = 1 + 1 <----------.
1st step -> |                     ^                |
            |                     |                |
            '---->  fibonacci(2) -' + fibonacci(1)-'

SOURCE: https://stackoverflow.com/a/31983992/8245251
-------------------------------------------------------------------------------------------*/