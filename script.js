// get quotes from api

// alows us to get the get the varible available in every function
let apiQuotes = [];

//Show new quote
function newQuote() {
  // Pick random quoto from apiQuotes array
  const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
  console.log(quote);
}

//async function can run at anytime, independently, and wont stop the browser from completing the loading
async function getQuotes() {
  const apiUrl = 'https://jacintodesign.github.io/quotes-api/data/quotes.json';
  try {
    //this constant will not be populated until it has some data fetched from our api. If we do not do async and await it would try to set the response value before it had a chance to fetch.
    const response = await fetch(apiUrl);
    //global varialble - get the json from API as a response and then turning that response as a json object and pass that to a global variable.
    apiQuotes = await response.json();
    newQuote();
  } catch (error) {
    //catch error here
  }
}

//On Load
getQuotes();
