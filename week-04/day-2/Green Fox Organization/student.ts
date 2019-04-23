'use strict';
export { }

import { Person } from './person'

export class Student extends Person {
  previousOrganization: string;
  skippedDays: number;

  constructor(name?: string, age?: number, gender?: string, previousOrganization: string = 'School of Life', skippedDays: number = 0) {
    super(name, age, gender);
    this.previousOrganization = previousOrganization;
    this.skippedDays = skippedDays;

  }

  getGoal() {
    console.log('My goal is: Be a junior software developer.');
  }

  introduce() {
    console.log(`Hi, I'm ${this.name}, a ${this.age} year old ${this.gender} from ${this.previousOrganization} who skipped ${this.skippedDays} days from the course already.`)
  }

  skipDays(numberOfDays: number): number {
    return this.skippedDays += numberOfDays;
  }

}