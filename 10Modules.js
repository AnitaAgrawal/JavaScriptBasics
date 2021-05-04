// **************************************** Modules *************************************

/** What are modules
 * Import and Export keywords
 * Encapsulate code
 * Control access
 * Reference its own dependencies
 */

/** Module considerations
 * Modules are singletons
 * Properties are boud
 * Exports are static
 * One module per file
 */

// **************************************** Creating a Module *************************************
/**
 * Export keyword
 * Named Exports
 * Default Exports
 * Aggregating modules
 */

// Example code, to expose something
/*
const greetings = 'Hello '
const defaultPerson = 'Everyone!'

function sayHelloTo(personName) {
    let greetingMsg = ''
    if (personName === '') {
        greetingMsg = greetings + defaultPerson
    } else {
        greetingMsg = greetings + personName + '!'
    }
    console.log(greetingMsg)
    return greetingMsg
}
*/
// **************************************** Named Exports *************************************
// Here we have two properties greetings, and defaultPersion, and one function sayHelloTo which takes one input param
// Now to The web page which will use this file, we dont wanna expose everything this file got.
// And to restrict that we'll expose the things to which can be accessible from outside using Export keyword

// case 1: Using Export keyword in front of the element we wanna expose, like
/*
export const greetings = 'Hello '
const defaultPerson = 'Everyone!'

export function sayHelloTo(personName) {
    let greetingMsg = ''
    if (personName === '') {
        greetingMsg = greetings + defaultPerson
    } else {
        greetingMsg = greetings + personName + '!'
    }
    console.log(greetingMsg)
    return greetingMsg
}
*/
// Here we are only exporting greetings property and sayHelloTo() function.

// case 2: If we have multiple elements to expose, we can bundle them together like this

const greetings = 'Hello '
const defaultPerson = 'Everyone!'

function sayHelloTo(personName) {
    let greetingMsg = ''
    if (personName === '') {
        greetingMsg = greetings + defaultPerson
    } else {
        greetingMsg = greetings + personName + '!'
    }
    console.log(greetingMsg)
    return greetingMsg
}

export {sayHelloTo, greetings}


// Now only sayHelloTo, and greetings will be accessible to the file consuming 10Modules.js

// case 3: Where export element can be given a name using as keyword, line #96
/*
const greetings = 'Hello '
const defaultPerson = 'Everyone!'

function sayHelloTo(personName) {
    let greetingMsg = ''
    if (personName === '') {
        greetingMsg = greetings + defaultPerson
    } else {
        greetingMsg = greetings + personName + '!'
    }
    console.log(greetingMsg)
    return greetingMsg
}

export {sayHelloTo as hello, greetings}
*/
// Since we are exporting sayHelloTo as hello, the import would be hello.

// case 4: Default export
/*
const greetings = 'Hello '
const defaultPerson = 'Everyone!'

export default function sayHelloTo(personName) {
    let greetingMsg = ''
    if (personName === '') {
        greetingMsg = greetings + defaultPerson
    } else {
        greetingMsg = greetings + personName + '!'
    }
    console.log(greetingMsg)
    return greetingMsg
}
*/
// So when exporting element as default line #112, we can import by giving any name like
// import anyNameXYZ from './10Modules.js'
// We can mark export default to only one element, not to bunch of elements

// case 5: Default export as list
/*
const greetings = 'Hello '
const defaultPerson = 'Everyone!'

function sayHelloTo(personName) {
    let greetingMsg = ''
    if (personName === '') {
        greetingMsg = greetings + defaultPerson
    } else {
        greetingMsg = greetings + personName + '!'
    }
    console.log(greetingMsg)
    return greetingMsg
}

export {sayHelloTo as default, greetings}
*/

// **************************************** Importing a Module *************************************
/**
 * Import keyword
 * Allowing Modules
 * Default Imports
 * Named Imports
 */

/**
 * Setting up module
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import#browser_compatibility
 * 
 * go to index.html line #15, replace it with
 * <script src="./11Modules.js" type="module"></script>
 */

// Default import
// import ..name.. from './filename.js'