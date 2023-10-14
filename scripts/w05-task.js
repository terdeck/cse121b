/* W05: Programming Tasks */
// {
//     "templeName": "Cedar City Utah",
//     "location": "Cedar City, Utah, United States",
//     "dedicated": "2017, December, 10",
//     "area": 42657,
//     "imageUrl": "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/cedar-city-utah/400x225/Cedar-City-1978603.jpg"
//   },

/* Declare and initialize global variables */
const templesElement = document.getElementById("templeData");
const templeList = [];
const url = "https://byui-cse.github.io/cse121b-ww-course/resources/temples.json";

/* async displayTemples Function */
const displayTemples = (temples) => {
    // templeList.forEach((temple) => {
        temples.forEach((temple) => {
            const templeArticle = document.createElement("article");
            const templeName = document.createElement("h3");
            const imageElement = document.createElement("img");            imageElement.setAttribute("src", temple.imageUrl);
            imageElement.setAttribute("alt", temple.location);
            templeArticle.appendChild(templeName);
            templeArticle.appendChild(imageElement);
            templesElement.appendChild(templeArticle); 
    });
}


/* async getTemples Function using fetch()*/
// async function getTemples() => {}
const getTemples = async () => {
    const response = await fetch(url);
    if (response.ok) {
        const templeList = await response.json();
        displayTemples(templeList);
        console.log(templeList);
    }
}

/* reset Function */ 
// Declare a function expression named reset that clears all of the <article> elements from the templesElement.
function reset() {
    document.getElementById("article").reset(templesElement);
}

/* sortBy Function */
function sortyBy(temples) {
    function reset() {
        return reset;
    }
    const filter = document.getElementById("#sortyBy").innerHTML;
    switch (filter) {
        case "utah":
           displayTemples((temples) => temples.location === "Utah");
            break;
        case "nonutah":
            displayTemples((temples) => temples.location !== "Utah");
            break;
        case "older":
            displayTemples((temples) => temples.dedicated <= 1950);
            break;
        case "all":
            displayTemples(temples);
            break;
    }
    return reset
}

getTemples();

/* Event Listener */

document.querySelector("#sortBy").addEventListener("change", () => {sortyBy(templeList) });