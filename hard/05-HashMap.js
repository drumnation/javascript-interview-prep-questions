/* 

HASH MAP

Implement a HashMap class without using JavaScript’s built-in objects ({}) or  Maps. 

You are provided a hash() function that takes a string and returns a number (the numbers are mostly unique, 
but sometimes two different strings will return the same number):

------------------------------------------------------------------------------------------

SOLUTION STEPS

1. 

*/

// SOLUTION

class HashMap {
    constructor() {
        this.data = []
    }
    get(key) {
        let index = hash(key)
        let slot = this.data[index]
        if (!slot) {
            return undefined
        }
        for (let [k, v] of slot) {
            if (key === k) {
                return v
            }
        }
    }
    set(key, value) {
        let index = hash(key)
        if (!this.data[index]) { this.data[index] = [] }

        let slot = this.data[index]
        let indexInSlot = 0

        // find available index in the given slot, or overwrite the given key
        // if a value is already defined for it.
        while (slot[indexInSlot]) {
            if (slot[indexInSlot][0] === key) {
                break
            }
            indexInSlot++
        }
        slot[indexInSlot] = [key, value]
    }
}

// hash function (provided)
function hash(string) {
    return string
    .split('')
    .reduce((a, b) => ((a << 5) + a) + b.charCodeAt(0), 5381)
}

// TESTS

let map = new HashMap
console.log(map.set('abc', 123)) // undefined
console.log(map.set('foo', 'bar')) // undefined
console.log(map.set('foo', 'baz')) // undefined
console.log(map.get('abc')) // 123
console.log(map.get('foo')) // 'baz'
console.log(map.get('def')) // undefined

/*

SOURCE: https://github.com/bcherny/frontend-interview-questions/blob/master/coding-harder/HashMap.js
-------------------------------------------------------------------------------------------*/