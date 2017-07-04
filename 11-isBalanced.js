/* 

IS BALANCED

Takes a string and returns true or false indicating whether its curly braces are balanced.

------------------------------------------------------------------

SOLUTION STEPS

1.

*/

const isBalanced = (parenthesis) => {
    let stack = []
    const open = { '{': '}', '[': ']', '(': ')' }
    const closed = { '}': true, ']': true, ')': true }

    for (let i = 0; i < parenthesis.length; i++) {
        let paren = parenthesis[i]
        if (open[paren]) {
            stack.push(paren)
            console.log(stack)
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

SOURCE: http://clarkfeusier.com/2015/01/16/interview-question-balanced-parentheses-stack.html
------------------------------------------------------------------*/