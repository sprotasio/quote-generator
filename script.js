const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorName = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('refresh-quote');

// get quotes from api

// alows us to get the get the varible available in every function
let apiQuotes = [];

//Show new quote
function newQuote() {
  // Pick random quoto from apiQuotes array
  const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];

  // Check if author field is blank and repace it with quote unknown
  if (!quote.author) {
    authorName.textContent = 'Unknown';
  } else {
    authorName.textContent = quote.author;
  }

  //Check the quote lenght to determine the css style
  if (quote.text.length > 100) {
    quoteText.classList.add('long-quote');
  } else {
    quoteText.classList.remove('long-quote');
  }
  quoteText.textContent = quote.text;
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

//Tweet Quote
function tweetQuote() {
  const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorName.textContent}`;
  window.open(twitterUrl, '_blank');
}

//Event Listeners
newQuoteBtn.addEventListener('click', newQuote);
twitterBtn.addEventListener('click', tweetQuote);
//On Load
getQuotes();
