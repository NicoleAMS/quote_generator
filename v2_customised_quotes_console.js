const quoteGenerator = {
  categories: {
    autumn: [
      ["As the leaves tumble down,", "When summer falls into autumn,", "During the most colorful season of the year,", "During the cool days of fall,", "When autumn is in the air,"],
      ["find the perfect pumpkin", "put on warmer clothes", "pile on the fall fun", "get out your winter clothes", "enjoy the crisp breeze"],
      ["and watch the leaves fall.", "and listen to the hoot of an owl.", "and prepare for winter.", "and jump in a pile of leaves.", "and carve pumpkins."],
		],
		winter: [
      ["During the dark nights of winter,", "During the most wonderful time of the year,", "When the weather outside is frightful,", "When a smooth, white blanket covers the earth,", "In the depth of winter,"],
      ["feel the crunch of snow beneath your feet", "make a winter wish on a snowflake", "let the cold winds blow", "don't slip on the ice", "feel the fresh snow on your cheeks"],
      ["and go iceskating.", "and play in the snow.", "and celebrate the holidays.", "and watch the snow fall.", "and stay inside."]
		]
  },

  generateQuote(number, category) {
    const generatedQuotes = [];
    //   const parts = this.categories[category].slice(0); <=== shallow copy, not for multidimensional array
    const parts = this.categories[category].map(part => {
      return part.slice(0);
		});

    for (let n = 0; n < number; n++) {
			// makes the quote array multidimensional based on the number of quotes that should be generated so each second second layer array can store a quote
      generatedQuotes[n] = [];
      for (let i = 0; i < parts.length; i++) {
        let randomIndex = Math.floor(Math.random() * parts[i].length);
				generatedQuotes[n].push(parts[i][randomIndex]);
				parts[i].splice(randomIndex, 1);
      }
      generatedQuotes[n] = generatedQuotes[n].join(" ");
    }
    return generatedQuotes;
  }
};

function generateQuotes() {
  let userNumber = parseInt(prompt("How many quotes? Please choose a number between 1 and 5."));
  while (userNumber < 0 || userNumber > 5 || isNaN(userNumber)) {
    userNumber = parseInt(prompt("Number is out of range. Please choose a number between 1 and 5."));
  }
  
  let userCategory = prompt("What kind of quotes? Please choose 'autumn' or 'winter'.");
	while (userCategory.toLowerCase() !== 'autumn' && userCategory.toLowerCase() !== 'winter') {
		userCategory = prompt("Category not recognised. Please choose 'autumn' or 'winter'.");
  }

	const userQuotes = quoteGenerator.generateQuote(userNumber, userCategory.toLowerCase());
	for (i = 0; i < userQuotes.length; i++) {
		console.log(userQuotes[i]);
	}

  let again = prompt("Do you want to generate more quotes? Y/N");
  while (again === null || again.toUpperCase() !== "Y" && again.toUpperCase() !== "N") {
    again = prompt("Please enter Y/N.");
  }
	if (again.toUpperCase() === "Y") {
    console.clear();
		generateQuotes();
	} 
};

generateQuotes();
