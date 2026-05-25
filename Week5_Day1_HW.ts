// Assignment Details:
// Create a TypeScript program that defines a function to compute the factorial of a given non
// negative integer using a loop (iterative approach).


function factorial(n: number): number {
    if (n < 0) {
        console.log('it is a negative value')
    }
    let result = 1
    for (let i = 2; i <= n; i++) {
        result = result * i
    }
    return result
}
console.log(factorial(7))
console.log(factorial(2))
console.log(factorial(9))
console.log(factorial(1))
console.log(factorial(-4))

// ==================================================


// Assignment Details:
// Create a TypeScript program that defines a function to compute the nth Fibonacci number using a
// loop (iterative approach).

function fibonacci(n: number): number {
    if (n < 0) {
        console.log('it is a negative value')
        return -1
    }
    let numb1 = 0
    let numb2 = 1
    if (n === 0) {
        return numb1
    }
    if (n === 1) {
        return numb2
    }
    let result = 0
    for (let i = 2; i <= n; i++) {
        result = numb1 + numb2
        numb1 = numb2
        numb2 = result
    }
    console.log(`yes ${result} is a fibonacci numb`)
    return result
}
fibonacci(5)