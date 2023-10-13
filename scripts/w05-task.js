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
    templeList.forEach((currentItem) => {
        const templeArticle = document.createElement("article");
        const templeNames = document.createElement(<h3>`${templeName}`</h3>).appendChild(article);
        const imageElement = document.createElement(<img >`${url}`</img>).appendChild(article);
        imageElement.setAttribute("src", imageUrl);
        imageElement.setAttribute("alt", location);
        templesElement.appendChild(article); 
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
    document.getElementById("article").reset();
}

/* sortBy Function */
function sortyBy(temples) {
    function reset() {
        return reset;
    }
    const filter = document.getElementById("#sortyBy").innerHTML;
    switch (filter) {
        case "utah":
           displayTemples(temples) = location === "Utah";
            break;
        case "nonutah":
            displayTemples(temples) = location -= "Utah";
            break;
        case "older":
            displayTemples(temples) = dedicated <= 1950;
            break;
        case "all":
            displayTemples(temples);
            break;
    }
}
// switch(expression) {
//     case x:
//       // code block
//       break;
//     case y:
//       // code block
//       break;
//     default:
//       // code block
//   }

getTemples();

/* Event Listener */
