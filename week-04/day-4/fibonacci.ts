'use strict';

import { test } from 'tape';

function fibonacciN(x: number): number {

  if (x === 2) {
    return 1;
  }
  else if (x === 1) {
    return 0;
  }
  return fibonacciN(x - 1) + fibonacciN(x - 2);
}


test('Fibo1', (t:any) => {
  const actual = fibonacciN(5);
  const expected = 3;

  t.deepEqual(actual, expected);
  t.end(); 
})

test('Fibo2', (t:any) => {
  const actual = fibonacciN(12);
  const expected = 69;

  t.deepEqual(actual, expected);
  t.end(); 
})