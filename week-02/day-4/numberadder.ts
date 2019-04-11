// Write a recursive function that takes one parameter: n and adds numbers from 1 to n.

function numberAdder(x: number): any {
    if (x === 1){
    return 1;
    }

    else{
    return x + numberAdder(x-1);
    }
}
    console.log(numberAdder(6))