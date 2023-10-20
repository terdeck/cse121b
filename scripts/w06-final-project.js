{/* <select id="chooseQuote" title="Choose a quote topic:">
<option value="" disabled selected>Quote Topics</option>
<option value="breakfast">Breakfast</option>
<option value="government">Government</option>
<option value="random">Random</option> */}

const url = "https://ron-swanson-quotes.herokuapp.com/v2/quotes";
// const quoteElement = document.getElementById("quotes");
let results = null;

async function getQuotes(url) {
    const response = await fetch(url);
    if (response.ok) {
        const data = await response.json();
        doStuff(data);
    }
}