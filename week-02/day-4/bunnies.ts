// We have a number of bunnies and each bunny has two big floppy ears.
// We want to compute the total number of ears across all the bunnies recursively (without loops or multiplication).
'use strict'

//for loop
// function earCount(x: number): number{
//     for (let i: number = 0; i <= x*2; i++){
//         console.log(i)
//     }
//     return x;

// }
// console.log(earCount(5))

function earCursion(bunnies: number): number {

    if (bunnies < 1){
        return 0;
    }
    return 2 + earCursion(bunnies-1);
}

console.log(earCursion(-10))