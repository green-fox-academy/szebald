'use strict'

//Find the greatest common divisor of two numbers using recursion.

function greatestc (x: number, y: number): any {
    if (!y){
        return x
    }
    else {
        return greatestc(y, x % y)
    }
}
console.log(greatestc(4, 2))