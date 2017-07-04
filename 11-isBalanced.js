/* 

IS BALANCED

Takes a string and returns true or false indicating whether its curly braces are balanced.

------------------------------------------------------------------
CLARIFYING THE PROMPT

what is the definition of balanced parentheses?

    open parentheses must be closed by the same type of parentheses
    open parentheses must be closed in the correct order
        i.e., never close an open pair before its inner pair is closed (if it has an inner pair). 

what should be the return value if the input string is empty?
what should be the return value if input isn’t a string?
what constitutes the extension of parentheses?
------------------------------------------------------------------

SOLUTION STEPS

1. Create stack array and store in a variable
2. Create 2 object maps
    a. one for all open paren characters
        1. set open keys to open paren
        2. set open values to matching closed paren symbol
        3. set closed keys to closed paren symbols
        4. set closed values to true  
    b. one for all closed paren characters
3. Iterate through the string's characters
    a. if character is open paren push into stack
    b. else if character is closed pop off last open from stack
        1. compare closing pair to current character
            a. if character not equal to closed then string is unbalanced
                1. return false
4. Return an equality between stack length and 0
    a. if stack empty, looping through whole input string has finished
    b. can assume string is balanced

*/

const isBalanced = (parentheses) => {
    let stack = []
    const open = { '{': '}', '[': ']', '(': ')' }
    const closed = { '}': true, ']': true, ')': true }

    for (let i = 0; i < parentheses.length; i++) {
        let paren = parentheses[i]
        if (open[paren]) {
            stack.push(paren)
        } else if (closed[paren]) {
            if (open[stack.pop()] !== paren) return false
        }
    }
    return stack.length === 0
}

// TESTS

console.log('EXPECTED', 'RETURN') // true
console.log(true, isBalanced('foo { bar { baz } boo }')) // true
console.log(false, isBalanced('foo { bar { baz }')) // false
console.log(false, isBalanced('foo { bar } }')) // false
console.log(false, isBalanced('('))  // false
console.log(true, isBalanced('()')) // true
console.log(false, isBalanced(')('))  // false
console.log(true, isBalanced('(())'))  // true
console.log(true, isBalanced('[](){}')) // true
console.log(true, isBalanced('[({})]'))   // true
console.log(false, isBalanced('[(]{)}')) // false
console.log(true, isBalanced('let supYo  = { hey: dog() }')) // true
console.log(false, isBalanced('let fiddle = function() { doggy.eat()')) // false


/*

CONSOLE OUTPUT
(Log of stack after pushing on line 35) 

EXPECTED RETURN
[ '{' ]
[ '{', '{' ]
true true
[ '{' ]
[ '{', '{' ]
false false
[ '{' ]
false false
[ '(' ]
false false
[ '(' ]
true true
false false
[ '(' ]
[ '(', '(' ]
true true
[ '[' ]
[ '(' ]
[ '{' ]
true true
[ '[' ]
[ '[', '(' ]
[ '[', '(', '{' ]
true true
[ '[' ]
[ '[', '(' ]
false false
[ '{' ]
[ '{', '(' ]
true true
[ '(' ]
[ '{' ]
[ '{', '(' ]
false false

SOURCE: http://clarkfeusier.com/2015/01/16/interview-question-balanced-parentheses-stack.html
------------------------------------------------------------------*/