'use strict';
export{}
// Add "My todo:" to the beginning of the todoText
// Add " - Download games" to the end of the todoText
// Add " - Diablo" to the end of the todoText but with indention

// Expected outpt:

// My todo:
//  - Buy milk
//  - Download games
//      - Diablo

let todoText: string = ' - Buy milk\n';

const myArray: string[] = [];
    myArray.splice(0, 0, 'My todo:\n')
    myArray.splice(1, 0, todoText)
    myArray.splice(2, 0, ' - Download games\n')
    myArray.splice(3, 0, '     - Diablo\n')
	myArray.splice(4, 1, "")
	const myNewString: string = myArray.join(" ");
	console.log(myNewString);

