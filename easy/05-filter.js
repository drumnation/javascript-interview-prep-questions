/* 

FILTER

Implement the filter function.

------------------------------------------------------------------*/

/* 

1. Add myFilter to the Array prototype
2. Pass it a callback with context
3. Iterate until this.length
4. If the call callback -> context, element, index, arr
5. If True Push the truthy value to the arr
6. Return the array with the filtered values

*/

Array.prototype.myFilter = function(callback, context) {
    let filtered = []
    for (let index = 0; index < this.length; index++) {
        if (callback.call(context, this[index]))
            filtered.push(this[index])
    }
    return filtered
}

// TESTS

console.log('([ 20, 30, 80 ]) =>', [1, 20, 30, 80, 2, 9, 3].myFilter( n => n >= 10 )); // [ 20, 30, 80 ]

/*

SOURCE: https://gist.github.com/alexhawkins/28aaf610a3e76d8b8264
-------------------------------------------------------------------*/