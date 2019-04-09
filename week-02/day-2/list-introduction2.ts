'use strict'
export{}

let listA: any[] = ["Apple", "Avocado", "Blueberries", "Durian", "Lychee"];

let listB: any[] = listA;

console.log(listA.includes("Durian"));

listB.splice(3, 1);
console.log(listB);

listA.splice(4,0, "Kiwifruit");
console.log(listA);

if (listA > listB){
    console.log("ListA is bigger than listB.")
}
else{
    console.log("ListB is bigger than listA.")
}

console.log(listA.indexOf("Avocado"));

console.log(listB.indexOf("Durian"));

listB.push("Passion Fruit", "Pummelo")

console.log(listA[2]);