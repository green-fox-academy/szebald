'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a square drawing function that takes 1 parameter:
// The square size
// and draws a square of that size to the center of the canvas.
// Draw 3 squares with that function.
// Avoid code duplication.

let colors: string [] =["red", "yellow", "green"]

function sqdraw (size) {
    let clr = 0
    let x = 300 - size / 2
    let y = 200 - size / 2

    for (let i = 0; i < 3; i++){
        ctx.fillStyle = colors[clr]
        ctx.fillRect(x,y, size, size)
        clr = clr + 1;
        size = size / 2
        x = 300 - size / 2
        y = 200 - size / 2
}
return size
}

console.log(sqdraw(300))