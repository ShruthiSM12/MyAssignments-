// Week 2 Day 1 home assignment.

// Strings 

// Example 1:
const s = "Hello World"
console.log(s.trim().split(' ').pop().length)

// Example 2:
const d = "   fly me   to   the moon  "
console.log(d.trim().split(' ').pop().length)

// Example 3:
// Write a function to check if two strings are anagrams.

function anagramsTest(a, b) {

    let tr = a.trim().toLowerCase().split('').sort().join('')
    let tqr = b.trim().toLowerCase().split('').sort().join('')
    if (tr === tqr) {
        return true
    } else {
        return false
    }

}
console.log(anagramsTest('listen', 'silent'))
console.log(anagramsTest('hello', 'world'))

// Array

const nums = [2, 4, 5, 2, 1, 2];
const k = 2

let count = 0

for (let i = 0; i <= nums.length; i++) {
    if (nums[i] === k) {
        count++
    }
}
console.log(count)


// Create a JavaScript program that defines a function to compute the intersection of two arrays. The 
// intersection should include elements that appear in both arrays without any duplicates.

function intersection(arr1, arr2) {
    let result = []
    for (let i = 0; i < arr1.length; i++) {
        if (arr2.includes(arr1[i]) && !result.includes(arr1[i])) {
            result.push(arr1[i])
        }
    }
    return result
}

console.log(intersection([1, 2, 3, 4, 5], [4, 5, 6, 7, 8, 9, 10]))

// Complete the following tasks to practice function declarations, arrow functions, anonymous
// functions, and callback functions in JavaScript.

// Task 1: Function Declaration
// Create a function named `userProfile` that takes a `name` as a parameter and logs “Hello,
// <name>!" to the console.

function userProfile(name) {
    console.log('Hello ' + name)
}

userProfile('Shruthi')

// Task 2: Arrow Function
// Create an arrow function named `double` that takes a number as a parameter and returns
// double its value.  

const double = (numb) => {
    console.log(numb * 2)
}

double(5)

// Task 3: Anonymous Function  
// Use an anonymous function with `setTimeout` to log `"This message is delayed by 2 seconds"` 
// after 2 seconds.  

setTimeout(() => { console.log('This message is delayed by 2 second') }, 2000)

// Task 4: Callback Function
// Create a function named `getUserData` that takes a callback function as a parameter. Inside
// `getUserData`, simulate fetching data with `setTimeout` and then call the callback function with
// that should print “Call Back Function” after 3 seconds.
// Call the `getUserData` function and log message using the callback function. 


function getUserData(callback) {

    setTimeout(() => {

        callback("Call Back Function");

    }, 3000);
}

getUserData(function (message) {
    console.log(message);
});

