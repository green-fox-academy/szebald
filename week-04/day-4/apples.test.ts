'use strict';

import { test } from 'tape';
import { Apple } from './apples';

let apple1: Apple = new Apple();

test('show me the apples', (t: any) => {
  console.log(typeof t);
  
  const actual = apple1.getApple();
  const expected = 'apple';

  t.equal(actual, expected);
  t.end();
})
