'use strict'
export{}

let map: any = {};

map = {
    "978-1-60309-452-8": "A Letter to Jo",
    "978-1-60309-459-7": "Lupus",
    "978-1-60309-444-3": "Red Panda and Moon Bear",
    "978-1-60309-461-0": "The Lab"
}

for (let i: number = 0; i < Object.keys(map).length; i++){
    console.log(`${map[Object.keys(map)[i]]} (ISBN: ${Object.keys(map)[i]})`)
}

delete map["978-1-60309-444-3"]
console.log(map);

Object.keys(map).forEach(i => map[i] === 'The Lab' ? delete map[i] : '');
console.log(map)

map [978-1-60309-450-4] = "They Calles Us Enemy";
map [978-1-60309-453-5] = "Why Did We Trust Him?";

console.log(Object.keys(map).filter(j => void j=== '478-0-61159-424-8').length === 0 ? "Not exist..." : "Found it.");
console.log(map[978-1-60309-453-5]);