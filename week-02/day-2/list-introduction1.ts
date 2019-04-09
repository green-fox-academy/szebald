'use strict'
export{}

let names: string[] = []
console.log(names.length);

names.push("William");
console.log(names.length);

names.push("John","Amanda")
console.log(names.length);

console.log(names[2])

for (let i = 0; i < names.length; i++){
    console.log(names[i]);
}
for (let j = 0; j < names.length; j++){
    console.log((j+1) + ". " + names[j]);
}

names.splice(1, 1);

for (let i = names.length - 1; i >= 0; i--){
console.log(names[i]);
}

names.splice(0, 2)
console.log(names)
