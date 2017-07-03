/* 

GET THE FIRST N FIBONACCI NUMBERS

The Fibonacci Sequence is the series of numbers: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, . . . 
Each subsequent number is the sum of the previous two.

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

/*

SOURCE: https://www.thepolyglotdeveloper.com/2015/01/fibonacci-sequence-printed-javascript/
-------------------------------------------------------------------------------------------*/

// RECURSIVELY

/*

1. If number is negative it's fibValue is zero
2. If number is less or equal to 2 it's fibValue is 1
3. Otherwise fibValue is the sum of the two previous fib numbers

*/ 

const recursiveFib = (number) => {
    return (
        (number < 1) 
            ? 0
            : (number <= 2)  // 
                ? 1
                : recursiveFib(number - 1) + recursiveFib(number - 2) // 
    )
}

// TESTS

console.log('RECURSIVE FIB')
console.log(recursiveFib(-50)) // 0
console.log(recursiveFib(0)) // 0
console.log(recursiveFib(1)) // 1
console.log(recursiveFib(8)) // 21
console.log(recursiveFib(10)) // 55
console.log(recursiveFib(20)) // 6765
console.log(recursiveFib(4)) // 3

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