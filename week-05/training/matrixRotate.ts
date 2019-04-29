'use strict';

const matrix: number[][] = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]

function rotate(matrix: any) {          // function statement
  const N = matrix.length - 1;   // use a constant
  // use arrow functions and nested map;
  const result = matrix.map((row: any, i: number) =>
    row.map((val: any, j: number) => matrix[N - j][i])
  );
  matrix.length = 0;       // hold original array reference
  matrix.push(...result);  // Spread operator
  return matrix;
}

console.log(rotate(matrix))
