'use strict';

import { test } from 'tape';
import { add, maxOfThree, median, isVowel, translate } from './extension';

// test('add: 2 and 3 is 5', function (t: any): any {
//   t.equal(add(2, 3), 5);
//   t.end();
// });


// test('add: 1 and 4 is 5', function (t: any): any {
//   t.equal(add(1, 4), 5);
//   t.end();
// });

// test('max of three: first', function (t: any): any {
//   t.equal(maxOfThree(5, 4, 3), 5);
//   t.end();
// });

// test('max of three: third', function (t: any): any {
//   t.equal(maxOfThree(3, 4, 5), 5);
//   t.end();
// });

// test('median: four', function (t: any): any {
//   t.equal(median([7, 5, 3, 5]), 5);
//   t.end();
// });

// test('median: five', function (t: any): any {
//   t.equal(median([1, 2, 3, 4, 5]), 3);
//   t.end();
// });

// test('is vowel: a', function (t: any): any {
//   t.ok(isVowel('a'));
//   t.end();
// });

// test('is vowel: u', function (t: any): any {
//   t.ok(isVowel('u'));
//   t.end();
// });

// test('is vowel: k', function (t: any): any {
//   t.notOk(isVowel('k'));
//   t.end();
// });

test('addtest', function (t: any): any {
  const actual = add(3, 7);
  const expected = 10;

  t.equal(actual, expected);
  t.end();
});

test('max of three test', function (t: any): any {
  const actual = maxOfThree(3, 6, 4);
  const expected = 6;

  t.equal(actual, expected);
  t.end();
});

test('median test', function (t: any): any {
  const actual = median([5, 9, 1, 6, 7, 4]);
  const expected = 5;

  t.deepEqual(actual, expected);
  t.end();
});

test('is vowel test', function (t: any): any {
  const actual = isVowel('a')
  const expected = true;

  t.deepEqual(actual, expected);
  t.end();
});
test('translate test', function (t: any): any {
  const actual = translate('magyar');
  const expected = 'mavagyavar';

  t.equal(actual, expected);
  t.end();
});