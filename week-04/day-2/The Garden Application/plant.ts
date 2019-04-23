'use strict';

export class Plant {
  color: string;
  waterLevel: number;
  waterIntake!: number;

  constructor(newColor: string, newWaterLevel: number = 0) {
    this.color = newColor;
    this.waterLevel = newWaterLevel;
  }

  watering(newWaterAmount: number) {
    this.waterLevel += (newWaterAmount * this.waterIntake);
  }
}
