'use strict';

export class Sum {

  elements: [] = [];

  constructor(elements: any) {
    this.elements = elements;
  }

  sum(elements: any) {
    return this.elements.reduce(function (a, b) { return a + b; }, 0);
  }
}
