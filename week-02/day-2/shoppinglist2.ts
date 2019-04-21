'use strict'
export { }

const prices: any = {
  Milk: 1.07,
  Rice: 1.59,
  Eggs: 3.14,
  Cheese: 12.60,
  'Chicken Breasts': 9.40,
  Apples: 2.31,
  Tomato: 2.58,
  Potato: 1.75,
  Onion: 1.10,
};

const bobsList = {
  Milk: 3,
  Rice: 2,
  Eggs: 2,
  Cheese: 1,
  'Chicken Breasts': 4,
  Apples: 1,
  Tomato: 2,
  Potato: 1,
};

const alicesList = {
  Rice: 1,
  Eggs: 5,
  'Chicken Breasts': 2,
  Apples: 1,
  Tomato: 10,
};

function howMuchToPay(prices: any, shoppingList) {
  let result = 0;
  const shoppingListItems = Object.keys(shoppingList);

  for (let i = 0; i < shoppingListItems.length; i++) {
    const currentItemName = shoppingListItems[i];
    const currentItemPrice = shoppingList[currentItemName] * prices: any[currentItemName]; // count * one item's price
    result += currentItemPrice;
  }

  return result;
}

console.log(`Bob pays: ${howMuchToPay(prices: any, bobsList)}`);
console.log(`Alice pays: ${howMuchToPay(prices: any, alicesList)}`);
console.log('--------------------------------');


function whoBuysMore(firstList, secondList, target) {
  let result = 'N/A';

  if (
    firstList[target] > secondList[target] ||
    secondList[target] === undefined
  ) {
    result = 'first';
  } else if (
    secondList[target] > firstList[target] ||
    firstList[target] === undefined
  ) {
    result = 'second';
  }

  return result;
}

console.log(whoBuysMore(bobsList, alicesList, 'Rice'));
console.log(whoBuysMore(bobsList, alicesList, 'Potato'));
console.log('--------------------------------');

console.log(Object.keys(bobsList).length > Object.keys(alicesList).length ? 'Bob' : 'Alice');
console.log('--------------------------------');

function sumObjectsValues(shoppingList) {
  let result = 0;
  const shoppingListValues = Object.values(shoppingList);

  for (let i = 0; i < shoppingListValues.length; i++) {
    result += shoppingListValues[i];
  }

  return result;
}

/* function sumObjectsValues(shoppingList){
  return Object.values(shoppingList)
          .reduce((accumulator, currentElement) => accumulator + currentElement, 0);
} */

console.log(sumObjectsValues(bobsList) > sumObjectsValues(alicesList) ? 'Bob' : 'Alice');
console.log('--------------------------------');