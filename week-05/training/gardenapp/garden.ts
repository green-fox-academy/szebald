'use strict';

import { Plant, Flower, Tree } from './plant'

class Garden {
  gardenName: string;
  plants: Plant[];

  constructor(gardenName: string, plants: Plant[] = []) {
    this.gardenName = gardenName;
    this.plants = plants;
  }

  addPlant(newPlant: Plant): void {
    this.plants.push(newPlant);
  }

  checkWaterLevel() {
    for (let i = 0; i < this.plants.length; i++) {
      if (this.plants[i].currentWaterLevel < this.plants[i].criticalWaterLevel) {
        console.log(`The ${this.plants[i].color} ${this.plants[i].name} needs water.`);
      }
      else {
        console.log(`The ${this.plants[i].color} ${this.plants[i].name} doesn't need watering.`);
      }
    }
  }

  waterAllThePlants(amount: number): void {
    const thirstyCounter: number = this.plants.filter(onePlant => onePlant.needsWatering).length;
    const currentWaterAmount: number = amount / (thirstyCounter || 1);

    console.log(`\nWatering with ${amount}:`);

    this.plants.forEach((onePlant: Plant) => {
      if (onePlant.needsWatering() === true) {
        onePlant.watering(currentWaterAmount);
      }
    });

  }
}



let myGarden: Garden = new Garden('anyadkertje')

let yellowFlower: Flower = new Flower('yellow', 0);
let blueFlower: Flower = new Flower('blue', 0);
let orangeTree: Tree = new Tree('orange', 0);
let purpleTree: Tree = new Tree('purple', 0);

myGarden.addPlant(yellowFlower);
myGarden.addPlant(blueFlower);
myGarden.addPlant(orangeTree);
myGarden.addPlant(purpleTree);

myGarden.checkWaterLevel();

myGarden.waterAllThePlants(40);

myGarden.checkWaterLevel();

myGarden.waterAllThePlants(70);

myGarden.checkWaterLevel();


