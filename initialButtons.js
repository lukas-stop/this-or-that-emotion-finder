const dummyData = {
    "emotions": [
        { "Happy": ["Playful", "Content", "Interested", "Proud", "Accepted", "Powerful", "Peaceful", "Trusting", "Optimistic"] },
        { "Surprised": ["Startled", "Confused", "Amazed", "Excited"] },
        { "Bad": ["Bored", "Busy", "Stressed", "Tired"] },
        { "Fearful": ["Scared", "Anxious", "Insecure", "Weak", "Rejected", "Threatened"] },
        { "Angry": ["Let Down", "Humiliated", "Bitter", "Mad", "Aggressive", "Frustrated", "Distant", "Critical"] },
        { "Disgusted": ["Disapproving", "Disappointed", "Awful", "Repelled"] },
        { "Sad": ["Lonely", "Vulnerable", "Despair", "Guilty", "Depressed", "Hurt"] }
    ]
}

/* ---------------------------------------------------------- */
/* initializing buttons & variables*/
/* ---------------------------------------------------------- */
let emotionSelectorDiv = document.getElementById("emotionSelector");
let foundEmotionDisplayDiv = document.getElementById("foundEmotionDisplay");
let initialEmotions = [];
let subEmotions = [];
let displayedEmotions = [];
let currentEmotionIndex = 0;

dummyData.emotions.forEach((obj) => {
    initialEmotions.push(Object.keys(obj)[0]);
});

// console.log(dummyData) //debug
// console.log(initialEmotions); //debug

/*
    make the 7 base emotion buttons & disable go back btn
    this also serves as a full reset for the div
*/
function makeDefaultButtons() {
    //reset everything
    subEmotions = [];
    displayedEmotions = [];
    currentEmotionIndex = 0;
    emotionSelectorDiv.innerHTML = "";
    foundEmotionDisplayDiv.innerHTML = "";

    //initialize
    let i = 1;
    initialEmotions.forEach((emotion) => {
        emotionSelectorDiv.innerHTML += '<button class="initialEmotionButton jsInitialEmotionButton" value="' + emotion + '">' + emotion + '</button>'
        i++;
    })

    foundEmotionDisplayDiv.innerHTML += '<button class="goBackBtn" id="goBackBtn">go back</button>'
    const goBackBtn = document.getElementById("goBackBtn");
    goBackBtn.disabled = true;
    makeEventListeners();
}
makeDefaultButtons();

/* ---------------------------------------------------------- */
/* event listeners */
/* ---------------------------------------------------------- */

function makeEventListeners() {
    let emotionButtons = document.getElementsByClassName('jsInitialEmotionButton');
    for (var i = 0; i < emotionButtons.length; i++) {
        emotionButtons[i].addEventListener("click", function () {
            console.log("user selected: " + this.value)
            goBackBtn.disabled = false;
            updateButtons(this.value);
        })
    }
}


// TO DO: fix so that it accurately fixes the emotions
goBackBtn.addEventListener("click", function () {
    makeDefaultButtons();
})

/* ---------------------------------------------------------- */
/* function calls */
/* ---------------------------------------------------------- */

/* 
    Given an initial emotion, find the corresponding sub-emotions
*/
function goLayerDeeper(selectedEmotion) {
    //look into the object for the key of given emotion & store the relevant sub-emotions
    subEmotions = dummyData.emotions.find(obj => obj[selectedEmotion]);
    subEmotions = Object.values(subEmotions)[0]; //there's likely a cleaner way of doing this 
    //console.log("subemotions: " + Object.values(subEmotions)[0]); //debug 
    //display the sub-emotions to the user

    console.log("Sub emotions for " + selectedEmotion + " : " + subEmotions)
    updateButtons(selectedEmotion); //TODO: uncomment after the values get stored properly >:/

    //TODO: fallback in case you can't go a layer deeper
    // let i = 1;
    // Object.values(subEmotions)[0].forEach(emotion => {
    //     emotionSelectorDiv.innerHTML += '<button class="initialEmotionButton jsInitialEmotionButton" id="EmotionBtn' + i + '" value="' + emotion + '">' + emotion + '</button>';
    //     i++;
    // });
    //createButtonListeners();


}

/*
    Once the user has selected an emotion, update the buttons so that a new emotion is displayed and the unselected emotion is put away.
*/

function updateButtons(selectedEmotion) {
    //check if there's any sub-emotions currently
    if (!subEmotions || !subEmotions.length) {
        console.log("there's no sub-emotions!!  fetching...")
        goLayerDeeper(selectedEmotion);
    }
    //check if there are still emotions left to display to the user
    if (currentEmotionIndex > (subEmotions.length + 1 || displayedEmotions[currentEmotionIndex] == undefined)) {
        //if there isn't any display the result
        displayFinalEmotion(selectedEmotion);
        return;
    }

    //store the current emotion + the next emotion to be displayed in a tuple
    displayedEmotions.push([selectedEmotion, subEmotions[currentEmotionIndex]]);
    //console.log("Current emotions: " + displayedEmotions[currentEmotionIndex]); //debug

    //update emotions display
    emotionSelectorDiv.innerHTML = ""; //wait to reset cause sometimes the values get fucked??  idk why???
    let i = 1;
    displayedEmotions[currentEmotionIndex].forEach(emotion => {
        emotionSelectorDiv.innerHTML += '<button class="initialEmotionButton jsInitialEmotionButton" value="' + emotion + '">' + emotion + '</button>';
        i++;
    });

    makeEventListeners();
    currentEmotionIndex++;
}

/*
    display the final emotion to the user
*/

function displayFinalEmotion(selectedEmotion) {
    emotionSelectorDiv.innerHTML = ""
    foundEmotionDisplayDiv.innerHTML = '<p>Your emotion is ' + selectedEmotion + '!</p>' + foundEmotionDisplayDiv.innerHTML;
    goBackBtn.disabled = false;
}