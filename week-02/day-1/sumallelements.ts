'use strict'

// -  Create a variable named `int` with the following content: `[3, 4, 5, 6, 7]`
// -  Log the sum of the elements in `int` to the console

let int: number[] = [3, 4, 5, 6, 7];

let intSummed = int.reduce(function (summaryValue: number, currentNumber: number) {
  return summaryValue += currentNumber;
}, 0)

console.log(intSummed)