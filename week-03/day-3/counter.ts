'use strict'

// Create a Counter class
// which has an integer property
// when creating it should have a default value 0 or we can specify it when creating
// we can add(number) to increase the counter's value by a whole number
// or we can add() without parameters just increasing the counter's value by one
// and we can get() the current value as string
// also we can reset() the value to the initial value

class Counter {
  int: number;
  initial: number;

  constructor(int: number = 0) {
    this.int = int;
    this.initial = int;
  }

  add(num: number = 1) {
    this.int += num;
    console.log(this.int)
  }

  get(){ 
    // String(this.int);
    console.log(String(this.int));
  }
  reset(){
    this.int = this.initial
    console.log(this.int)
  }
}

const counter1: Counter = new Counter ();

counter1.add(295);
counter1.get();
counter1.reset();