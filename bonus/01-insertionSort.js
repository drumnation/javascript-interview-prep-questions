/*

INSERTION SORT

Insertion sort is a simple sorting algorithm that 
builds the final sorted array (or list) one item 
at a time. 

It is much less efficient on large lists than more 
advanced algorithms such as quicksort, heapsort, 
or merge sort.
--------------------------------------------

SOLUTION STEPS

1. Instantiate min and create a sorted array
2. Iterate through entire array
3. Set min equal to the return of findMinAndRemove
4. Push the min to the sorted array
5. Repeat

1. Set min = to Math.max.apply(null, array)
2. Use indexOf to find the index of min
3. Splice 1 element starting at minIndex from array
4. Return new min to insertionSort

*/

//SOLUTION

const findMinAndRemove = (array) => {
    let min = Math.min.apply(null, array)
    let minIndex = array.indexOf(min)
    array.splice(minIndex, 1)
    return min
}

const insertionSort = (array) => {
    let min
    let sorted = []
    while (array.length !== 0) {
        min = findMinAndRemove(array)
        sorted.push(min)
    }
    return sorted
}

// TESTS

console.log('([ -1, 0, 1, 2, 3, 4, 5 ]) =>', insertionSort([3, 0, 2, 5, -1, 4, 1])) // [ -1, 0, 1, 2, 3, 4, 5 ]