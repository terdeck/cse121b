const url = "https://ron-swanson-quotes.herokuapp.com/v2/quotes";
let results = null;

const texts = document.querySelectorAll(".text");
const body = document.getElementById("body");
const button = document.querySelectorAll(".new-quote");

const displayQuote = (quotes) =>{
    quotesElement.innerHTML = "";
    quotes.forEach((quote) => {
        const quoteArticle = document.createElement("article");
        const quoteTopic = document.createElement("h3");
        quoteTopic.textContent = quote.quoteTopic;
        quoteArticle.appendChild(quoteTopic);
        quoteElement.appendChild(quoteArticle);
    });
}
async function getQuotes(url) {
    const response = await fetch(url);
    if (response.ok) {
        await response.json();
        displayQuote;
    }
}
function reset() {
    quotesElement.innerHTML = "";
}
function sortBy(quotes) {
    reset();
    const filter = document.getElementById("sortBy").value;
    switch (filter) {
        // breakfast government random
        case "breakfast":
            displayQuotes(quotes.filter((quote) => quote.topic.toLowerCase().includes("breakfast")));
            break;
        case "government":
            displayQuotes(quotes.filter((quote) => quote.topic.toLowerCase().includes("government")));
            break;
        case "random":
            displayQuotes(quotes);
            break;
    }
}

document.querySelector("#sortBy").addEventListener("change", () => { sortBy(results)});