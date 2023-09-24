/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */

let fullName = "Tara Decker";
let currentYear = "";
let profilePicture = "images/td_headshot.jpg";

/* Step 3 - Element Variables */
const nameElement = document.getElementById("name");
const foodElement = document.getElementById("food");
const yearElement = document.querySelector("#year");

const imageElement = document.querySelector("img");

/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;
currentYear.textContent = "2023";

imageElement.setAttribute('src', profilePicture);
imageElement.setAttribute('alt', `Profile image of ${nameElement}`);

/* Step 5 - Array */
// 1  
const favoriteFood = ["Shrimp Boil", " Chicken", " Pepperoni Pizza"];
// 2
document.getElementById("food").innerHTML = favoriteFood;
// 3
const newFood = " Carbs";
// 4
favoriteFood.push(newFood);
// 5
foodElement.innerHTML += `<br>${favoriteFood}`;
// 6
favoriteFood.shift();
// 7
foodElement.innerHTML += `<br>${favoriteFood}`;
// 8
favoriteFood.pop();
// 9
foodElement.innerHTML += `<br>${favoriteFood}`;