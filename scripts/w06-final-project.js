const quotesElement = document.getElementById("quote");

const chooseQuote = document.getElementById("chooseQuote");
const button = document.getElementById("button");

const displayQuote = (quote) =>{
    document.getElementById("quote").textContent = quote;
}
async function getQuotes() {
    const response = await fetch("https://ron-swanson-quotes.herokuapp.com/v2/quotes");
    if (response.ok) {
        const quoteArray = await response.json();
        console.log(quoteArray);
        const quote = quoteArray[0];
        displayQuote(quote);
    };
}

document.querySelector("button").addEventListener("click", getQuotes);