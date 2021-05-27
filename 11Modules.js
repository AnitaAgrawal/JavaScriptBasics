// **************************************** Consuming Modules with Import *************************************

// To execute this code, go to index.html line #15 and replace it with
// <script src="./11Modules.js" type="module"></script>

// Import module
import {sayHelloTo} from './10Modules.js'
// if we have multiple elements to import
/*
 import * as xyz from './10Modules.js'
*/
// this will import all the items which are exported by 10Modules.js into a namespace called xyz
// to access the exported items we can use . operator
// xyz.sayHelloTo(name)

// if we have muliple modules to import from single file which contains multiple exports of muliple file
/*
import file1ImportElement, file2ImportElement from 'file1.js'
*/
// or

/*
import file1ImportElement, {file2ImportElement1, file2ImportElement2} from 'file1.js'
*/

// or

/*
import file1ImportElement, * as file2 from 'file1.js'
*/

let name = 'John'

function showGreeting() {
    alert(sayHelloTo(name))
}

showGreeting()
