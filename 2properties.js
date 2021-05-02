// **************************************** Variables and Constants *************************************
// To execute this code, go to index.html line #15 and replace it with
// <script src="./2properties.js"></script>

let helloWorldLet = "Hello World";
const helloWorldConst = "Hello World";
var helloWorldVar = "Hello World";
// 
// 1. Properties declared with const can not be modified later, 
// 2. where as let and var allows to modify the property.
// 3. Var allows hoisting, where as let doesn't.

// console.log(msg);
let msg = "Hello World";
// ReferenceError: Cannot access uninitialized variable.

// comment line #13
console.log(msg2); //undefined
var msg2 = "Hello World";
 // This code will print undefined in the console, as var keyword declaration hoists the property at the top.

// JS type infers when a value assigned to it.
let total = 149.99; // Number
let stringDoubleQuotes = "Hello World"; // String using double quotes
let stringSingleQuote = 'Hello World'; // String using single quotes
let stringBackTick = `Hello World`; // String using back tick
let isFreeTrue = true; // boolean
let isFreeFalse = false; // boolean 

// while declaring multiple properties together, we can leave out the semicolons and let like this

 let personName = "John Wick",
     age = 43,
     isActor = true;
  console.log("name: , age: , isActor: ", personName, age, isActor); // name: , age: , isActor:  – "John Wick" – 43 – true
  console.log(typeof personName); //string
  console.log(typeof age); //number
  console.log(typeof isActor); //boolean
 

// **************************************** Boolean Variables *************************************
let isRed = false
let isGreen = true
let isBlue = !isGreen


// **************************************** Null and Undefined *************************************
// when we declare a property but haven't defined/initialized
let isPurple
console.log(isPurple) // undefined

// when we wanna wipe out an object or property we assing it a null.
let score = 10
score = null
console.log(score) // null


// **************************************** Converting Strings and Numbers *************************************

let amount = 123
console.log(typeof amount) // number
amount = amount.toString()
console.log(typeof amount) // string

let amountNum = Number.parseFloat(amount)
console.log(typeof amountNum) // number 

amountNum = Number.parseFloat('A123')
console.log(amountNum) // NaN

amountNum = Number.parseFloat('123Q')
console.log(amountNum) // 123
