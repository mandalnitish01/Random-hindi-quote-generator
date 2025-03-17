const type = document.getElementById('type')
const quote = document.getElementById('quote')

// Function to fetch a random quote from the API
async function fetchRandomQuote() {
    try {
        const response = await fetch('https://hindi-quotes.vercel.app/random');
        const data = await response.json();
        displayQuote(data.type, data.quote);
        console.log(data.type,data.quote)
        // displayQuote();
    } 
    catch (error) {

        console.error('Error fetching the quote:', error);
        document.getElementById('type').textContent = 'Failed to fetch the type.';
        document.getElementById('quote').textContent = 'Failed to fetch the quote.';
    }
}

// Function to display the fetched quote in the UI
function displayQuote(type,quote) {
    console.log(type)
    console.log(quote)
    // type.textContent = type;
    document.getElementById('type').textContent = `Type:- ${type}`;
   document.getElementById('quote').textContent = `Quote: ${quote}`;
}

const copy = document.getElementById("copy")
//for copy to clipboard 
copy.addEventListener('click', () => {
  const copytext = `${type.textContent}\n${quote.textContent}`; // Combine text with a new line
  navigator.clipboard.writeText(copytext)
    .then(() => alert("Copied to clipboard!"))
    .catch(err => alert("Failed to copy: Put content ", err));
});

