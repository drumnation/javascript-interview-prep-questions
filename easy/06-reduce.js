/* 

REDUCE

Implement the reduce function.

------------------------------------------------------------------*/

/*

1. Call myReduce on array
2. Pass callback function and initialVal of 0
3. Saves initialVal to prevVal
4. Run the callback for each number in the array
5. myReduce will add the prevVal to the currentVal
6. Returns the sum of all numbers in the array added up

*/

Array.prototype.myReduce = function(callback, initialVal) {
    let prevVal = initialVal
    for (let index = 0; index < this.length; index++) {
        prevVal = callback(prevVal, this[index])
    }
    return prevVal
}

// TESTS

console.log([1, 2, 3, 4].myReduce((a, b) => a + b, 0))