'use strict';

import { Flower } from './flower';
import { Tree } from './tree';
import { Plant } from './plant';

class Garden {
  name: string;
  flowers: Flower[];
  trees: Tree[];

  constructor(name: string, flowers: Flower[] = [], trees: Tree[] = []) {
    this.name = name;
    this.flowers = flowers;
    this.trees = trees;
  }

  addFlower(newFlower: Flower) {
    this.flowers.push(newFlower);
  }

  addTree(newTree: Tree) {
    this.trees.push(newTree);
  }

  watering(waterAmount: number) {
    let needWatering: any[] = [];

    for (let i = 0; i < this.flowers.length; i++) {
      if (this.flowers[i].waterLevel < 5) {
        needWatering.push(this.flowers[i]);
      }
    }

    for (let j = 0; j < this.trees.length; j++) {
      if (this.trees[j].waterLevel < 10) {
        needWatering.push(this.trees[j]);
      }
    }

    for (let k = 0; k < needWatering.length; k++) {
      needWatering[k].watering(waterAmount / needWatering.length);
    }
  }

  checkWaterLevel() {
    for (let i = 0; i < this.trees.length; i++) {
      if (this.trees[i].waterLevel < 10) {
        console.log(`The ${this.trees[i].color} tree needs water.`);
      }
      else {
        console.log(`The ${this.trees[i].color} tree doesn't need watering.`);
      }
    }

    for (let j = 0; j < this.flowers.length; j++) {
      if (this.flowers[j].waterLevel < 5) {
        console.log(`The ${this.flowers[j].color} flower needs water.`);
      }
      else {
        console.log(`The ${this.flowers[j].color} flower doesn't need watering.`);
      }
    }
  }
}

let flower1 = new Flower('yellow');
let flower2 = new Flower('blue');
let tree1 = new Tree('purple');
let tree2 = new Tree('orange');

let garden1 = new Garden(`Szebald's Garden`);
garden1.addFlower(flower1);
garden1.addFlower(flower2);
garden1.addTree(tree1);
garden1.addTree(tree2);

garden1.checkWaterLevel();
console.log('Watering with 40');
garden1.watering(40);
garden1.checkWaterLevel();
console.log('Watering with 70')
garden1.watering(70);
garden1.checkWaterLevel();