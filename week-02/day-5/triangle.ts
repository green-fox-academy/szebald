'use strict'

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

function triangle(Ax, Ay, Bx, By, Cx, Cy, d) {
  if (d === 0) {
    ctx.moveTo(Ax, Ay);
    ctx.lineTo(Bx, By);
    ctx.lineTo(Cx, Cy);
    ctx.lineTo(Ax, Ay);
    ctx.strokeStyle = 'black';
    ctx.stroke();

  }
  else {
    triangle(Ax, Ay, (Ax + Cx) / 2, (Ay + Cy) / 2, (Ax + Bx) / 2, (Ay + By) / 2, d - 1);
    triangle((Ax + Bx) / 2, (Ay + By) / 2, (Bx + Cx) / 2, (By + Cy) / 2, Bx, By, d - 1);
    triangle((Ax + Cx) / 2, (Ay + Cy) / 2, (Bx + Cx) / 2, (By + Cy) / 2, Cx, Cy, d - 1);
  }
}

triangle(50, 20, 450, 20, 250, 380, 6);
ctx.fillStyle = 'yellow';
ctx.fill();
ctx.strokeStyle = 'black';
ctx.lineWidth = 0.1;
ctx.stroke();