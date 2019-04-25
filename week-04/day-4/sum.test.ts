'use strict';

import { Sum } from './sum';
import { test } from 'tape';

test('sum of all elements', (t: any) => {
  let elements = [1, 2, 3, 4];
  let myNumbers: Sum = new Sum(elements);

  const actual = myNumbers.sum(elements)
  const expected = 10;

  t.equal(actual, expected);
  t.end();
});

