alert('Currying in JavaScript');
//Currying is a technique in functional programming where a function with multiple arguments is transformed into a sequence of functions, each taking a single argument. This allows for partial application of functions, enabling the creation of specialized functions from more general ones.
function curry(func) {
    return function curried(...args) {
        if (args.length >= func.length) {
            return func.apply(this, args);
        } else {
            return function (...args2) {
                return curried.apply(this, args.concat(args2));
            }
        }
    }
}

// Example usage:
function add(a, b, c) {
    return a + b + c;
}   
const curriedAdd = curry(add);
console.log(curriedAdd(1)(2)(3)); // Outputs: 6
console.log(curriedAdd(1, 2)(3)); // Outputs: 6
console.log(curriedAdd(1)(2, 3)); // Outputs: 6

// Another example:
function multiply(a, b, c) {
    return a * b * c;
}
const curriedMultiply = curry(multiply);
console.log(curriedMultiply(2)(3)(4)); // Outputs: 24
console.log(curriedMultiply(2, 3)(4)); // Outputs: 24
console.log(curriedMultiply(2)(3, 4)); // Outputs: 24

// Currying can be particularly useful in scenarios where functions need to be reused with some arguments fixed, enhancing code modularity and readability.


