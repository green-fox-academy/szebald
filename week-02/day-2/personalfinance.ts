'use strict'
export{}

let myExpenses: number[] = [500, 1000, 1250, 175, 800, 120];

let allspends = 0;
for (let i = 0; i < myExpenses.length; i++){
    allspends = allspends + myExpenses[i];
}
console.log(allspends)

let greatestExpense = Math.max.apply(Math, myExpenses);
console.log(greatestExpense)

let cheapestExpense = Math.min.apply(Math, myExpenses);
console.log(cheapestExpense)

let avg = 0;
for (let i = 0; i < myExpenses.length; i++) {
    avg += myExpenses[i];
}
let average = avg / myExpenses.length;

console.log(average);