'use strict'

let matrix: number[][] = [];
let matrixSize = 4;

for (let i = 0; i < matrixSize; i++) {
  matrix.push([])
  for (let j = 0; j < matrixSize; j++) {
    if (j === matrixSize - i - 1) {
      matrix[i].push(1)
    }
    else {
      matrix[i].push(0)
    }
  }
  console.log(matrix[i])
}