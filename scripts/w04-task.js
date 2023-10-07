/* LESSON 3 - Programming Tasks */

/* Profile Object  */

// const myProfile = {
//     self: ""}
let myProfile = {
    name: "Tara Decker",
    photo: "images/td_headshot.jpg",
    favoriteFoods: ["Shrimp Boil", " Chicken", " Pepperoni Pizza"],
    hobbies: ["Perler Bead Art", "Music", "Crochet"],
    placesLived: [],
};

/* Populate Profile Object with placesLive objects */

myProfile.placesLived.push({
    place: "South Carolina",
    length: "4 years"
})

myProfile.placesLived.push({
    place: "Utah",
    length: "Too Long"
})
// I don't feel comfortable listing every place I've lived on the internet. Sorrynotsorry.

/* DOM Manipulation - Output */

/* Name */
document.querySelector("#name").textContent = myProfile.name;
/* Photo with attributes */
// let img = document.getElementById('photo');
// img.setAttribute("src", myProfile.photo);
// img.setAttribute("alt", "photo");
document.getElementById('photo').setAttribute("src", myProfile.photo);
document.getElementById('photo').setAttribute("alt", myProfile.name);
// document.querySelector("#photo").innerHTML = myProfile.photo.setAttribute("src", myProfile.photo);
// document.querySelector("#photo").innerHTML = myProfile.name.setAttribute("alt", "photo");

/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement("li");
    li.textContent = food;
    document.querySelector("#favorite-foods").appendChild(li);
})

/* Hobbies List */
myProfile.hobbies.forEach(hobby => {
    let li = document.createElement("li");
    li.textContent = hobby;
    document.querySelector("#hobbies").appendChild(li);
})

/* Places Lived DataList */
myProfile.placesLived.forEach(place => {
    let dl = document.createElement("dl");
    let dt = document.createElement("dt");
    dt.textContent = place.place;
    // dt.innerHTML = `<strong> ${place.place} </strong>`;
    let dd = document.createElement("dd");
    dd.textContent = place.length;
    // document.querySelector("#places-lived").appendChild(dt);
    // document.querySelector("#places-lived").appendChild(dd);
    dl.appendChild(dt);
    dl.appendChild(dd);
    document.querySelector("#places-lived").appendChild(dl);
})
