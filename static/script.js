// write console.log("Working!") to check if Javascript is working

// select the main container using the class .story-container
const storyContainer = document.querySelector(".story-container");

// grabs/select the scary button using the id
const scaryStoryBtn = document.getElementById("scary-btn");
const funnyStoryBtn = document.getElementById("funny-btn");
const adventureStoryBtn = document.getElementById("adventure-btn")
// make buttons for funny story and adventure story in the same way as written above


// this is where the result story will be stored
const resultParagraph = document.getElementById("result");

// a Javascript object
const storyObj = {
  "scary": {
    "story": "In the dark woods, a group of friends👥 stumbled upon an old, abandoned cabin. They enter the cabin and awaken something malevolent that had been dormant for centuries.",
    "borderColor": "#5f2bee"
  },
  "adventure": {
    "story":"Lost in the heart of a forest🌳 somewhere near Nashik, Poojitha stumbled upon an ancient temple. she braved deadly traps and encountered strange wildlife, all while deciphering cryptic clues left behind by a mysterious civilization.",
    "borderColor": "#57c9d1"
  },
  "funny":{
    "story":"During a camping trip🔥, Pooji decided to show off his culinary skills by cooking dinner over an open fire. However, her attempt caused her to burn the dinner as well as her eyebrows off.",
    "borderColor": "#327ef1"
  }
}

function displayStory(genre) {
    //   console.log("You clicked the button");
  if (storyObj[genre]) {
    resultParagraph.textContent = storyObj[genre].story;
    storyContainer.style.borderColor = storyObj[genre].borderColor;
  }
}

// Event listeners
scaryStoryBtn.addEventListener("click", () => displayStory("scary"));
funnyStoryBtn.addEventListener("click", () => displayStory("funny"));
adventureStoryBtn.addEventListener("click", () => displayStory("adventure"));

// add Event listeners for the funny and adventure buttons below!
