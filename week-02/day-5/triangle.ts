'use strict'

const canvas = document.querySelector('.main-canvas') as HTMLcanvasElement;
const ctx = canvas.getContext('2d');

function triangle(aX, aY, bX, bY, cX, cY, d) {
  if (d === 0) {
    ctx.moveTo(aX, aY);
    ctx.lineTo(bX, bY);
    ctx.lineTo(cX, cY);
    ctx.lineTo(aX, aY);
    ctx.strokeStyle = 'black';
    ctx.stroke();

  }
  else {
    triangle(aX, aY, (aX + cX) / 2, (aY + cY) / 2, (aX + bX) / 2, (aY + bY) / 2, d - 1);
    triangle((aX + bX) / 2, (aY + bY) / 2, (bX + cX) / 2, (bY + cY) / 2, bX, bY, d - 1);
    triangle((aX + cX) / 2, (aY + cY) / 2, (bX + cX) / 2, (bY + cY) / 2, cX, cY, d - 1);
  }
}

triangle(50, 20, 450, 20, 250, 380, 6);
ctx.fillStyle = 'orange';
ctx.fill();
ctx.strokeStyle = 'black';
ctx.lineWidth = 0.1;
ctx.stroke();