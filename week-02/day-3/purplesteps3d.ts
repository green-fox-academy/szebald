'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Reproduce this:
// [https://github.com/green-fox-academy/teaching-materials/blob/master/workshop/drawing/purple-steps-3d/r4.png]

var x = 20;

function biggersquares(size) {
    ctx.fillStyle = "purple";

    for (let i = 0; i <= 100; i += 20) {
        ctx.fillRect(x, x, size + i, size + i)
        ctx.strokeStyle = "black"
        ctx.lineWidth = 2
        ctx.strokeRect(x, x, size + i, size + i)
        x += i;

    }
}

biggersquares(0);
