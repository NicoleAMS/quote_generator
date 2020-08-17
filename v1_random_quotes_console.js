const quoteParts = [
	// Beginning:
	["As the leaves tumble down,", "When summer falls into autumn,", "During the most colorful season of the year,"],
	// Middle:
	["find the perfect pumpkin", "put on warmer clothes", "pile on the fall fun"],
	// End: 
	["and watch the leaves fall.", "and listen to the hoot of an owl.", "and prepare for winter."]
];

function generatequote(quoteParts) {
  let generatedQuote = [];

	// loops through the quoteParts
	for (let i = 0; i < quoteParts.length; i++) {
		// picks a random string from each of the parts and pushes it to the generatedQuote array
		let randomIndex = Math.floor(Math.random() * quoteParts[i].length);
		generatedQuote.push(quoteParts[i][randomIndex]);
	}
	// makes a string of the generated quote array
	generatedQuote = generatedQuote.join(" ");
  return generatedQuote;
}

const quotes = generatequote(quoteParts);
console.log(quotes);
