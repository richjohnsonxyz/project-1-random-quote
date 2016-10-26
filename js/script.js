// this script displays a random quote after a user clicks a button
var quotes = [
	{
		quote: "You're only given a little spark of madness, you mustn't lose it", 
		source: "Robin Williams",
		citation: "",
		year: ""
	},
	{
		quote: "Because no battle is ever won.  They are not even fought.  The field only reveals to man his own folly and despair, and victory is an illusion of philosophers and fools. Be different!", 
		source: "Kim Peek",
		citation: "",
		year: ""
	},
	{
		quote: "Life is too short for long-term grudges",
		source: "Elon Musk",
		citation: "",
		year: ""
	},
	{
		quote: "We all have a dinosaur deep within us just trying to get out", 
		source: "Colin Mochrie",
		citation: "",
		year: ""
	},
	{
		quote: "There is no such thing as an average person.  They really are guidelines for people to grapple with the unknown, and we can always surprise expectations", 
		source: "Daniel Tammet",
		citation: "Boy Genius",
		year: "2003"
	},
	{
		quote: "No one is a natural - you have to work at being a natural", 
		source: "Greg Proops",
		citation: "",
		year: ""
	},
	{
		quote: "No matter what people tell you, words and ideas can change the world", 
		source: "Robin Williams",
		citation: "",
		year: ""
	},
	{
		quote: "When something is important enough, you do it even if the odds are not in your favor", 
		source: "Elon Musk",
		citation: "",
		year: ""
	}
];

//global variables
var random;
var newQuote;
var newSource;
var newCitation;
var newYear;
var displayQuote;

// this function picks a random object in the array and returns its index
function getRandomQuote () {
	random = (Math.floor(Math.random() * quotes.length));
	return random; 
}

// this function produces a new background color
 function randomBackground() { //function name
    var color = '#'; // hexadecimal starting symbol
    var letters = ['318198','F5a049','f56049','16aa43','17748f','e5821e','e5391e']; //colors
    color += letters[Math.floor(Math.random() * letters.length)]; 
    document.body.style.backgroundColor = color;
}

// this function takes the array index and prints out the new quote
function printQuote () {
	var index = getRandomQuote();
	newQuote = quotes[index].quote;
	newSource = quotes[index].source;
	newCitation = quotes[index].citation;
	newYear = quotes[index].year;
	displayQuote = '<p class="quote">' + newQuote + '</p>';
	displayQuote += '<p class="source">' + newSource;
		if (newCitation !== '') {
			displayQuote += '<span class="citation">' + newCitation + '</span>';
			displayQuote += '<span class="year">' + newYear + '</span></p>';
		};
	document.getElementById('quote-box').innerHTML = displayQuote;
	randomBackground();	
}
	
// User clicks the button and the new quote appears
document.getElementById('loadQuote').addEventListener("click", printQuote, false);








