'use strict'
export{}

// Create a function that takes a number
// divides ten with it,
// and prints the result.
// It should print 'fail' if the parameter is 0

let n: number = 0;
function div(n: number): any {
    return 10 / n;
}
try {
    if (n === 0) {
        throw new Error('fail')
    }
    else if (n > 0){
        console.log(div(n))
    }

}
catch (e) {
    console.log(e.message)
}
