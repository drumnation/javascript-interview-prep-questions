/* 
1. I want this code to log out "hey amy", but it logs out "hey arnold" - why?

function greet(person) {
    if (person == { name: 'amy' }) {
        return 'hey amy'
    } else {
        return 'hey arnold'
    }
}
greet({ name: 'amy' })
*/

// Corrected

function greet(person) {
    if (person.name === 'amy' ) {
        return 'hey amy'
    } else {
        return 'hey arnold'
    }
}
greet({ name: 'amy' })

/*

When comparing two types, value types are compared by value, while reference types are compared by reference. 
So when the code compares person to { name: 'amy' }, 
it compares the passed in person again the reference to the object { name: 'amy' }. 

Since the object is declared on the same line where the comparison is made, 
nothing that we pass in will ever be reference-equal to it.

Compare person.name to 'amy'. They are both strings, which will be compared by value rather than by reference.

SOURCE: https://github.com/bcherny/frontend-interview-questions/blob/master/debugging/heyAmy.md
------------------------------------------------------------------------------------------------------------------*/

/* 
2. I want this code to log out the numbers 0, 1, 2, 3 in that order, 
but it doesn’t do what I expect (this is a bug you run into once in a while, 
and some people love to ask about it in interviews).

for (var i = 0; i < 4; i++) {
    setTimeout(() => console.log(i), 0)
} 
*/

// Corrected

for (let i = 0; i < 4; i++) {
    setTimeout(() => console.log(i), 0)
}

/*

Use a block-level declaration like, const, catch, or let instead of a function-level declaration (using var). 

Var declares a single variable i that is shared by all four calls to setTimeout; 
by the time the first setTimeout is actually fired, the loop has already run four times and i equals 4.

setTimeout needs its own instance of i, 
which doesn't change between the setting the timeout and the timeout actually being fired. 

Change var to let, which is a block-level declaration.

SOURCE: https://github.com/bcherny/frontend-interview-questions/blob/master/debugging/setTimeout.md
------------------------------------------------------------------------------------

3. I want this code to log out "doggo", but it logs out undefined!

let dog = {
    name: 'doggo',
    sayName() {
        console.log(this.name)
    }
}

let sayName = dog.sayName
sayName()
*/

// Corrected

let dog = {
    name: 'doggo',
    sayName() {
        console.log(this.name)
    }
}
let sayName = dog.sayName.bind(dog)

/*

'this' inside a function is defined based on the way you call that function. 
Unless you explicitly bind this using the call, apply, or bind functions, 
'this' is generally set to the thing that's to the left of the dot when you call your function.

When the code calls sayName() there's nothing to the left of the dot, 
so 'this' is set to its default value: undefined if we're in strict mode, or the global object otherwise. 

But for this.name to be defined, this has to point to dog.

Explicitly bind dog to this using the bind function when we define sayName.

SOURCE: https://github.com/bcherny/frontend-interview-questions/blob/master/debugging/doggo.md
------------------------------------------------------------------------------------

function Dog(name) {
    this.name = name
}

Dog.bark = function() {
    console.log(this.name + ' says woof')
}
let fido = new Dog('fido')
fido.bark()

*/

// I want my dog to bark(), but instead I get an error. Why?

// Corrections

function Dog(name) {
    this.name = name
}

Dog.prototype.bark = function() {
    console.log(this.name + ' says woof')
}

let fido = new Dog('fido')
fido.bark()

/*

After creating a new Dog object, the resulting object won't inherit the bark property. 
For it to inherit bark needs to be movedto Dog's prototype

SOURCE: https://github.com/bcherny/frontend-interview-questions/blob/master/debugging/doggo.md
------------------------------------------------------------------------------------*/

// Why does this code return the results that it does?

function isBig(thing) {
    if (thing == 0 || thing == 1 || thing == 2) {
        return false
    }
    return true
}
isBig(1)    // false
isBig([2])  // false
isBig([3])  // true

/*

JavaScript tries to be helpful by converting [2] and [3] to numbers before comparing them to the numbers 0, 1, and 2
Since [2] implicitly converts to 2, isBig([2]) returns false. 
Since [3] implicitly converts to 3, isBig([3]) returns true.

SOURCE: https://github.com/bcherny/frontend-interview-questions/blob/master/debugging/isBig.md
------------------------------------------------------------------------------------*/
