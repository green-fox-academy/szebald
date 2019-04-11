'use strict'
// Given a non-negative int n, return the sum of its digits recursively (no loops). Note that mod (%) by 10 yields the 
// rightmost digit (126 % 10 is 6), while divide (/) by 10 removes the rightmost digit (126 / 10 is 12).

function sumDigits(x: number): number {

    if (x < 10) {
        return Math.floor(x);
    } else {
        return Math.floor(((x % 10) + sumDigits(x / 10)));
    }
}


console.log(sumDigits(126));