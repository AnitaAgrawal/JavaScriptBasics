// **************************************** Operators with Numbers *************************************
// To execute this code, go to index.html line #15 and replace it with
// <script src="./3operatorsWithNumbers.js"></script>


let score = 0
console.log(score)
// + operator adds two numbers same as mathematics
score = score + 7
console.log(score) // 7

// - operator substracts
score = score - 2
console.log(score) // 7-2 = 5

// * mulitplies
score = score * 2
console.log(score) // 5 * 2 = 10

// / divides
score = score / 2
console.log(score) // 10 / 2 = 5

// % reminder
score = score % 2
console.log(score) // 5 % 2 = 1

// += operator works same as +
score += 6
console.log(score) // 1 + 6 = 7

// -= operator works same as -
// *= operator works same as *
// /= as /
// %= as %

// post ++ operator increments one, but after the statement gets executed, obeserve below statements
score++
console.log(score) // 8
console.log(score++) // 8
console.log(score) // 9

// Pre ++ operator increments one, but before the statement gets executed, obeserve below statements
++score
console.log(score) // 10
console.log(++score) // 11
console.log(score) // 11

// post -- operator decrements one, but after the statement gets executed, obeserve below statements
score--
console.log(score) // 10
console.log(score--) // 10
console.log(score) // 9

// Pre -- operator increments one, but before the statement gets executed, obeserve below statements
--score
console.log(score) // 8
console.log(--score) // 7
console.log(score) // 7

// Operator precedence
score = 3 + 2 * 2
console.log(score) // * takes precedence and executes first, 2 * 2 = 4, 3 + 4 = 7

score = (3 + 2) * 2
console.log(score) // 10, as paranthesis takes the precedence here

// Number precision
// JS works with decimal numbers
let price = 1.1 + 1.3
console.log(price) // 2.4000000000000004 it has added 4 at the end

// For more details please visit,
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence
