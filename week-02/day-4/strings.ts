'use strict'

// Given a string, compute recursively (no loops) a new string 
// where all the lowercase "x" chars have been changed to 'y' chars.

let string: string = "xxxyxyxxxxyyx"

function xToy(str: string): any {
//     if (str.indexOf("x") == -1){
//     return str
// }
// else{
//     str = str.replace('x', 'y')
//     return xToy(str)
return str.indexOf('x') == -1 ? str : str = str.replace('x','y'); xToy(str);}

console.log(xToy(string))