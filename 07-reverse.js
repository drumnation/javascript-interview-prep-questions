/* 

REVERSE

Implement the reduce function.

------------------------------------------------------------------*/

// ARRAY.REVERSE

const reverseString = (string) => string.split('').reverse().join('')

// TEST

console.log(reverseString('string'))

/*------------------------------------------------------------------*/

// DECREMENTING WHILE LOOP

const reverseStringWhile = (string) => {
    let index = string.length
    let reversedWord = ''

    while (index > 0) {
        reversedWord += string.substring(index - 1, index)
        index--
    }

    return reversedWord
}

// TEST

console.log(reverseStringWhile('string'))

/*------------------------------------------------------------------

    RECURSIVE



    String.charAt and String.substr pass through a different value 
    calling itself each time, until the string is empty.

*/

const reverse = (string) => (string === '') ? '' : reverse(string.substr(1)) + string.charAt(0)

// TEST

console.log(reverse('string'))

/*

SOURCE: https://ilikekillnerds.com/2015/07/reversing-a-string-in-javascript-3-different-ways/
SOURCE: http://eddmann.com/posts/ten-ways-to-reverse-a-string-in-javascript/
------------------------------------------------------------------*/