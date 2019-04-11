'use strict'
export{}

// Given a string, compute recursively a new string where all the 'x' chars have been removed.

let string: string = "xxxyxyxxxxyyx"

function removeX(str: string): any {
    if (str.indexOf("x") == -1) {
        return str
    }
    else {
        str = str.replace('x', '')
        return removeX(str)
    }
}
console.log(removeX(string))