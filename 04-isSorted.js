/* 

ISSORTED

Returns true or false, indicating whether the given array of numbers is sorted.

------------------------------------------------------------------------------------------*/

/*
 * check the array is sorted
 * return: if positive ->  1
 *         if negative -> -1
 *         not sorted  ->  0
 */

Array.prototype.isSorted = function() {
  return (function(direction) {
    return this.reduce(function(prev, next, i, arr) {
      if (direction === undefined)
        return (direction = prev <= next ? 1 : -1) || true;
      else
        return (direction + 1 ?
          (arr[i-1] <= next) : 
          (arr[i-1] >  next));
    }) ? Number(direction) : false;
  }).call(this);
}

var arr = [3,2,1,0];
arr.isSorted();

// TESTS 

console.log(isSorted([])) // true
console.log(isSorted([-Infinity, -5, 0, 3, 9])) // true
console.log(isSorted([3, 9, -3, 10])) // false