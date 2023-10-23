const url = "https://ron-swanson-quotes.herokuapp.com/v2/quotes";
// let results = null;

const quotesElement = document.getElementById("text");
const chooseQuote = document.getElementById("chooseQuote");
// const button = document.querySelectorAll(".new-quote");
const button = document.querySelectorAll(".button");

const displayQuote = (quote) =>{
    quotesElement.textContent = quote;
    // quotesElement.innerHTML = "";
    // quotes.forEach((quote) => {
    //     const quoteArticle = document.createElement("article");
    //     const quoteTopic = document.createElement("h3");
    //     quoteTopic.textContent = quote.quoteTopic;
    //     quoteArticle.appendChild(quoteTopic);
    //     quoteElement.appendChild(quoteArticle);
}
async function getQuotes(url) {
    const topic = chooseQuote.value;
    const response = await fetch(`${url}${topic}`);
    if (response.ok) {
        const quoteArray = await response.json();
        const quote = quoteArray[0];
        displayQuote(quote);
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
            // displayQuotes(quotes.filter((quote) => quote.topic.toLowerCase().includes("breakfast")));
            displayQuotes(quotes.filter((quote) => quote.topic.includes("breakfast")));
            break;
        case "government":
            // displayQuotes(quotes.filter((quote) => quote.topic.toLowerCase().includes("government")));
            displayQuotes(quotes.filter((quote) => quote.topic.includes("government")));
            break;
        case "random":
            displayQuotes(quotes);
            break;
    }
}

// document.querySelector("#sortBy").addEventListener("change", () => { sortBy(results)});
button.addEventListener("click", getQuotes)
chooseQuote.addEventListener("change", getQuotes);

getQuotes();