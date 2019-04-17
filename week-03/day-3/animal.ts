'use strict'


// Create an Animal class
// Every animal has a hunger value, which is a whole number
// Every animal has a thirst value, which is a whole number
// when creating a new animal object these values are created with the default 50 value
// Every animal can eat() which decreases their hunger by one
// Every animal can drink() which decreases their thirst by one
// Every animal can play() which increases both by one

class Animal {
  hunger: number;
  thirst: number;

  constructor(hunger: number = 50, thirst: number = 50) {
    this.hunger = hunger;
    this.thirst = thirst;
  }
  eat() {
    this.hunger -= 1;
    console.log(`When this animal eats, its hunger increased to ${this.hunger}`)
  }

  drink() {
    this.thirst -= 1;
    console.log(`When this animal drinks, its hunger increased to ${this.thirst}`);
    
  }

  play() {
    this.hunger += 1;
    this.thirst += 1;
    console.log(`When this animal plays increased its thirst to ${this.thirst} and its hunger to ${this.hunger}`)
  }
}

const Lion: Animal = new Animal();
Lion.play();
Lion.drink();
Lion.eat();