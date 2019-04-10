'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// create a line drawing function that takes 2 parameters:
// the x and y coordinates of the line's starting point
// and draws a 50 long horizontal line from that point.
// draw 3 lines with that function. Use loop for that.

function horizontallines (x: number,y: number) {
    for (let y = 100; y <= 300; y = y+100) {
    console.log (x, y);
     ctx.beginPath();
     ctx.moveTo(x, y);
     ctx.lineTo(x+50, y);
     ctx.strokeStyle = 'green';
     ctx.stroke();
    }
    return y
 }
 
 console.log(horizontallines(275,0));