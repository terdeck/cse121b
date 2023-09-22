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

// const imageElement = document.getElementsByName(profilePicture);
const imageElement = document.getElementById("img");



/* Step 4 - Adding Content */

nameElement.innerHTML = `<strong>${fullName}</strong>`;
// let text = document.getElementById("currentYear").textContent;
currentYear.textContent = "2023";

imageElement.setAttribute('src', profilePicture);
imageElement.setAttribute('alt', `Profile image of ${nameElement}`);


/* Step 5 - Array */

let favoriteFood = ['Shrimp Boil', 'Chicken', 'Pepperoni Pizza'];

document.getElementById("food").innerHTML = favoriteFood;

const newFood = favoriteFood + newFood;

favoriteFood.push("Carbs");

foodElement.innerHTML += `<br>${favoriteFood}`;

favoriteFood.shift();

// favoriteFood.log(favoriteFood).innerHTML += `<br>${favoriteFood}`;
favoriteFood.innerHTML += `<br>${favoriteFood}`;

favoriteFood.pop();

favoriteFood.innerHTML += `<br>${favoriteFood}`;


