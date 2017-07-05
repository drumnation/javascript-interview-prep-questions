/*

SELECTION SORT

Using Selection Sort, we can sort elements in O(n^2) time

The way this sorting algorithm works is it looks for the smallest number in an array, and then
'selects' it and pushes it into another array or swaps it with the first element in the array.

E.G. if we have an array [7,3,1,5,2]

after the first iteration the array will look like this [1,3,5,2,7] or [1] depending on how you structure the function

the 1 will be 'selected' and placed into the front of the array. This can also work by taking the 1 and adding it to an empty array.

------------------------------------------------------------------------------------------
*/

let selectionSort = array => {
  let newMin;
  let sorted = []
  while(array.length != 0){
    newMin = minAndRemove(array)
    sorted.push(newMin)
  }
  return sorted;
}

let minAndRemove = array => {
  let minIndex
  let min = array[0]
  for (let i = 0; i < array.length; i++){
    let currentElement = array[i]
    if (array[i] < min){
      min = array[i]
      minIndex = i
    }
  }
  array.splice(minIndex, 1)
  return min
}
