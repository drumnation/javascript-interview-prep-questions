/*
ISPRIME

1. a modulus expression will return zero if the number isn’t prime

2. loop from two all the way up until our number minus one because we know that our number will be divisible by itself and one
    i.e. only need to check range between 1 and itself because above is impossible

3. If remainder of number divided by the count is zero then we know it is not prime, break out

SOURCE: https://www.thepolyglotdeveloper.com/2015/04/determine-if-a-number-is-prime-using-javascript/
----------------------------------------------------------------------------------------------------*/

isPrime = possiblePrime => {
    for (let count = 2; count < possiblePrime; count++) {
        if (possiblePrime % count === 0) {
            return false
        }
    }
    return possiblePrime > 1
}

// TESTS

console.log('isPrime? True or False')
console.log('**********************')
console.log('0 (false) => ', isPrime(0))
console.log('1 (false) => ', isPrime(1))
console.log('17 (true) => ', isPrime(17))
console.log('10000000000000 (false) => ', isPrime(10000000000000))

