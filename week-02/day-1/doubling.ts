// -  Create a variable named `baseNum` and assign the value `123` to it
// -  Create a function called `doubling` that doubles it's input parameter and returns with an integer
// -  Log the result of `doubling(baseNum)` to the console

let baseNum: number = 123

function doubling(baseNum: number): number {
    return baseNum * 2;
}

console.log("result of doubling(baseNum): " + doubling(baseNum))