/*

MERGE SORT


--------------------------------------------

SOLUTION STEPS

1. 

*/

//SOLUTION


function findMinAndRemoveSorted(array) {
    return array.shift()
}

function merge(firstSubarray, secondSubArray) {
    let sorted = []
    while(firstSubarray.length != 0 && secondSubArray.length != 0) {
        if(firstSubarray[0] < secondSubArray[0]){
            sorted.push(findMinAndRemoveSorted(firstSubarray))
        } else {
            sorted.push(findMinAndRemoveSorted(secondSubArray))
        }
    }
    return sorted.concat(firstSubarray).concat(secondSubArray)
}

function mergeSort(array) {
    let midpoint = array.length/2
    let firstHalf = array.slice(0, midpoint)
    let secondHalf = array.slice(midpoint, array.length)
    let sorted

    if(array.length < 2){
        return array
    } else {
        sorted = merge(mergeSort(firstHalf), mergeSort(secondHalf))
    }
    return sorted
}

// TEST

console.log('([ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]) =>',mergeSort([1, 2, 6, 7, 8, 3, 4, 5, 9, 10]))