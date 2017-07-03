/* 

INDEXOF

Implement the indexOf function for arrays.

------------------------------------------------------------------*/

Array.prototype.myIndexOf = function (ele) {
    for (let i = 0; i < this.length; i++) {
        if (ele === this[i]) {
            return i;
        }
    }
    return -1
}

// TESTS 

console.log([1, 2, 3].myIndexOf(1)) // 0
console.log([1, 2, 3].myIndexOf(4)) // -1
console.log([1,2,3,4,5].myIndexOf(5)); //=> 4
console.log(["a", "b", "c"].myIndexOf("a")); //=> 0
console.log(["a", "b", "c"].myIndexOf("d")); //=> -1