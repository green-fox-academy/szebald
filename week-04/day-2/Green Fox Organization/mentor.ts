'use strict';

import { Person } from './person';

export class Mentor extends Person {
  level: string;

  constructor(mentorName: string = 'Jane Doe', mentorAge: number = 30, mentorGender: string = 'female', mentorLevel: string = 'intermediate'){
    super();
    this.name = mentorName;
    this.age = mentorAge;
    this.gender = mentorGender;
    this.level = mentorLevel;
  }

  getGoal(): void{
    console.log('My goal is: Educate brilliant junior software developers.');
  }

  introduce(): void{
    console.log(`Hi, I'm ${this.name}, a ${this.age} year old ${this.gender} ${this.level} mentor.`)
  }

}