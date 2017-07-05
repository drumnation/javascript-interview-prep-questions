
/// solution

/**[
    * LinkedList has 2 members, head and tail:
    * - head is a value
    * - tail is either another LinkedList, or null
*/

class LinkedList {
    constructor(head, ...tail) {
        this.head = head
        this.tail = tail.length
            ? new LinkedList(...tail)
            : null
    }
    add(item) {
        if (this.tail) {
            this.tail.add(item)
        } else {
            this.tail = new LinkedList(item)
        }
    }
    has(item) {
        if (this.head === item) {
            return true
        }
        if (this.tail === null) {
            return false
        }
        return this.tail.has(item)
    }
}

// TESTS

let list = new LinkedList(1, 2, 3)
console.log(list.add(4)) // undefined
console.log(list.add(5)) // undefined
console.log(list.has(1)) // true
console.log(list.has(4)) // true
console.log(list.has(6)) // false

/*

SOURCE: https://github.com/bcherny/frontend-interview-questions/blob/master/coding-harder/LinkedList.js
--------------------------------------------------------------------------------------------------------*/