// console.log("My script is running...")

// // Declare a varibale, and store inside it a string

// //Old regular Declaration
// var myString = "Intro to JavaScript";

// //Regular Declaration
// let myString = "Let: Intro to Javascript"

// //With const, you cannot chnage the initial value of the variable
// // const myString3 = "Const: Intro to JavaScript";


// // myString3 = "Something else";
// // myString4 = ":Intro to JavaScript";
// //  console.log(myString.toUpperCase());
// //  console.log(myString.toLowerCase());
// //  console.log(myString.length);
// //  console.log(myString(0))//will return the first letter of the string
// //  console.log(myString.replace)

// let a = 5
// let b = 10\

// console.log(a + b)
// console.log(a - b)
// console.log(a / b)
// console.log(a * b)
// console.log(a % b)

// let c = 5
// let d = "5"
// //Relational Operators
// console.log(c==d); // returns true
// console.log(c===d); // returns false (pretty much because the data types are different)
// console.log(a != b); // returns as true

// console.log(a < b || c < d) //return true
// console.log(a < b && c < d)



//IF ELSE Conditions

let firstNumber = prompt("Plz choose your first number:")
let operand = prompt("Please choose an operand from the following: '+", '-','/','*');

let secondNumber = prompt("Please choose your second number:");

console.log(firstNumber, secondNumber, operand)

let result

// if (operand == '+') {
//     result = firstNumber + secondNumber
// } else if (operand== "-"){
//     result = firstNumber - secondNumber
// }else if (operand == "/"){
//     result = firstNumber / secondNumber
// }else if (operand== "+"){
//     result = firstNumber * secondNumber
// }

//calculator using switch statements
// switch(operand) {
//     case '+':
//         result = firstNumber + secomdNumber
//         break;
//     case '-':
//         result = firstNumber - secomdNumber
//         break;
//     case '/':
//         result = firstNumber / secomdNumber
//         break;
//     case '*':
//         result = firstNumber * secomdNumber
//         break;
// }


// for(let = 0; i < 10; i++){
//     for (let j = 0; j < 10; j++){
//         console.log
//     }
// }

let numOfLoops = prompt("how many loops should I do");


if  (numOfLoops < 0) {
    for(let i = 0; i > numOfLoops; i++)
    console.log(i);
}
for(let i = 0; i < numOfLoops; i++)
alert('The calsulated result is: $(result)');