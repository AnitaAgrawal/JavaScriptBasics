// **************************************** Loops *************************************
// To execute this code, go to index.html line #15 and replace it with
// <script src="./6loops.js"></script>


// 1. For loop
for(let i = 0; i < 10; i++) {
    console.log(i) // 0 1 2 3 4 5 6 7 8 9
}

// 2. while loop
let i = 0
while(i < 10){
    console.log(i) // 0 1 2 3 4 5 6 7 8 9
    i++
}

// 3. do-while
let isFalse = false
do {
    console.log('At least once it will be executed no matter what') //At least once it will be executed no matter what
} while (isFalse)
