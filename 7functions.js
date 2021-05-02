// **************************************** Functions *************************************
// To execute this code, go to index.html line #15 and replace it with
// <script src="./7functions.js"></script>

// Function definition
function functionName_WithoutParamer () {
    console.log('This funcation does not take input and does not return anything')
}
// Funciton call
functionName_WithoutParamer() //This funcation does not take input and does not return anything

function functionName_WithParam(parameters) {
    console.log('this function takes parameter which can be of anytype')
    console.log('parameter value', parameters)
    console.log('parameter type', typeof parameters)
}
functionName_WithParam(8)
// [Log] this function takes parameter which can be of anytype 
// [Log] parameter value – 8 
// [Log] parameter type – "number" 

functionName_WithParam('8')
// [Log] this function takes parameter which can be of anytype 
// [Log] parameter value – "8" (script.js, line 382)
// [Log] parameter type – "string" (script.js, line 383)

function sayHello() {
    console.log('Hello')
}
functionName_WithParam(sayHello)
// [Log] this function takes parameter which can be of anytype 
// [Log] parameter value – function sayHello() { 
//     console.log('Hello')
// }
// [Log] parameter type – "function" 

function functionName_WithReturnBoolean() {
    console.log('This funcation does not take input and returns true') 
    return true
}
console.log(functionName_WithReturnBoolean())
// [Log] This funcation does not take input and returns true 
// [Log] true 

function functionName_WithReturnString() {
    console.log('This funcation does not take input and returns String') 
    return 'true'
}
console.log(functionName_WithReturnString())
// [Log] This funcation does not take input and returns String 
// [Log] "true" 


// **************************************** Functions Expressions *************************************
// storing the function in the variable, 

let sayHelloVar = function () {
    console.log('Hello')
}
// calling the function
sayHelloVar() // Hello

// **************************************** Block Scope *************************************
// A block of code created using {}, it could be a function body, if-else bode, loops body, etc.
// Global value access

let globalVar = "Hello"
if (true) {
    console.log(globalVar) // "Hello"
}

function sayhello() {
    console.log(globalVar) // "Hello"
}
sayhello()
// Global access is the highest access. So we should use it carefully. This can lead to serious bugs.

// Local access
if (true) {
    let isInsideIf = true
    console.log('isInsideIf is accessible inside of if block as it is local to this block', isInsideIf)
    // isInsideIf is accessible inside if as it is local to this block - true
}
console.log('isInsideIf is not accessible outside of if block as it is local to if block', isInsideIf)
// ReferenceError: Can't find variable: isInsideIf
// Any variable declared inside the block will not be available outside of it,and will disappear once the block is executed


// **************************************** Nested Functions *************************************

let var1 = 1
function function1() {
    let var2 = 2
    function fuction2() {
        let var3 = 3
        console.log('inside function2')
        console.log('has access to var1', var1)
        console.log('has access to var2', var2)
        console.log('has access to var3', var3)
    }
    fuction2()
    console.log('inside function1')
    console.log('has access to var1', var1)
    console.log('has access to var2', var2)
    console.log('has not access to var3', var3)
}
function1()
// [Log] inside function2 
// [Log] has access to var1 – 1 
// [Log] has access to var2 – 2 
// [Log] has access to var3 – 3 
// [Log] inside function1 
// [Log] has access to var1 – 1 
// [Log] has access to var2 – 2 
// [Error] ReferenceError: Can't find variable: var3
// 	function1 
// 	Global Code 
console.log('In global scope, outside of function1 and function2')
console.log('has access to var1', var1)
console.log('has not access to var2', var2)
console.log('has not access to var3', var3)
