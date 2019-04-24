'use strict';

import { ElectricGuitar, BassGuitar, Violin, BigShaq } from './stringinstruments';

// console.log('Test 1, create Electric Guitar, Bass Guitar and Violin with default strings.');
let guitar = new ElectricGuitar();
let bassGuitar = new BassGuitar();
let violin = new Violin();
let nagysakal = new BigShaq();

console.log('Test 1 Play');
guitar.play();
bassGuitar.play();
violin.play();
nagysakal.play();


// console.log('\nTest 2, create Electric Guitar, Bass Guitar with 7 and 5 strings .');
let guitar2 = new ElectricGuitar(7);
let bassGuitar2 = new BassGuitar(5);

console.log('\nTest 2 Play');
guitar2.play();
bassGuitar2.play();