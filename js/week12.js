// BUTTON document.querySelector('button');

// CLASS document.querySelector('.new-quote button');

// ID document.querySelector('#js-new-quote');

const quoteButton = document.querySelector('#js-new-quote'); //variable to button

const endpoint = 'https://api.whatdoestrumpthink.com/api/v1/quotes/random';{

}
// https://api.whatdoestrumpthink.com/api/v1/quotes/random
// https://catfact.ninja/fact

quoteButton.addEventListener ('click', getQuote); //looking for click on BUTTON

async function getQuote() {
  //what happens when we evoke this function
  console.log("quote button was clicked");
  //want to make sure this works before putting stuff in it, this makes something appear in inspector

  try {
    const response = await fetch(endpoint);
    if (!response.ok) {
      throw Error(response.statusText)
    }
    const json = await response.json();
    console.log(json);
    displayQuote(json.message);
  } catch (err) {
    console.log(err)
    alert('Failed');
  }

  function displayQuote(quote)  {
    const quoteText =document.querySelector('#js-quote-text');
    quoteText.textContent = quote;
  }


}