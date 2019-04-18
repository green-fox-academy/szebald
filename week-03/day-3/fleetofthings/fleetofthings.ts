'use strict'

/* Crete a fleet of things to have this output:
1. [ ] Get milk
2. [ ] Remove the obstacles
3. [x] Stand up
4. [x] Eat lunch
// Hint: You have to create a `print()` method as well */

import { Thing } from './thing';
import { Fleet } from './fleet';

let thing1: Thing = new Thing('Get milk')
let thing2: Thing = new Thing('Remove the obstacles')
let thing3: Thing = new Thing('Stand up')
thing3.complete()
let thing4: Thing = new Thing('Eat lunch')
thing4.complete()

let fleet = new Fleet();
fleet.add(thing1)
fleet.add(thing2)
fleet.add(thing3)
fleet.add(thing4)

for (let i = 0; i < fleet.getThings().length; i++)
  if(fleet.getThings()[i].getCompleted() === true){
    console.log(`[x] ${fleet.getThings()[i].getName()}`)
  }
  else {
    console.log(`[ ] ${fleet.getThings()[i].getName()}`)
  }

