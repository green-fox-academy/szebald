'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Reproduce this:
// [https://github.com/green-fox-academy/teaching-materials/blob/master/workshop/drawing/purple-steps/r3.png]

function purplesq(x, y) {
    ctx.fillStyle = "purple"
    ctx.strokeStyle = "black"
    ctx.lineWidth = 2
    ctx.strokeRect(x, y, 15, 15)
    ctx.fillRect(x, y, 15, 15)
}

for (let i = 1; i < 20; i++) {
    purplesq((i * 15), (i * 15))
}
