'use strict';
export{}

let map: any = {};

if (map > 0){
    console.log("This map is not empty.");
}
else {
    console.log("This map is empty.")
}

console.log(map);

map = {
    97: "a",
    98: "b",
    99: "c",
    65: "A",
    66: "B",
    67: "C",
}

console.log(Object.keys(map));

console.log(Object.values(map));

map[68] = "D";

console.log(Object.keys(map).length);

console.log(map[99]);

delete (map[97]);

console.log(map[100]);

map = {};
console.log(map);