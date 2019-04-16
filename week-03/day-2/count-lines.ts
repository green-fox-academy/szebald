'use strict'

// Write a function that takes a filefilename as string,
// then returns the number of lines the file contains.
// It should return zero if it can't open the file, and
// should not raise any error.

const fs = require('fs');

function countLines(filename: string): number {
  try {
    return fs.readFileSync(filename, 'UTF-8').split('\n').length;
  }
  catch (e) {
    return 0;
  }
}
  console.log(countLines('./valami.txt'));
    
