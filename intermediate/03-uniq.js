/* 

UNIQ

Takes an array of numbers, and returns the unique numbers. 

Can you do it in O(N) time?

-------------------------------------------------------------------------

SOLUTION STEPS

1. Create a seen object to track the occurances
2. return 

*/

// SOLUTION

Array.prototype.uniq = function() {
    let seen = {}

    return this.reduce((reductionValue, currentValue) => {
        if (currentValue in seen) {
            return reductionValue
        }
        seen[currentValue] = true
        return reductionValue.concat(currentValue)
    }, [])
}

// TESTS

console.log('([]) =>', [].uniq()) // []
console.log('([ 1, 4, 2, 3, 8 ]) =>', [1, 4, 2, 2, 3, 4, 8].uniq()) // [1, 4, 2, 3, 8]

/*

SOURCE: https://gist.github.com/inkdeep/5101971
-------------------------------------------------------------------------*/