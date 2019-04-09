'use strict';

// Write a function called `sum` that returns the sum of numbers from zero to the given parameter

let addedNumbers: number = 3;

function sum(addedNumbers: number): number{
    let result: number = 0;
    
    for (let index = 0; index <= addedNumbers; index++) {
    result += index;
    }
    return result
}

console.log(sum(addedNumbers))