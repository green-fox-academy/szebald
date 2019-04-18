'use strict'

class Station {
  gasAmountStation: number;

  constructor(gasAmountStation: number){
    this.gasAmountStation = gasAmountStation
  }
  refill(car: Car){
    this.gasAmountStation -= car.capacity
    car.gasAmountCar += car.capacity
  }
}

class Car {
  gasAmountCar: number;
  capacity: number;

  constructor(gasAmountCar: number = 0, capacity: number = 100){
    this.gasAmountCar = gasAmountCar;
    this.capacity = capacity;
  }
}

const LukOil: Station = new Station(500)
const BMW: Car = new Car();
console.log(LukOil)
console.log(BMW)
LukOil.refill(BMW);
console.log(LukOil)
console.log(BMW)
