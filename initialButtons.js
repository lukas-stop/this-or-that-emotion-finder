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
let currentEmotions = [];

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
    emotionSelectorDiv.innerHTML = "";
    foundEmotionDisplayDiv.innerHTML = "";

    //initializing
    let i = 1;
    initialEmotions.forEach((emotion) => {
        emotionSelectorDiv.innerHTML += '<button class="initialEmotionButton jsInitialEmotionButton" id="EmotionBtn' + i + '" value="' + emotion + '">' + emotion + '</button>'
        i++;
    })

    foundEmotionDisplayDiv.innerHTML += '<button class="goBackBtn" id="goBackBtn">go back</button>'
    const goBackBtn = document.getElementById("goBackBtn");
    goBackBtn.disabled = true;
}
makeDefaultButtons();

/* ---------------------------------------------------------- */
/* event listeners */
/* ---------------------------------------------------------- */

// https://stackoverflow.com/questions/51287162/how-to-have-multiple-buttons-of-same-id-value-and-when-click-on-any-button-the-p
// allows for unique ids for each button
const emotionButtons = document.getElementsByClassName('jsInitialEmotionButton');
for (var i = 0; i < emotionButtons.length; i++) {
    emotionButtons[i].addEventListener("click", function () {
        goLayerDeeper(this.value);
    })
}

// TO DO: fix so that it accurately fixes the emotions
goBackBtn.addEventListener("click", function () {
    makeDefaultButtons();
})

/* ---------------------------------------------------------- */
/* function calls */
/* ---------------------------------------------------------- */

/* 
    Given an initial emotion, display the corresponding sub-emotions to the user.
*/
function goLayerDeeper(selectedEmotion) {
    console.log("user selected: " + selectedEmotion)
    goBackBtn.disabled = false;

    //look into the object for the key of given emotion
    //yoink the keys in that array (or just the array values itself)
    subEmotions = dummyData.emotions.find(obj => obj[selectedEmotion]);

    //display the results
    //wait to reset cause sometimes the values get fucked??  idk why???
    emotionSelectorDiv.innerHTML = "";

    currentEmotions.push(Object.values(subEmotions)[0][0])
    currentEmotions.push(Object.values(subEmotions)[0][1])

    updateButtons();
    // Object.values(subEmotions)[0].forEach(subEmotion => {

    // });

    console.log(currentEmotions)
    //console.log(Object.values(subEmotions)[0])

    //TODO: fallback in case you can't go a layer deeper
}

/*
    Once the user has selected an emotion, update the buttons so that a new emotion is displayed and the unselected emotion is put away.
*/

function updateButtons() {
    let i = 1;
    currentEmotions.forEach(emotion => {
        emotionSelectorDiv.innerHTML += '<button class="initialEmotionButton jsInitialEmotionButton" id="EmotionBtn' + i + '" value="' + emotion + '">' + emotion + '</button>'
        i++;
    })
}