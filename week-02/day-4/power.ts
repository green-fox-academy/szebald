'use strict'

// Given base and n that are both 1 or more, compute recursively (no loops)
// the value of base to the n power, so powerN(3, 2) is 9 (3 squared).

function power(x: number, n: number): any {
    if (n <= 1){
        return x
    }
    else{
        return x * power(x, n-1)
    }
}

console.log(power(3,2))