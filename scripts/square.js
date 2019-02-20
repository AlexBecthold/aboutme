console.log("INFO: Starting to read square.js");
console.log("INFO: Getting access to elements");

const input = document.querySelector("#input");
const output = document.querySelector("#output");
const submit = document.getElementById("submit");
const reset = document.getElementById("reset");

console.log("INFO: Configuring event handlers");

submit.onClick = async function () {
    const toSquare = parseInt(input.value);
    const result = await square(toSquare);
    output.innerHTML = result;
}

reset.onClick = async function () {
    clear();
}

console.log("INFO: Declaring functions");

const square = async function (num) {
    console.log('Calling square() with value ${num}');
    num = num*num;
    console.log('Answer is ${num}');
    return String(num);
}

const clear = function () {
    output.innerHTML = "Output";
}

console.log("INFO: Done loading, waiting for an event");