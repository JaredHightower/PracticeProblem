
let xNumber = [1, 2, 3, 4, 10, 11];

function sum(numberArray){
    result = 0
    for (i = 0; i < 6; i++){
        //numberArray [0] + numberArray [1];
        result = numberArray [i] + result
    }
    console.log("Answer: " + result);
}

sum(xNumber);