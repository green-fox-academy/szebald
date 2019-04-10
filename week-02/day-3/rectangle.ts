'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Draw four different size and color rectangles.
// Avoid code duplication.

let color: string [] = ["black", "yellow", "green", "blue"]

function rectangles (x, y, sizex, sizey, color) {
    ctx.beginPath();
    ctx.fillStyle = color;
    ctx.fillRect(x, y, sizex, sizey)

}
for (let i = 0; i < 4; i++){
    rectangles(Math.random()*600, Math.random()*400, Math.random()*100, Math.random()*50, color[i]);
}