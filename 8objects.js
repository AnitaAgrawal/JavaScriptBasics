// **************************************** Objects *************************************

// To execute this code, go to index.html line #15 and replace it with
// <script src="./8objects.js"></script>

// 1. Object properties
let person = {
    firstName: 'John',
    age: 42,
    occupation: 'Actor'
};
console.log('Person name', person.firstName) //Person name – "John"
console.log('Person age', person.age) // Person age – 42

// accessing a property which doesnot exist inside the object, it wont throw error. 
// So be careful while accessing a property that doesn't exist.
console.log(person.country) // undefined

// Changing a property value of an object using . operator
person.age = 43
console.log('Person age', person.age) //Person age – 43

// Changing a property value of an object using subscript, property name should be string
person['age'] = 44
console.log('Person age', person.age) //Person age – 44


// 2. Object function/methods, this uses function expression syntax

let anotherPerson = {
    firstName: 'John',
    age: 42,
    occupation: 'Actor',

    greetings: function () {
        console.log(`Hello ${this.firstName}`) 
        // 'this' is used to point to current object property
    }
};
anotherPerson.greetings() //Hello John


// 3. Passing an object to a function, pass by reference
// Pass by value
// The build in types such as string, number, boolean are passed by value
// which means only the copy of the property is being passed. 
// The original property wont be affected if the parameter gets changed
// Look at the example
let score = 100
function changeScore(score) {
    console.log(`inside changeScore, and score here is: ${score}`)
    score = 120
    console.log(`inside changeScore, score changed to: ${score}`)
}
console.log(`outside changeScore which is not yet called, score is: ${score}`)
changeScore(score)
console.log(`outside changeScore which is called, score is: ${score}`)
// [Log] outside changeScore which is not yet called, score is: 100
// [Log] inside changeScore, and score here is: 100 
// [Log] inside changeScore, score changed to: 120
// [Log] outside changeScore which is called, score is: 100

// Pass by referece
// When we pass an object to a function, the address/reference of the object is being passed
// any changes done on that object's property inside the function will affect the original object
// look at the example

function changeObject(param) {
    console.log(`inside changeObject, and age here is: ${param.age}`)
    param.age = 43
    console.log(`inside changeObject, age changed to: ${param.age}`)
}
console.log(`outside changeObject which is not yet called, age is: ${person.age}`)
changeObject(person)
console.log(`outside changeObject which is called, age is: ${person.age}`)
// [Log] outside changeObject which is not yet called, age is: 42 
// [Log] inside changeObject, and age here is: 42 
// [Log] inside changeObject, age changed to: 43 
// [Log] outside changeObject which is called, age is: 43 

// For more details please visit 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects
// left side, build in objects -> Array, Sting, Date, Math etc.

let currentDate = new Date()
console.log(currentDate)
