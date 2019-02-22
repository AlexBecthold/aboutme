console.log("INFO: Starting to read square.js");
console.log("INFO: Getting access to elements");

const inputNum = document.getElementById("inputNum");
const outputNum = document.getElementById("outputNum");
const submitButton = document.getElementById("submitButton");
const resetButton = document.getElementById("resetButton");

console.log("INFO: Configuring event handlers");

submit.onClick = async function () {
    let toSquare = parseInt(inputNum.value);
    let result = await square(toSquare);
    outputNum.innerHTML = result;
}

reset.onClick = async function () {
    clear();
}

console.log("INFO: Declaring functions");

const square = async function (num) {
    console.log('Calling square() with value ${num}');
    let temp = num;
    temp = temp*temp;
    console.log('Answer is ${temp}');
    return String(temp);
}

const clear = function () {
    outputNum.innerHTML = "Output";
}

console.log("INFO: Done loading, waiting for an event");