'use strict';

let lineCount: number = 7;

// Write a program that draws a
// diamond like this:
//
//    *
//   ***
//  *****
// *******
//  *****
//   ***
//    *
//
// The diamond should have as many lines as lineCount is

let height = 7;
let x = Math.floor(height / 2);
let n = height - x;

for (let i = 0; i < n; i++) {
  let line = "";
  for (let j = 0; j < (n - i - 1); j++) {
    line += " ";
  }
  for (let k = 0; k < i * 2 + 1; k++) {
    line += "*";
  }
  console.log(line);
}

for (let i = 0; i < x; i++) {
  let line = "";
  if (height % 2 === 0) {
    for (let j = 0; j < (i * 1); j++) {
      line += " ";
    }
  }
  else {
    for (let j = 0; j < (i * 1) + 1; j++) { 
      line += " ";
    }
  }
  for (let k = 0; k < (x * 2) - i * 2 - 1; k++) {
    line += "*";
  }
  console.log(line);
}