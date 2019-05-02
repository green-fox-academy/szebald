'use strict';

export class Plant {
  name: string = '';
  color: string;
  currentWaterLevel: number;
  criticalWaterLevel: number;
  waterIntake: number;

  constructor(name: string, color: string, currentWaterLevel: number = 0, criticalWaterLevel: number, waterIntake: number) {
    this.name = name;
    this.color = color;
    this.currentWaterLevel = currentWaterLevel;
    this.criticalWaterLevel = criticalWaterLevel;
    this.waterIntake = waterIntake;
  }

  watering(amount: number) {
    this.currentWaterLevel += amount * this.waterIntake;
  }

  needsWatering(): boolean{
    return this.currentWaterLevel < this.criticalWaterLevel;
  }

}

export class Tree extends Plant {
  
  constructor(color: string, currentWaterLevel: number) {
    super('Tree', color, 0, 10, 0.4);
  }

  needWater(): string {
    if (this.currentWaterLevel < 10) {
      return `The ${this.color} Tree needs water.`
    }

    else {
      return `The ${this.color} Tree doesn't need water.`
    }
  }
}

export class Flower extends Plant {
  
  constructor(color: string, currentWaterLevel: number) {
    super('Flower', color, 0, 5, 0.75);
    
  }

  needWater(): string {
    if (this.currentWaterLevel < 5) {
      return `The ${this.color} Flower needs water.`
    }

    else {
      return `The ${this.color} Flower doesn't need water.`
    }
  }
}