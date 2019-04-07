'use strict';

// An average Green Fox attendee codes 6 hours daily
// The semester is 17 weeks long
//
// Print how many hours is spent with coding in a semester by an attendee,
// if the attendee only codes on workdays.
//
// Print the percentage of the coding hours in the semester if the average
// work hours weekly is 52

let dailycodehour: number = 6;
let semester: number = 17;
let workdays: number = 5;
let averageworkhour: number = 52;

console.log((dailycodehour * workdays) * semester)
console.log(((dailycodehour * workdays) / averageworkhour) * 100)
