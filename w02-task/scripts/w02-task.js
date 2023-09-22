/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */

let fullName = "Tara Decker";
let currentYear = "2023";
let profilePicture = "images/td_headshot.jpg";



/* Step 3 - Element Variables */

const nameElement = document.getElementById("name");
const foodElement = document.getElementById("food");
const yearElement = document.querySelector("#year");
const imageElement = document.getElementsByName("image")



/* Step 4 - Adding Content */

nameElement.innerHTML = `<strong>${fullName}</strong>`;
let text = document.getElementById("currentYear").textContent;
imageElement.setAttribute('src', profilePicture);
imageElement.setAttribute('alt', `Profile image of ${nameElement}`);



/* Step 5 - Array */






