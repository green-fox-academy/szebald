'use strict';

// Write a program that stores 3 sides of a cuboid as variables (floats)
// The program should write the surface area and volume of the cuboid like:
//
// Surface Area: 600
// Volume: 1000

let heigth: number = 10;
let width: number = 10;
let depth: number = 10;

let face1: number = width * depth;
let face2: number = depth * heigth;
let face3: number = heigth * width;

console.log("Volume is: " + (heigth * width * depth));
console.log("The surface area is: " + (face1 * 2 + face2 * 2 + face3 * 2))