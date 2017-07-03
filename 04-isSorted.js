/* 

IS-SORTED

Returns true or false, indicating whether the given array of numbers is sorted.

------------------------------------------------------------------------------------------*/

/*

1. Pass array to check as argument
2. isSorted changes array to a string '1,4,5'
    a. uses sortArray to either sort array asc or desc, set by argument
3. After sortArray sorts asc or desc compare against original and return bool

*/

// CHECK ASC AND DESC SORT

const sortArray = (array, direction) => {
    let copy = [...array]
    return (
        direction === "ascending"
            ? copy.sort((a, b) => a - b)
            : copy.sort((a, b) => b - a)
    ).toString()
}

const isSorted = (array) => {
    return ( 
        array.toString() === sortArray(array, "ascending") 
        || 
        array.toString() === sortArray(array, "descending")
    )
}

// TESTS 

console.log('IS SORTED')
console.log(isSorted([1,4,5])); // true
console.log(isSorted([ -10, -20, -30])); // true
console.log(isSorted([0, -6, 10])); //false
console.log(isSorted([0, 6, 10])); // true
console.log(isSorted([6, 0, 10])); // false
console.log(isSorted([ -10, -20, -30])) // true

/*

SOURCE: https://gist.github.com/ottoinfo/102fde6fef82a177fedf02fd1c470669
------------------------------------------------------------------------------------*/

// ISSORTED LITE

const isSortedLite = (array) => {
    let copy = [...array]
    return ( 
        array.toString() === copy.sort((a, b) => a - b).toString() 
        || 
        array.toString() === copy.sort((a, b) => b - a).toString()
    )
}

// TESTS

console.log('IS SORTED LITE')
console.log(isSortedLite([1,4,5])); // true
console.log(isSortedLite([ -10, -20, -30])); // true
console.log(isSortedLite([0, -6, 10])); //false
console.log(isSortedLite([0, 6, 10])); // true
console.log(isSortedLite([6, 0, 10])); // false
console.log(isSortedLite([ -10, -20, -30])) // true