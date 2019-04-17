'use strict'

export class Cookie {
  private flavor: string;
  private shape: string;
  private condition: string;
  isDiabetic: boolean;
  numberOfChocolateChips: number;
  static pie: number = 666;?????

  constructor(flavor: string = 'chocolate', shape: string = 'round', isDiabetic: boolean = true, numberOfChocolateChips: number = 0) {
    this.flavor = flavor;
    this.shape = shape;
    this.isDiabetic = isDiabetic;
    this.numberOfChocolateChips = numberOfChocolateChips;
    this.condition = 'raw';
  }

  getCookieFlavorAndShape() {
    return this.flavor
  }
  setCookieFlavorAndShape(newFlavor: string, newShape: string) {
    this.flavor = newFlavor;
  }

  setCondition(newCondition: string): void {
    this.condition = newCondition;
  }

  getCondition(): string {
    return this.condition
  }
}

const myFirstCookie: Cookie = new Cookie('vanilla', 'elephant', false, 12)
const reallyBoringCookie: Cookie = new Cookie()

reallyBoringCookie.setCookieFlavorAndShape('spicy', 'kangaroo');


console.log(reallyBoringCookie.getCookieFlavorAndShape())
console.log(reallyBoringCookie)
console.log(myFirstCookie)
console.log(myFirstCookie.getCookieFlavorAndShape());
