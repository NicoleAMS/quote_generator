const quoteGenerator = {
  categories: {
    autumn: [
      [
        "As the leaves tumble down,",
        "When summer falls into autumn,",
        "During the most colorful season of the year,",
        "During the cool days of fall,",
        "When autumn is in the air,",
        "With the crunch of fallen leaves under your feet,",
        "When autumn days are here again,",
        "While autumn leaves are at the peak of their splendor,",
        "When golden leaves flutter gently to the ground,",
        "After a harvest of happiness,"
      ],
      [
        "find the perfect pumpkin",
        "put on warmer clothes",
        "pile on the fall fun",
        "get out your winter clothes",
        "enjoy the crisp breeze",
        "add another blanket to the bed",
        "bake a pumpkin pie",
        "take in the beauty of the season",
        "get prepared to hibernate",
        "shiver for the first time"
      ],
      [
        "and watch the leaves fall.",
        "and listen to the hoot of an owl.",
        "and prepare for winter.",
        "and jump in a pile of leaves.",
        "and carve pumpkins.",
        "and breathe in the cool, crisp air.",
        "and drink hot cocoa.",
        "and see your breath.",
        "and witness the autumnal equinox.",
        "and cook a stew.",
        "and carve a spooky Jack-o-Lantern."
      ]
    ],
    winter: [
      [
        "During the dark nights of winter,",
        "During the most wonderful time of the year,",
        "When the weather outside is frightful,",
        "When a smooth, white blanket covers the earth,",
        "In the depth of winter,",
        "During winter's icy gaze,"
      ],
      [
        "feel the crunch of snow beneath your feet",
        "make a winter wish on a snowflake",
        "let the cold winds blow",
        "don't slip on the ice",
        "feel the fresh snow on your cheeks",
        "grab your boots and hat",
        "go sledding down a hill",
        "catch a snowflake on your tongue"
      ],
      [
        "and go iceskating.",
        "and play in the snow.",
        "and celebrate the holidays.",
        "and watch the snow fall.",
        "and stay inside.",
        "and kick snow off your shoes.",
        "and read books.",
        "and be jolly.",
        "and build a snowman."
      ]
    ]
  },
  generateQuote(number, category) {
    const generatedQuotes = [];
    const parts = this.categories[category].map(category => {
      return category.slice(0);
		});

    for (let n = 0; n < number; n++) {
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

const form = document.getElementById("form");
const quoteDisplay = document.getElementById("quoteDisplay");
const resetDiv = document.getElementById("reset");

form.addEventListener("submit", function(e) {
  e.preventDefault();
	clearQuotes();
  const category = e.target[0].value;
  const number = e.target[1].value;
  changeDesign(category);
  const quotesArray = quoteGenerator.generateQuote(number, category);
  for (let i = 0; i < quotesArray.length; i++) {
    let listItem = document.createElement("li");
    listItem.innerHTML = quotesArray[i];
    quoteDisplay.appendChild(listItem);
	}
	addResetBtn();
});

function changeDesign(category) {
  const body = document.getElementsByTagName("body")[0];
	const button = document.getElementById("submitBtn");
  if (category === "winter") {
    body.style.backgroundImage =
      "url('https://clipground.com/images/winter-scene-clipart-13.jpg')";
    button.style.backgroundColor = "#40798E";
		button.style.borderColor = "#40798E";
  } else {
    body.style.backgroundImage =
      "url('https://upload.wikimedia.org/wikipedia/commons/3/35/Fall_Wallpaper.jpg')";
    button.style.backgroundColor = "#DE3301";
		button.style.borderColor = "#DE3301";
  }
}

function addResetBtn() {
	while (resetDiv.firstChild) {
    resetDiv.firstChild.remove();
  }
	let resetBtn = document.createElement("button");
	resetBtn.classList.add("btn", "btn-secondary",  "py-2",  "px-5");
	resetBtn.id = "resetBtn";
	resetBtn.innerHTML = "Reset";
	resetBtn.addEventListener("click", clearQuotes);
	resetDiv.appendChild(resetBtn);
}

function clearQuotes() {
	while (quoteDisplay.firstChild) {
    quoteDisplay.firstChild.remove();
	}
	while (resetDiv.firstChild) {
		resetDiv.firstChild.remove();
	}
};