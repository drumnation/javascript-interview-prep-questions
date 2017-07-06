/*

BINARY SEARCH

Using Binary Search, we can search for an element in O(log n) time
however, Binary Searches MUST be done after sorting

Binary Search operates by checking for the value in the middle of the array. Then, if the value is less than that midpoint value, it will only check the left side of the array. If the value is greater than the midpoint value, it will check the right side of the array. After every iteration, either the start point or the end point changes, and we recalculate the midpoint. This continues to happen until the start point and end point equal to each other. If we cannot find the by this time, that means the value does not exist.

Here is how I wrote the Binary Search function -
1. We pass in an array, and a value we are looking for
2. We set the target variable as the value, which is not entirely necessary but good for readability.
3. We set a start point of where we should search. This should typically be index 0.
4. We set the end point which should be where our search ends. This should be the length of array minus one.
5. Begin while loop which will run as long as the start point is less than or equal to the end point.
6. Calculate midpoint.
7. Check to see if midpoint is equal to the target we are looking for and return true otherwise...
8. Compare midpoint value to target value and eliminate a section of the array by setting the start point or end point.
9. Continue until we find the target or until start <= end.
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
        } else if (array[middle] < target) {
            start = middle + 1
        } else if (array[middle] > target) {
            end = middle - 1
        }
    }
    return false
}
