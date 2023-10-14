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

/* async displayTemples Function */
const displayTemples = (temples) => {
        templesElement.innerHTML = "";
        temples.forEach((temple) => {
            const templeArticle = document.createElement("article");
            const templeName = document.createElement("h3");
            templeName.textContent = temple.templeName; 
            const imageElement = document.createElement("img");
            imageElement.setAttribute("src", temple.imageUrl);
            imageElement.setAttribute("alt", temple.location);
            templeArticle.appendChild(templeName);
            templeArticle.appendChild(imageElement);
            templesElement.appendChild(templeArticle); 
    });
}


/* async getTemples Function using fetch()*/
// async function getTemples() => {}
const getTemples = async () => {
    const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");
    if (response.ok) {
        // changed to templesList - added 's' - in case mix up with array called templeList up top 
        const templesList = await response.json();
        templeList.length = 0;
        templeList.push(...templesList);
        displayTemples(templeList);
        console.log(templeList);
    }
}

/* reset Function */ 
// Declare a function expression named reset that clears all of the <article> elements from the templesElement.
function reset() {
    // document.getElementById("article").reset(templesElement);
    templesElement.innerHTML = "";
}

/* sortBy Function */
function sortBy(temples) {
    reset();
    const filter = document.getElementById("sortBy").value;
    switch (filter) {
        case "utah":
        //    displayTemples((temples) => temples.location === "Utah");
            displayTemples(temples.filter((temple) => temple.location.includes("Utah")));
            break;
        case "notutah":
            // displayTemples((temples) => temples.location !== "Utah");
            displayTemples(temples.filter((temple) => !temple.location.includes("Utah")));
            break;
        case "older":
            // displayTemples((temples) => temples.dedicated <= 1950);
            displayTemples(temples.filter((temple) => new Date(temple.dedicated) < new Date(1950, 0, 1)));
            break;
        case "all":
            displayTemples(temples);
            break;
    };
}

/* Event Listener */

document.querySelector("#sortBy").addEventListener("change", () => {sortBy(templeList) });

getTemples();