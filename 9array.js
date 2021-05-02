// **************************************** Array *************************************
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

// To execute this code, go to index.html line #15 and replace it with
// <script src="./9array.js"></script>

// 1. Create and initialize an array
let countries = ['India', 'Nepal', 'Bhutan', 'Bangladesh', 'Sri Lanka']
console.log(countries) //["India", "Nepal", "Bhutan", "Bangladesh", "Sri Lanka"] (5)

let cities = Array.of('Hyd', 'Blr', 'Bom', 'Rpr')
console.log(cities) //["Hyd", "Blr", "Bom", "Rpr"] (4)
// 4 in paranthesis means number of elements in the array

// to make sure if a property is an array
console.log(Array.isArray(cities)) // true

// 2. Accessing Array Items, by subscript operator
console.log(`first element: ${cities[0]}`) //first element: Hyd
console.log(`second element: ${cities[1]}`) //second element: Blr
console.log(`third element: ${cities[2]}`) //third element: Bom

// Iterating through the array
cities.forEach(element => {
    console.log(element)
});
// [Log] Hyd 
// [Log] Blr 
// [Log] Bom 
// [Log] Rpr 

// 3. Manipulating array, adding elements 
// push() will add elements in the end of the array
countries.push('Myanmar')
console.log(countries) //["India", "Nepal", "Bhutan", "Bangladesh", "Sri Lanka", "Myanmar"] (6)

// pop() will remove an element from the end of the array
let lastElement = countries.pop()
console.log(countries); // ["India", "Nepal", "Bhutan", "Bangladesh", "Sri Lanka"] (5)
console.log(lastElement) //Myanmar

// shift() will move entire array to the left by one, and takes the first element off the array
let firstElement = countries.shift()
console.log(firstElement) //India
console.log(countries) //["Nepal", "Bhutan", "Bangladesh", "Sri Lanka"] (4)

// unshift() will add element/s at the begining of the array
countries.unshift('India', 'Myanmar')
console.log(countries); // ["India", "Myanmar", "Nepal", "Bhutan", "Bangladesh", "Sri Lanka"] (6)

// slice() creates a new array based on original array
// slice(start?: number, end?: number): string[]
let newSliceArray = cities.slice(0, 2)
console.log(cities) //["Hyd", "Blr", "Bom", "Rpr"] (4)
console.log(newSliceArray); //["Hyd", "Blr"] (2)

// splice() used to insert or delete element somewhere in the middle/between the elements of the array
// splice() used to delete the element
// splice(start: number, deleteCount?: number): string[]
let deletedElements = cities.splice(3, 1)
console.log(cities) //["Hyd", "Blr", "Bom"] (3)

// splice() used as inserting element
// splice(start: number, deleteCount: number, ...items: string[]): string[]
cities.splice(2, 0, deletedElements)
console.log(cities) //["Hyd", "Blr", ["Rpr"], "Bom"] (4)

// for more details on Arrays, please visit
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
