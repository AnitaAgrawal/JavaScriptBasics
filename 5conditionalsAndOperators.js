// **************************************** Conditionals using If..else *************************************

// To execute this code, go to index.html line #15 and replace it with
// <script src="./5conditionalsAndOperators.js"></script>

/**
 * if (condtion) {
    // conditon is true
    // your code goes here
}

if (condition) {
// code for true condition
} else {
// code for else condtion
}

if (condition1) {
    // condtion1 is true
} else if (condition2) {
    // condition2 is true
} else {
    // default
}
 */

// **************************************** Conditionals operators *************************************
// Condtion should be or results in true or false
// operators such as == , === , != , > , >= , < , <= returns boolean result
// leftSide == rightSide , returns true if leftSide is equal to rightSide
// leftSide === rightSide , returns true if leftSide is equal to rightSide
// leftSide != rightSide , returns true if leftSide is not equal to rightSide
// leftSide !== rightSide , returns true if leftSide is not equal to rightSide
// leftSide > rightSide , returns true if leftSide is greater than rightSide
// leftSide >= rightSide , returns true if leftSide is greater than and equal to rightSide
// leftSide < rightSide , returns true if leftSide is less than rightSide
// leftSide <= rightSide , returns true if leftSide is less than and equal to rightSide


let targetScore = 178
let score = 178
if (score > targetScore) {
    console.log('We won!')
} else if (score == targetScore) {
    console.log('It\'s tie') // It's tie
} else {
    console.log('We lost')
}


// **************************************** Truthy and Falsy *************************************
// Anything which is not falsy becomes truthy
/**
 *          falsy   |       truthy
 *          false   |       true
 *          0       |       0.5 or any number
 *     emptyString  |       "0"
 *          NaN
 *          null
 *       undefined
 * 
 */


if(0) {
    // this code will never execute as 0 is falsy
}

if ('0') {
    console.log('String 0 is not falsy') //String 0 is not falsy
}

if (1.1 + 1.3 !== 2.4) {
    console.log('It is because of precision', 1.1 + 1.3) // It is because of precision – 2.4000000000000004
}
// To fix this we can round off to two decimal places and compare
if (+(1.1 + 1.3).toFixed(2) !== 2.4) {
    // toFixed returns String, the + sign makes the result back to number
    // It wont come inside this time 
}

// Difference between == and === is, == type casts one of it's side to be same type as the other side which can lead to error
if (1 === '1') {
    console.log('number 1 is equal to string 1')
} else {
    console.log('number 1 is not equal to string 1') //number 1 is not equal to string 1
}

if (1 == '1') {
    console.log('number 1 is equal to string 1') //number 1 is equal to string 1
} else {
    console.log('number 1 is not equal to string 1')
}

// **************************************** Ternary Operator *************************************
// conditon ? true-Statement : false-Statement

let personName = 'John'
let isJohn = personName === 'John' ? true : false
console.log(isJohn) // true
