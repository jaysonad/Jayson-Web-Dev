console.log("Script is running...")

// let nums = [1, 2, 3,4 5];

// for (let i = 0; i < nums.length; i++){
//     // A for loop mean that we want to repatedly
// // execute the block of inside the loop
//    // console.log(nums[i]);
// } 

// let lettersList = ['a', 'b', 'c', 'd','e']


// nums.forEach((letter, indexOfLetter, wholeLetterList) => {console.log('The elementat index ${indexOfLetter} is ${letter}')});
// console.log(newLettersList);

const expenses = [
    {name: "Alice", amount: 45.75},
    {name: "Bob", amount: 60.0},
    {name: "Charlie", amount: 35.5},
    {name: "Dave", amount: 50.0},
    {name: "Eve", amount: 41.25},
];

// expenses.forEach(function (expense){
//     console.log('${expense.name: ${expense.amount}');
// // }); 
// const exchangeRate= 0.68;
// const expenseInEuros = expenses.map((expense) => {
//     return{
//         name: expense.name,
//         amount: '${expense.amount * exchangeRate} '
//     }
// })


// const totalExpenses = expenses.reduce{

// }

// const extractExpense =expenses.find((expense) => expense.amount == 50);
// console.log(exactExpense);

// const hasLargeExpense = expeses.some(function(expense){
//     return expense.amount
// })


//every: Check if all expenses are below $100
const allBelowHundred = expenses.every((ex) => ex.amount <100);

const sortedExpense =expenses
