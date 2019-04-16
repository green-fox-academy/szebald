'use strict'
export { }

// Write a function that copies the contents of a file into another
// It should take the filenames as parameters
// It should return a boolean that shows if the copy was successful

const fs = require('fs');

function copy(source: string, dest: string): any {
  
  try {
    let text = fs.readFileSync(source, 'UTF-8');
    if (source) {
      fs.copyFileSync(source, dest)
      console.log('Copy was successful to: ' + dest)
    }
  }
  catch (e) {
    console.log('Copy was unsuccessfull to: ' + dest + ' cuz ' + source + ' do not exist!')
  }
}
copy('szosz.txt', 'deszt.txt')