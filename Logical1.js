/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- You can Google / use StackOverflow BUT only when you think you need something we didn't cover during lessons yet
- You can test your code in a separate file or de-commenting the single exercises in this one.
- You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.
- The solution must be available for the tutors by the end of the day (5PM CET)
*/

/* EXERCISE 1
 Enumerate and describe the main datatypes in JavaScript. Try to explain the concepts as you were speaking to a 12 years old.
*/

/* There are 4 main data types: 

    1) Strings - anything wrapped in "" or '' or ``. Usually you would expect strings to be text as oppose to numbers but regardless, if they are contained within either one of the
    aforementioned symbols they are referred to as strings. E.g: "Hello", 'Hi', `42` .

    2) Numbers - any integer or decimal number (referred to as a floats) such as: 5, 10, 3.141582 and so on.

    3) Booleans - statements/equations that evaluate to to either true or false. E.g: 5 < 6 (= True) or let Name = Alex --> Name === Bob (= False)

*/

/* EXERCISE 2
 Try to describe what a variable is, in your own words.
*/

/* Anything that has been declared in your code using syntax such as: let myLotteryNumber = 205689 or const myEyeColour = "Green" 
   These variables can then be called upon during execution in the console for instance: console.log("value of myLotteryNumber:", myLotteryNumber)
   Their input data type can also be changed after declaration, however this is best avoided as javascript is loose but this makes workspace more bug-prone and confusing. 
*/

/* EXERCISE 3
 Write the code to execute an addition (a sum) of the numbers 12 and 20.
*/

let number = 12
console.log(number + 20)

/* EXERCISE 4
 Create a variable named x and assign to it the number 12.
*/

let x = 12

/* EXERCISE 5
 Create a variable called name and assign to it the string "John Doe".
*/

let name = "John Doe"

/* EXERCISE 6
 Execute a subtraction between the number 12 and the variable x you declared before (which is storing the value 12).
*/

console.log(x - 12)

/* EXERCISE 7
 Create two variables: name1 and name2. Assign to name1 the string "john", and to name2 the string "John" (this one has a capital J!)
 Verify that name1 is different from name2 (HINT: check their equality to be false).
 Finally, verify that the equality between name1 and name2 becomes true if both are lowercase (without changing the value of name2).
*/

let name1 = "john"
let name2 = "John"
console.log(name1 === name2)
let lowerCaseFirst = name2.charAt(0).toLowerCase() + name2.slice(1)
console.log(lowerCaseFirst === name1)

/* EXERCISE 8
 Create a variable named x, and assign to it a numeric value less than 10.
 Write the code to print the literal value of x (ex.: if x is 1, it should print "one", if x is 5 it should print "five" etc.).
*/

let y = 3
let chr = String.fromCharCode(97 + y)

/* EXERCISE 9
 [Extra] Assign a value to a variable using a ternary operator (this topic has not been covered during lesson yet,
 try to search it by yourself, tomorrow morning we'll discuss it together!)
*/

let age = 26
let beverage = age >= 21 ? "Beer" : "Juice"
console.log(beverage)
