const quotes = [
    { text: "quote", 
    author: "author" },
    // Add more quotes as needed...
];

// Function to display quotes
function displayQuotes() {
    const quotesDisplay = document.getElementById('quotesDisplay');
    quotesDisplay.innerHTML = ''; // Clear previous quotes
    let quotesFormatted = 'const quotes = [\n'; // Start formatting

    quotes.forEach(quote => {
        quotesFormatted += `    { text: "${quote.text}", author: "${quote.author}" },\n`;
    });
    
    quotesFormatted += '];'; // Close the array
    quotesDisplay.textContent = quotesFormatted; // Display the formatted string
}

// Event listener for form submission
document.getElementById('quoteForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const quoteText = document.getElementById('quoteText').value;
    const quoteAuthor = document.getElementById('quoteAuthor').value;

    // Add new quote to the array
    quotes.push({ text: quoteText, author: quoteAuthor });
    displayQuotes(); // Update displayed quotes

    // Clear form fields
    document.getElementById('quoteForm').reset();
});

// Initial display of quotes
displayQuotes();
