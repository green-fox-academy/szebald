'use strict';
export {}
// While saving this quote, a disk error has occured. Please fix it.
// Add "always takes longer than" between the words "It" and "you"

let quote: string = `Hofstadter's Law: It you expect, even when you take into account Hofstadter's Law.`;

const myArray: string[] = quote.split(" ");
    myArray.splice(3, 0, 'always takes longer than')
	
	const myNewString: string = myArray.join(" ");
	console.log(myNewString);
