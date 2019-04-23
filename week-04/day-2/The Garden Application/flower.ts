'use strict';

import { Plant } from './plant';

export class Flower extends Plant {
  waterIntake!: number;

  constructor(newColor: string, newWaterLevel: number = 0, waterIntake: number = 0.75) {
    super(newColor, newWaterLevel);
    this.waterIntake = waterIntake;
  }

  needWatering(gardenWater: number): any {
    if (this.waterLevel < 5) {
      console.log(`The ${this.color} Flower needs water.`)
    }
    
    else {
      console.log(`The ${this.color} Flower doesn't need water.`)
    }

    if (this.waterLevel < 10) {
      this.waterLevel += (gardenWater * this.waterIntake);
    }

  }
}


