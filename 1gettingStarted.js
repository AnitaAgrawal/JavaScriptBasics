// **************************************** Adding JavaScript code to a web page *************************************
// To execute this code, go to index.html line #15 and replace it with
// <script src="./1gettingStarted.js"></script>

// Adding JavaScript code to a web page

// you can put your JS code between script tag <script>...</script>
// Way 1, when there is only few lines to be written
/*
JavaScript in indext.html

<script>

    // Java script code here
alert('Hello world!');
</script>

*/

// Way 2, when large code has to be placed. 
// Working with JavaScript file, This keeps the html file clean, and also improves reusabiliy.
/*
    Open your index.html and go to line #15
    <script src="./JSFileName.js"></script>
*/

// Uncomment below and save, then you'll see web page is loaded with an alert "Hello World!".
// alert("Hello World!"); // alerts in web page

// **************************************** Detecting and Fixing Errors *************************************
// 1. Add Console.log(); statement to print any intermediate values of a property
// 2. Open the browser, right click --> Inspect.
// 3. It pulls up developer tool, and there is Console tab which will detect errors as well as any logs you wanna print
// 4. For Safari users, If you Inspect element is not showing in right click, plz open Safari preferences(command ,) -> 
// Advanced tab, click Show Develop menu in menu bar. 

// **************************************** Case sensitivity *************************************
// JS is case sensitive.

let helloWorld = "Hello World";
console.log(helloWorld); // Hello World
console.log(HelloWorld); // will give error, HelloWorld is not defined
//ReferenceError: Can't find variable: HelloWorld
