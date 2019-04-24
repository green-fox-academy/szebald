'use strict';

abstract class Instrument {
  abstract name: string;
  play(): void { };
}

abstract class StringedInstrumnets extends Instrument {
  abstract numberOfStrings: number;

  sound(): void{ };
  play(): void {
    console.log(`${this.name}, a ${this.numberOfStrings}-stringed instrument, the thing goes: "${this.sound()}"`)
  }
}

export class ElectricGuitar extends StringedInstrumnets {
  name: string = 'Electric Guitar';
  numberOfStrings: number;
  
  constructor(newNumberOfString: number = 6) {
    super();
    this.numberOfStrings = newNumberOfString;
  }

  sound(): string {
    return 'Twang';
  }
}

export class BassGuitar extends StringedInstrumnets {
  name: string = 'Bass Guitar'
  numberOfStrings: number;

  constructor(newNumberOfString: number = 4) {
    super();
    this.numberOfStrings = newNumberOfString;
  }

  sound(): string {
    return 'Duum-duum-duum';
  }
}

export class Violin extends StringedInstrumnets {
  name: string = 'Violin'
  numberOfStrings: number;

  constructor(newNumberOfString: number = 4) {
    super();
    this.numberOfStrings = newNumberOfString;
  }

  sound(): string {
    return 'Screech';
  }
}

export class BigShaq extends StringedInstrumnets {
  name: string = 'BigShaq'
  numberOfStrings: number;

  constructor(newNumberOfString: number = 2) {
    super();
    this.numberOfStrings = newNumberOfString;
  }

  sound(): string {
    return 'Skrrrrrrah';
  }
}