/* 

PERMUTE

Return an array of strings, containing every permutation of the given string.

------------------------------------------------------------------------------------------

SOLUTION STEPS

1. 

*/

// SOLUTION

const permute = (string) => {
    switch (string.length) { case 0: return []; case 1: return string }
    
    let permutations = []
    for (let index = 0; index < string.length; index++) {
        let character = string[index]
        if (string.indexOf(character) !== index) 
            continue

        let remainingString = string.slice(0, index) + string.slice(index + 1, string.length)
        for (let subPermutation of permute(remainingString))
            permutations.push(character + subPermutation)

    }
    return permutations
}

// TESTS


console.log(permute('')) // []
console.log(permute('abc')) // ['abc', 'acb', 'bac', 'bca', 'cab', 'cba']
console.log(permute('xyz')) // [ 'xyz', 'xzy', 'yxz', 'yzx', 'zxy', 'zyx' ]

/*

SOURCE: https://stackoverflow.com/a/39928045/8245251
-------------------------------------------------------------------------------------------*/