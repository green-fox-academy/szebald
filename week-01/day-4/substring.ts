'use strict';

//  Create a function that takes two strings as a parameter
//  Returns the starting index where the second one is starting in the first one
//  Returns `-1` if the second string is not in the first one

function substr(str: string, keyword: string): number {
  for (let i: number = 0; i < str.length; i++) {
    if (str.indexOf(keyword) >= 0) {
      return str.indexOf(keyword)
    }
  }
  return -1
}

console.log(substr('this is what I`m searching in', 'searching'));

console.log(substr('this is what I`m searching in', 'not'));