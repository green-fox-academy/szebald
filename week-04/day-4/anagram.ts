'use strict';

import { test } from 'tape';

export { }

function Anagram(string1: string, string2: string): boolean {
  return string1.split('').sort().join('') === string2.split('').sort().join('')
}

test('Are these words anagrams?', (t: any) => {
  const actual = Anagram('manna', 'annam');
  const expected = true;

  t.equal(actual, expected);
  t.end();
});