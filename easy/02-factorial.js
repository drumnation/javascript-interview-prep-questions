/* 

FACTORIAL

Returns a number that is the factorial of the given number.

In mathematics, the factorial of a non-negative integer n, denoted by n!, 
is the product of all positive integers less than or equal to n. 

For example, 5! = 5 x 4 x 3 x 2 x 1 = 120
------------------------------------------------------------------------*/

// NON-RECURSIVELY WITH WHILE LOOP

const factorialWhile = (number) => {
    if (number < 0) { return -1 } // If the number is less than 0, reject it.
    else if (number === 0) { return 1 } // If the number is 0, its factorial is 1.
    let copy = number
    while (number-- > 2) { copy *= number } return copy
}

let result = factorialWhile(8) // 40320

/* 
SOURCE: https://docs.microsoft.com/en-us/scripting/javascript/advanced/recursion-javascript
------------------------------------------------------------------------------------------*/

// RECURSIVELY

// 1. run function
// 2. is number === 0?
// 3. if no, multiply 


function factorial(number) {
    if (number === 0) { return 1 } return number * factorial(number - 1) 
}

// LOGS USED

// console.log('number', number)
// console.log('* num is equal to 0 -> (return 1)')
// console.log(`=> return ${number} * factorial(${number - 1}): `, (number * factorial(number - 1)))

// TESTS

console.log(factorial(0)) // 1

/* CONSOLE OUTPUT

number 0
* num is equal to 0 -> (return 1)
1

*/

console.log(factorial(1)) // 1

/* CONSOLE OUTPUT

number 1
number 0
* num is equal to 0 -> (return 1)
=> return 1 * factorial(0):  1
number 0
* num is equal to 0 -> (return 1)
1

*/

console.log('factorial(6): ', factorial(6)) // 720

/* CONSOLE OUTPUT

number 6
number 5
number 4
number 3
number 2
number 1
number 0
* num is equal to 0 -> (return 1)
=> return 1 * factorial(0):  1
number 0
* num is equal to 0 -> (return 1)
=> return 2 * factorial(1):  2
number 1
number 0
* num is equal to 0 -> (return 1)
=> return 1 * factorial(0):  1
number 0
* num is equal to 0 -> (return 1)
=> return 3 * factorial(2):  6
number 2
number 1
number 0
* num is equal to 0 -> (return 1)
=> return 1 * factorial(0):  1
number 0
* num is equal to 0 -> (return 1)
=> return 2 * factorial(1):  2
number 1
number 0
* num is equal to 0 -> (return 1)
=> return 1 * factorial(0):  1
number 0
* num is equal to 0 -> (return 1)
=> return 4 * factorial(3):  24
number 3
number 2
number 1
number 0
* num is equal to 0 -> (return 1)
=> return 1 * factorial(0):  1
number 0
* num is equal to 0 -> (return 1)
=> return 2 * factorial(1):  2
number 1
number 0
* num is equal to 0 -> (return 1)
=> return 1 * factorial(0):  1
number 0
* num is equal to 0 -> (return 1)
=> return 3 * factorial(2):  6
number 2
number 1
number 0
* num is equal to 0 -> (return 1)
=> return 1 * factorial(0):  1
number 0
* num is equal to 0 -> (return 1)
=> return 2 * factorial(1):  2
number 1
number 0
* num is equal to 0 -> (return 1)
=> return 1 * factorial(0):  1
number 0
* num is equal to 0 -> (return 1)
=> return 5 * factorial(4):  120
number 4
number 3
number 2
number 1
number 0
* num is equal to 0 -> (return 1)
=> return 1 * factorial(0):  1
number 0
* num is equal to 0 -> (return 1)
=> return 2 * factorial(1):  2
number 1
number 0
* num is equal to 0 -> (return 1)
=> return 1 * factorial(0):  1
number 0
* num is equal to 0 -> (return 1)
=> return 3 * factorial(2):  6
number 2
number 1
number 0
* num is equal to 0 -> (return 1)
=> return 1 * factorial(0):  1
number 0
* num is equal to 0 -> (return 1)
=> return 2 * factorial(1):  2
number 1
number 0
* num is equal to 0 -> (return 1)
=> return 1 * factorial(0):  1
number 0
* num is equal to 0 -> (return 1)
=> return 4 * factorial(3):  24
number 3
number 2
number 1
number 0
* num is equal to 0 -> (return 1)
=> return 1 * factorial(0):  1
number 0
* num is equal to 0 -> (return 1)
=> return 2 * factorial(1):  2
number 1
number 0
* num is equal to 0 -> (return 1)
=> return 1 * factorial(0):  1
number 0
* num is equal to 0 -> (return 1)
=> return 3 * factorial(2):  6
number 2
number 1
number 0
* num is equal to 0 -> (return 1)
=> return 1 * factorial(0):  1
number 0
* num is equal to 0 -> (return 1)
=> return 2 * factorial(1):  2
number 1
number 0
* num is equal to 0 -> (return 1)
=> return 1 * factorial(0):  1
number 0
* num is equal to 0 -> (return 1)
=> return 6 * factorial(5):  720
number 5
number 4
number 3
number 2
number 1
number 0
* num is equal to 0 -> (return 1)
=> return 1 * factorial(0):  1
number 0
* num is equal to 0 -> (return 1)
=> return 2 * factorial(1):  2
number 1
number 0
* num is equal to 0 -> (return 1)
=> return 1 * factorial(0):  1
number 0
* num is equal to 0 -> (return 1)
=> return 3 * factorial(2):  6
number 2
number 1
number 0
* num is equal to 0 -> (return 1)
=> return 1 * factorial(0):  1
number 0
* num is equal to 0 -> (return 1)
=> return 2 * factorial(1):  2
number 1
number 0
* num is equal to 0 -> (return 1)
=> return 1 * factorial(0):  1
number 0
* num is equal to 0 -> (return 1)
=> return 4 * factorial(3):  24
number 3
number 2
number 1
number 0
* num is equal to 0 -> (return 1)
=> return 1 * factorial(0):  1
number 0
* num is equal to 0 -> (return 1)
=> return 2 * factorial(1):  2
number 1
number 0
* num is equal to 0 -> (return 1)
=> return 1 * factorial(0):  1
number 0
* num is equal to 0 -> (return 1)
=> return 3 * factorial(2):  6
number 2
number 1
number 0
* num is equal to 0 -> (return 1)
=> return 1 * factorial(0):  1
number 0
* num is equal to 0 -> (return 1)
=> return 2 * factorial(1):  2
number 1
number 0
* num is equal to 0 -> (return 1)
=> return 1 * factorial(0):  1
number 0
* num is equal to 0 -> (return 1)
=> return 5 * factorial(4):  120
number 4
number 3
number 2
number 1
number 0
* num is equal to 0 -> (return 1)
=> return 1 * factorial(0):  1
number 0
* num is equal to 0 -> (return 1)
=> return 2 * factorial(1):  2
number 1
number 0
* num is equal to 0 -> (return 1)
=> return 1 * factorial(0):  1
number 0
* num is equal to 0 -> (return 1)
=> return 3 * factorial(2):  6
number 2
number 1
number 0
* num is equal to 0 -> (return 1)
=> return 1 * factorial(0):  1
number 0
* num is equal to 0 -> (return 1)
=> return 2 * factorial(1):  2
number 1
number 0
* num is equal to 0 -> (return 1)
=> return 1 * factorial(0):  1
number 0
* num is equal to 0 -> (return 1)
=> return 4 * factorial(3):  24
number 3
number 2
number 1
number 0
* num is equal to 0 -> (return 1)
=> return 1 * factorial(0):  1
number 0
* num is equal to 0 -> (return 1)
=> return 2 * factorial(1):  2
number 1
number 0
* num is equal to 0 -> (return 1)
=> return 1 * factorial(0):  1
number 0
* num is equal to 0 -> (return 1)
=> return 3 * factorial(2):  6
number 2
number 1
number 0
* num is equal to 0 -> (return 1)
=> return 1 * factorial(0):  1
number 0
* num is equal to 0 -> (return 1)
=> return 2 * factorial(1):  2
number 1
number 0
* num is equal to 0 -> (return 1)
=> return 1 * factorial(0):  1
number 0
* num is equal to 0 -> (return 1)
factorial(6):  720

SOURCE: http://www.w3resource.com/javascript-exercises/javascript-recursion-function-exercise-1.php
--------------------------------------------------------------------------------------------------*/
