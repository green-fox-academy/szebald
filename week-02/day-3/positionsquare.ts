'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a square drawing function that takes 2 parameters:
// The x and y coordinates of the square's top left corner
// and draws a 50x50 square from that point.
// Draw 3 squares with that function.
// Avoid code duplication.

function sqdraw (x, y) {
    for (let y = 75; y < 300; y = y+100) {
        ctx.beginPath()
        ctx.fillStyle = "green"
        ctx.fillRect(x, y, 50, 50)
       };
       return y
   };
 console.log(sqdraw(275, 0))
