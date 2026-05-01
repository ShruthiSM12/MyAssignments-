// day 1
// using variable declaration using var

// string

var firstName = "shruthi"
console.log(firstName)
console.log(typeof (firstName))

// string

var companyName = "invindis"
console.log(companyName)
console.log(typeof (companyName))


// number

var mobileNumber = 578222225
console.log(mobileNumber)
console.log(typeof (mobileNumber))

// undefined

var isAutomation = undefined
console.log(isAutomation)
console.log(typeof (isAutomation))

// Boolean. 

var hasPlaywright = true
console.log(hasPlaywright)
console.log(typeof (hasPlaywright))

// null. 

var middleName = null
console.log(middleName)
console.log(typeof (middleName))

// ==================================
// day2

// Create a JavaScript function that determines if a number is positive, negative, or zero and returns a
// corresponding string indicating the type.


// ===================================

// Declare a global variable and shadow it inside a function using both `var` and `let` to see how they behave
// differently when printed.

//  var
const browserName = 'chrome'
function getBrowserName() {
    if (browserName === "chrome") {
        var browserName = 'firefox'
    }
    console.log(browserName)
}
getBrowserName()

// let

const browserName = 'chrome'
function getBrowserName() {
    if (browserName === 'chrome') {
        let browserName = 'firefox'
    }
    console.log(browserName)
}
getBrowserName()

// Write a JavaScript function named `printOddNumbers` that prints odd numbers between 1 and 25

function oddorEven() {
    for (let i = 1; i <= 25; i++) {
        if (i % 2 === 0) {
            console.log(i, "is even")
        } else {
            console.log(i, 'is odd')
        }
    }
}
oddorEven()

// Understand global scope, function scope, and block scope by using var and let inside
// conditional blocks.

const genderType = 'female'
function printGender() {
    let color = 'brown'
    if (genderType.startsWith('female')) {
        var age = 30
        let color = 'pink'
        console.log("Inside block color:", color)
    }
    console.log("Outside block age:", age);
    console.log("Outside block color:", color)
}
printGender()
console.log("Global genderType:", genderType);
