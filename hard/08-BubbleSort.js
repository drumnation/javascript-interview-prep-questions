/*

BUBBLE SORT

Using Bubble Sort, we can sort elements in O(n^2) time

Essentially, what's happening here is that we are iterating through an unsorted array, and swapping
elements two at a time. Each iteration through the array will result in at least a single element in the right place starting from the end of the array.

E.G. if we have an array [7,3,1,5,2]

after the first iteration the array will look like this [3,1,5,2,7]
the 7 will 'bubble' up to the end of the array thus being in the right place
iterations will continue to occur until the function determines there are no more swaps to be made
which means our array is sorted

------------------------------------------------------------------------------------------
*/

let bubbleSort = array => {
  let length = array.length
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < (length - i - 1); j++) {
      if(array[j] > array[j+1]) {
        let tmp = array[j]
        array[j] = array[j+1]
        array[j+1] = tmp
      }
    }
  }
  return array
}

let bubbleSort2 = array => {
  let swapped
  do {
    swapped = false;
    for (let i = 0; i < array.length-1; i++) {
      if (array[i] > array[i+1]) {
        let temp = array[i]
        array[i] = array[i+1]
        array[i+1] = temp
        swapped = true
      }
    }
  } while (swapped)
}
