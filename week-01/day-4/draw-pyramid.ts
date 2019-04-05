'use strict';

let lineCount: number = 4;

// Write a program that draws a
// pyramid like this:
//
//    *
//   ***
//  *****
// *******
//
// The pyramid should have as many lines as lineCount is



for (let i = 0; i < lineCount; i++) {
  let line = " ";
    for (let j = 0; j < (lineCount - i - 1); j++) {
      line += " ";
    }
    for (let k = 0; k < i * 2 + 1; k++) {
      line += "*";
    }
    console.log(line)
}
