'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a square drawing function that takes 2 parameters:
// The square size, and the fill color,
// and draws a square of that size and color to the center of the canvas.
// Create a loop that fills the canvas with rainbow colored squares.

let colors: string [] =["#ff0000", "#FF7F00", "#FFFF00", "#4DE94C", "#3783FF", "#4815AA", "#ee82ee"]

function sqdraw (size) {
    
    let x = 300 - size / 2
    let y = 200 - size / 2

    for (let i = 0; i < 7; i++){
        ctx.fillStyle = colors[i]
        ctx.fillRect(x,y, size, size)
        ctx.strokeStyle = "black"
        ctx.lineWidth = 1
        ctx.strokeRect(x, y, size, size)
        size = size - 40
        x = 300 - size / 2
        y = 200 - size / 2
}
return size
}

console.log(sqdraw(275))