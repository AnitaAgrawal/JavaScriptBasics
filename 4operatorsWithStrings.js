// **************************************** Operators with Strings *************************************
// To execute this code, go to index.html line #15 and replace it with
// <script src="./4operatorsWithStrings.js"></script>


// Need to use escaping character \ to print \ or " ect.
let msg = "Hello \"World\""
console.log(msg) // Hello "World"

// There are a lot of characters which we can escape using back slash: \n, \t, \r ect
// Visit https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String#escape_notation for more details

// String can be created using back tick (` ) this helps in string polation, 
let personName = 'John'
let greeting = `Hello ${personName}`
console.log(greeting) // Hello John
// With back tick, you can enter new lines with the string which can be useful in some cases
greeting = `Hello 



${personName}`
showMessage(greeting) // Hello John
// In web page, it removes white spaces such as new lines, tabs, extra spaces.
console.log(greeting) // this prints Hello ... new lines ... John

// + opertor on string concatenates two strings
msg = 'Hello' + ' ' + 'World'
console.log(msg) // Hello World

// there are many build in functions can be called 
msg = 'hello'.toUpperCase()
console.log(msg) // HELLO

msg = 'HELLO'.toLowerCase()
console.log(msg) // hello

msg = msg.substring(2, 4) // start index, end index
console.log(msg) // ll
console.log(msg.length) // 2, 

let numberString = '123'
console.log(numberString + 2) // 1232

// For more details please visit 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
