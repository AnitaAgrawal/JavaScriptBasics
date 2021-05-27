// **************************************** Conditionals using If..else *************************************

// To execute this code, go to index.html line #15 and replace it with
// <script src="./5conditionalsAndOperators.js"></script>

// For more details plz visit
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling

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


if (0) {
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


// **************************************** Switch Statement *************************************

function getRandomNumber() {
    const randomInt = Date.now();
    const value = randomInt % 10
    return value
}
switch (getRandomNumber()) {
    case 0:
        console.log('Apple: 🍎🍏')
        break;
    case 1:
        console.log('Pear: 🍐')
        break;
    case 2:
        console.log('Grapes: 🍇')
        break;
    case 3:
        console.log('Banana: 🍌')
        break;
    case 4:
        console.log('Mango: 🥭')
        break;
    case 5:
        console.log('Watermelon: 🍉')
        break;
    case 6:
        console.log('Strawberry: 🍓')
        break;
    case 7:
        console.log('Pine Apple: 🍍')
        break;
    case 8:
        console.log('Kiwi: 🥝')
        break;
    case 9:
        console.log('Blueberry: 🫐')
        break;

    default:
        console.log('No fruit available')
        break;
}

// **************************************** Error Handling *************************************
// try, catch, throw 

// The throw statements can be handled using try...catch block

function PasswordValidationError(message = "") {
    this.message = message;
}
PasswordValidationError.prototype = new Error();

let PasswordValidationErrorMessage = {
    characterLength: 'Password must be between 6 to 20 characters and must not contain other than alphnumeric characters',
    missingNumber: 'Password must contain at least one number(0-9) character',
    missingUpperCase: 'Password must contain at least one UpperCase character',
    missingLowerCase: 'Password must contain at least one LowerCase character',
};

class PasswordValidationErrorClass {
    static length = new PasswordValidationError(PasswordValidationErrorMessage.characterLength)
    static missingNumber = new PasswordValidationError(PasswordValidationErrorMessage.missingNumber)
    static missingUpperCase = new PasswordValidationError(PasswordValidationErrorMessage.missingUpperCase)
    static missingLowerCase = new PasswordValidationError(PasswordValidationErrorMessage.missingLowerCase)
}

export function validatePassword(inputText) {
    let passwordRegXLength = /^[A-Za-z0-9]\w{6,20}$/
    let passwordRegXMissingNumber = /^(?=.*\d).{6,20}$/
    let passwordRegXMissingUpperCase = /[A-Z]/
    let passwordRegXMissingLowerCase = /[a-z]/

    if (!(inputText.match(passwordRegXLength))) {
        throw PasswordValidationErrorClass.length
    } else if (!(inputText.match(passwordRegXMissingNumber))) {
        throw PasswordValidationErrorClass.missingNumber
    } else if (!(inputText.match(passwordRegXMissingUpperCase))) {
        throw PasswordValidationErrorClass.missingUpperCase
    } else if (!(inputText.match(passwordRegXMissingLowerCase))) {
        throw PasswordValidationErrorClass.missingLowerCase
    } else {
        return 'Valid password'
    }
}

function handlePasswordValidation(password) {
    try {
        let result = validatePassword(password)
        console.log(result)
    } catch (error) {
        switch (error.message) {
            case PasswordValidationErrorMessage.characterLength:
                console.log('PasswordValidationErrorMessage.characterLength')
                console.log(error.message)
                break;
            case PasswordValidationErrorMessage.missingNumber:
                console.log('PasswordValidationErrorMessage.missingNumber')
                console.log(error.message)
                break;
            case PasswordValidationErrorMessage.missingUpperCase:
                console.log('PasswordValidationErrorMessage.missingUpperCase')
                console.log(error.message)
                break;
            case PasswordValidationErrorMessage.missingLowerCase:
                console.log('PasswordValidationErrorMessage.missingLowerCase')
                console.log(error.message)
                break;
            case PasswordValidationErrorMessage.invalid:
                console.log('PasswordValidationErrorMessage.invalid')
                console.log(error.message)
                break;
            default:
                console.log('Default case')
                console.log(error.message)
                break;
        }
    }
}

handlePasswordValidation('hello') // Password must be between 6 to 20 characters and must not contain other than alphnumeric characters

handlePasswordValidation('helloworld') // Password must contain at least one number(0-9) character

handlePasswordValidation('helloworld1') //Password must contain at least one UpperCase character

handlePasswordValidation('HELLOWORLD1') // Password must contain at least one LowerCase character

handlePasswordValidation('helloWorld1@@@') // Password must be between 6 to 20 characters and must not contain other than alphnumeric characters
 
handlePasswordValidation('helloWorld1') // Valid password
