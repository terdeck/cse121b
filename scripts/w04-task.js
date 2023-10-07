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
    place: ["South Carolina", "Utah"],
    length: ["4 years", "Too Long"],
})
// I don't feel comfortable listing every place I've lived on the internet. Sorrynotsorry.

/* DOM Manipulation - Output */

/* Name */
document.querySelector("#name").textContent = myProfile.name;
/* Photo with attributes */
let img = document.createElement("img");
img.setAttribute("src", myProfile.photo);
img.setAttribute("alt", "photo");
document.querySelector("#photo").appendChild(img);
// document.querySelector("#photo").innerHTML = myProfile.photo.setAttribute("src", "images/td_headshot.jpg");
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
    let dd = document.createElement("dd");
    dd.textContent = place.length;
    // document.querySelector("#places-lived").appendChild(dt);
    // document.querySelector("#places-lived").appendChild(dd);
    dl.appendChild(dt);
    dl.appendChild(dd);
    document.querySelector("#places-lived").appendChild(dl);
})
