/*

BINARY SEARCH

Using Binary Search, we can search for an element in O(log n) time
however, Binary Searches MUST be done after sorting

------------------------------------------------------------------------------------------
*/

let binarySearch = (array, value) => {
  let target = value,
  start = 0,
  end = array.length - 1,
  middle

  while (start <= end){
    middle = Math.floor( (end + start)/2 )
    if ( array[middle] === target ){
      return true
    }else if (array[middle] < target){
      start = middle + 1
    }else if (array[middle] > target){
      end = middle - 1
    }
  }
  return false
}
