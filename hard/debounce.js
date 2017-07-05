/* 

DEBOUNCE

Returns a function, that, as long as it continues to be invoked, will not be triggered. 
The function will be called after it stops being called for N milliseconds. 
If `immediate` is passed, trigger the function on the leading edge, instead of the trailing.

------------------------------------------------------------------------------------------

SOLUTION STEPS

1. 

*/

// SOLUTION

const debounce = (func, wait, immediate) => {
	let timeout
	return () => {
		let context = this, args = arguments
		clearTimeout(timeout)
		timeout = setTimeout( () => {
			timeout = null
			if (!immediate) func.apply(context, args)
		}, wait)
		if (immediate && !timeout) func.apply(context, args)
	}
}

// TESTS

let a = () => console.log('foo')
let b = debounce(a, 100)
console.log(b())
console.log(b())
console.log(b()) // only this call should invoke a()