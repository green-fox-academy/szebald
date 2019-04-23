'use strict';

import { Plant } from './plant';

export class Tree extends Plant {
  waterIntake!: number;

  constructor(newColor: string, newWaterLevel: number = 0, waterIntake: number = 0.4) {
    super(newColor, newWaterLevel);
    this.waterIntake = waterIntake;
  }

  needWatering(gardenWater: number): any {
    if (this.waterLevel < 10) {
      console.log(`The ${this.color} Tree needs water.`)
    }

    else {
      console.log(`The ${this.color} Tree doesn't need water.`)
    }

    if (this.waterLevel < 10) {
      this.waterLevel += (gardenWater * this.waterIntake);
    }

  }
}
