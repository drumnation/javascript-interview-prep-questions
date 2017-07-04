/* 

ISPALINDROME

Return true or false indicating whether the given string is a 
plaindrone (case and space insensitive).

------------------------------------------------------------------

1. Remove special characters, spaces, and make lowercase (The fourth test)
2. Reverse formatChar for comparison
3. Check to see if string is a Palindrome

*/

// WITH EDGE CASES

const isPalindrome = (string) => {
    const formatChar = string.replace(/[^A-Z0-9]/ig, "").toLowerCase()
    const checkPalindrome = formatChar.split('').reverse().join('')
    return (formatChar === checkPalindrome)
}

// SIMPLE

function checkPalindrome(string) {
    return string == string.split('').reverse().join('')
}

// TESTS

console.log(isPalindrome('')) // true
console.log(isPalindrome('abcdcba')) // true
console.log(isPalindrome('abcd')) // false
console.log(isPalindrome('A man a plan a canal Panama')) // true

/*

SOURCE: https://stackoverflow.com/a/32106729/8245251
------------------------------------------------------------------*/