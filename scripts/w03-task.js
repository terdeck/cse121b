/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add(number1, number2) {
    return number1 + number2;
}

function addNumbers() {
    let addNumber1 = Number(document.querySelector('#add1').value);
    let addNumber2 = Number(document.querySelector('#add2').value);
    document.querySelector('#sum').value = add(addNumber1, addNumber2);
}
document.querySelector('#addNumbers').addEventListener('click', addNumbers);

/* Function Expression - Subtract Numbers */
function subtract(subtract1, subtract2) {
    return subtract1 - subtract2;
}

function subtractNumbers() {
    let subtract1 = Number(document.querySelector('#subtract1').value);
    let subtract2 = Number(document.querySelector('#subtract2').value);
    document.querySelector('#difference').value = subtract(subtract1, subtract2);
}
document.querySelector('#subtractNumbers').addEventListener("click", subtractNumbers);

/* Arrow Function - Multiply Numbers */
// function multipy(factor1, factor2) {
//     return factor1 * factor2;
// }
const multiply = (factor1, factor2) => factor1 * factor2;
// const func = (x) => x * x;
// ({ a, b } = { a: 10, b: 20 }) => expression

// function multiplyNumbers() {
//     let multiply1 = Number(document.querySelector('#factor1').value);
//     let multiply2 = Number(document.querySelector('#factor2').value);
//     document.querySelector('#product').value = multipy(multiply1, multiply2);
// }
// document.querySelector('#multiplyNumbers').addEventListener("click", multiplyNumbers);

const multiplyNumbers = () => document.querySelector('#product').value = multiply(Number(document.querySelector('#factor1').value), Number(document.querySelector('#factor2').value));
document.querySelector('#multiplyNumbers').addEventListener("click", multiplyNumbers);

/* Open Function Use - Divide Numbers */
function divide(dividend, divisor) {
    return dividend / divisor;
}

function divideNumbers() {
    let dividend = Number(document.querySelector('#dividend').value);
    let divisor = Number(document.querySelector('#divisor').value);
    document.querySelector('#quotient').value = divide(dividend, divisor);
}
document.querySelector('#divideNumbers').addEventListener("click", divideNumbers);

/* Decision Structure */
let date = new Date();
let currentYear = date.getFullYear();
document.querySelector('#year').value = currentYear;

/* ARRAY METHODS - Functional Programming */
/* Output Source Array */
let new_array = [1,2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
document.querySelector('#array').innerHTML = new_array;

/* Output Odds Only Array */
document.querySelector('#odds').innerHTML = new_array.filter((odds) => odds % 2 === 1);

/* Output Evens Only Array */
document.querySelector('#evens').innerHTML = new_array.filter((evens) => evens % 2 === 0);

/* Output Sum of Org. Array */
document.querySelector('#sumOfArray').innerHTML = new_array.reduce((sum, number) => sum + number);
// const gpa = gpaPoints.reduce((total, item) => total + item) / gpaPoints.length;

/* Output Multiplied by 2 Array */
document.querySelector('#multiplied').innerHTML = new_array.map((number) => number * 2);

/* Output Sum of Multiplied by 2 Array */
document.querySelector('#sumOfMultiplied').innerHTML = new_array.map((number) => number * 2) + new_array.reduce((sum, number) => sum + number);