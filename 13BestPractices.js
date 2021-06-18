// **************************************** Best Practices *************************************

// To execute this code, go to index.html line #15 and replace it with
// <script src="./13BestPractices.js"></script>

// Overview:
// 1. Syntax best practices
// 2. Behavioral
// 3. Structural components
// 4. Server-side

// **************************************** Syntax best practices *************************************
// Semi colon: semicolons are optional in JavaScript
// Automatically semicolon insertion: 
// Restricted Production: continue, break, return, and throw

function returnObject() 
{
    if (true) 
    {
        return 
        {
            hi: 'hello'
        }
    }
}

// due to Automatically semicolon insertion rule, it would insert a semicolon at the end of the return statement
// so the { hi: 'hello'} wont be returned
// Use of semicolon in conjuction with JSLint

// Linting: A linter scans your code to detect potential problems and errors.
// JSLint, JSHint, ESLint

// JSHint to get started
// Using browser: https://jshint.com, paste your code there, and it will detect the errors in your code.
// Using plugin: Go to extension tab, search for jshint, install it, 
// This will allow the editor to use jshint to scan through the code and detect errors
// Using command line: run these command in your terminal when inside your current working directory
// sudo npm install -g jshint
// this will install jshint command, jshint 13BestPractices.js
// this will list out all the error present in the 13BestPractices.js file.

// Eqality
// == or ===
// != or !==

let x = 1
let y = true
if (x == y) {
    console.log('x and y are equal')
} else {
    console.log('x and y are not equal')
}
// x and y are equal

x = 1
y = '1'
if (x == y) {
    console.log('x and y are equal')
} else {
    console.log('x and y are not equal')
}
// x and y are equal

// Configuring rules for jshint
// https://jshint.com/docs/options/
// create a new file with .jshintrc name
// it's a json object, 
/*
{
    "eqeqeq": true
}
*/
// this will enable code to use === over ==

// Hoisting: is JS default behavior of moving all the declarations to the top of the current scope.
// A var statement declares variables that are scoped to the running execution context's VariableEnvironment.
// Var variables are created when their containing Lexical Environment is *instantiated and are initialized to undefinde when created*
// use let over var

// when writing code, 
// Declare all the variables at the top
// Then all the functions declarations
// then the run code
// Consistency is the KEY

// Global Variables

let toPrint = 'Print me'
function print(out) {
    stringToPrint = out
    console.log(stringToPrint)
}
print('Hello')
console.log(stringToPrint)
// [Log] Hello (13BestPractices.js, line 94)
// [Log] Hello (13BestPractices.js, line 97)

// here JS when executes stringToPrint = out (line 93) finds that stringToPrint is neither defined in the local scope of print func
// nor in the global scope of this file, then it sees stringToPrint has to store some value, 
// so it decides to create one global variable stringToPrint for you, and that's how line 97 does not complain about stringToPrint about undefined
// This might be useful in some cases, but it can lead to global scope leaks.

// Strict Mode
// 'use strict' at the top of the file
// This will not allow JS to help you. so using strict mode, the line 97 will print undefined. 
// 'use strict' is also works in scope, if placed inside a function, then it will be scoped to that function block not the whole file.


// Read Only Properties
var obj = {}
Object.defineProperty(obj, 'readOnly', {
    enumerable: false,
    configurable: false,
    writable: false,
    value: 'This var is read only'
})
console.log(obj)
obj.readOnly = 'I am trying to change this'
console.log(obj)
// [Log] {readOnly: "This var is read only"} (13BestPractices.js, line 120)
// [Log] {readOnly: "This var is read only"} (13BestPractices.js, line 122)
// using strict mode can prevent this to happen, so when we try to re-assign a value to a readonly property, 
// it would throw an error


// on the top of the file, all the declaration goes, and below it rest of the code
// Start of the file
// Variables first
let a = 20
let b = 10

//functions next
function sumOfAAndB() {
    // Variables first
    let x = 10

    // rest of the code
    return (a + b) * x
}
let sumResult = sumOfAAndB()
console.log(sumResult);


// Deleting stuff
var someObj = {a: 10, b: 30}
console.log(someObj)
// {a: 10, b: 30}

delete someObj.a
console.log(someObj);
// {b: 30}

delete someObj
console.log(someObj)
// {b: 30}

// Delete is good to remove something from an object, but it doesnot delete the object or variable
// With strict mode on, this will throw error.


// Dupes: 
function dupes(a,b,a) {
    console.log(a)
}

dupes(1,2,3)
// 3
// This duplicate parameter issue can be solved using stict mode, 
// Strict mode functions may not have duplicate parameter names


//Number Types

let number = 100
let octNumber = 012
console.log(number + octNumber)
// 110

// in JS when a number starts with 0, JS treats it as Octal number, 
// and 012 in octal is 10. 
// When summing 100 with 012, 012 get converted in decimal and becomes 10
// To prevent this, can use strict mode
// in Strict mode, the octal number can be used as
let strictModeOctalNumber = parseInt(12, 8)
console.log(number + strictModeOctalNumber)
// 110
// This will eliminate the shortcut of prefix 0 for octal, 
// and parseInt() will make clear intension of using octal number


// The 'with' statement
let nestedObj = {
    a: {
        b: {
            c: "Hello"
        }
    }
}
console.log(nestedObj.a.b.c);
//Hello

with(nestedObj.a.b) {
    console.log(c);
}
//Hello

let c = "it's dup"
with(nestedObj.a.b) {
    console.log(c);
}
//Hello
// here it creates confusion about c var.

// to fix this, ifi can be used
(function(newVar){
    console.log(newVar)
}(nestedObj.a.b.c))
//Hello