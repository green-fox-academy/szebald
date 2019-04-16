'use strict'

// Create a function that takes a number
// divides ten with it,
// and prints the result.
// It should print 'fail' if the parameter is 0

function divider (n: number = 100) {
    if (n !== 0) {
      console.log(100 / n);
    }else {
    console.log('fail');
  }
  }
  
  divider(0)