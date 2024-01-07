//TO DO: import this as a json somehow (so you can convert to other emotion wheels in the future)
const geoffreyEmotionWheel = {
    "emotions": [
        {
            "Happy": [{
                "Playful": [
                    "Aroused",
                    "Cheeky"
                ]
            },
            {
                "Content": [
                    "Free",
                    "Joyful"
                ]
            },
            {
                "Interested": [
                    "Curious",
                    "Inquisitive"
                ]
            },
            {
                "Proud": [
                    "Successful",
                    "Confident"
                ]
            },
            {
                "Accepted": [
                    "Respected",
                    "Valued"
                ]
            },
            {
                "Powerful": [
                    "Courageous",
                    "Creative"
                ]
            },
            {
                "Peaceful": [
                    "Loving",
                    "Thankful"
                ]
            },
            {
                "Trusting": [
                    "Sensitive",
                    "Intimate"
                ]
            },
            {
                "Optimistic": [
                    "Hopeful",
                    "Inspired"
                ]
            }
            ]
        }, {
            "Surprised": [
                {
                    "Startled": [
                        "Shocked",
                        "Dismayed"
                    ],
                },
                {
                    "Confused": [
                        "Disillusioned",
                        "Perplexed"
                    ],
                },
                {
                    "Amazed": [
                        "Astonished",
                        "Awe"
                    ],
                },
                {
                    "Excited": [
                        "Eager",
                        "Energetic"
                    ],
                }
            ]
        },
        {
            "Bad": [
                {
                    "Bored": [
                        "Indifferent",
                        "Apathetic"
                    ],
                },
                {
                    "Busy": [
                        "Pressured",
                        "Rushed"
                    ],
                },
                {
                    "Stressed": [
                        "Overwhelmed",
                        "Out of Control"
                    ],
                },
                {
                    "Tired": [
                        "Sleepy",
                        "Unfocused"
                    ]
                }
            ]
        },
        {
            "Fearful": [
                {
                    "Scared": [
                        "Helpless",
                        "Frightened"
                    ],
                },
                {
                    "Anxious": [
                        "Overwhelmed",
                        "Worried"
                    ],
                },
                {
                    "Insecure": [
                        "Inadequate",
                        "Inferior"
                    ],
                },
                {
                    "Weak": [
                        "Worthless",
                        "Insignificant"
                    ],
                },
                {
                    "Rejected": [
                        "Excluded",
                        "Persecuted"
                    ],
                },
                {
                    "Threatened": [
                        "Nervous",
                        "Exposed"
                    ]
                }
            ]
        },
        {
            "Angry": [
                {
                    "Let Down": [
                        "Betrayed",
                        "Resentful"
                    ]
                },
                {
                    "Humiliated": [
                        "Disrespected",
                        "Ridiculed"
                    ]
                },
                {
                    "Bitter": [
                        "Indignant",
                        "Violated"
                    ]
                },
                {
                    "Mad": [
                        "Furious",
                        "Jealous"
                    ]
                },
                {
                    "Aggressive": [
                        "Provoked",
                        "Hostile"
                    ]
                },
                {
                    "Frustrated": [
                        "Infuriated",
                        "Annoyed"
                    ]
                },
                {
                    "Distant": [
                        "Withdrawn",
                        "Numb"
                    ]
                },
                {
                    "Critical": [
                        "Skeptical",
                        "Dismissive"
                    ]
                }
            ]
        },
        {
            "Disgusted": [
                {
                    "Disapproving": [
                        "Judgmental",
                        "Embarrassed"
                    ]
                },
                {
                    "Disappointed": [
                        "Appalled",
                        "Revolted"
                    ]
                },
                {
                    "Awful": [
                        "Nauseated",
                        "Detestable"
                    ]
                },
                {
                    "Repelled": [
                        "Horrified",
                        "Hesitant"
                    ]
                }
            ]
        },
        {
            "Sad": [
                {
                    "Lonely": [
                        "Isolated",
                        "Abandoned"
                    ]
                },
                {
                    "Vulnerable": [
                        "Victimized",
                        "Fragile"
                    ]
                },
                {
                    "Despair": [
                        "Grief",
                        "Powerless"
                    ]
                },
                {
                    "Guilty": [
                        "Ashamed",
                        "Remorseful"
                    ]
                },
                {
                    "Depressed": [
                        "Empty",
                        "Inferior"
                    ]
                },
                {
                    "Hurt": [
                        "Embarrassed",
                        "Disappointed"
                    ]
                }
            ]
        }
    ]
}

/* ---------------------------------------------------------- */
/* initializing buttons & variables*/
/* ---------------------------------------------------------- */
let emotionSelectorDiv = document.getElementById("emotionSelector");
let foundEmotionDisplayDiv = document.getElementById("foundEmotionDisplay");
let initialEmotions = [];
let initialSubEmotions = [];
let subEmotions = [];
let displayedEmotions = [];
let currentEmotionIndex = 0;

geoffreyEmotionWheel.emotions.forEach((obj) => {
    initialEmotions.push(Object.keys(obj)[0]);
});

// console.log(geoffreyEmotionWheel) //debug
// console.log(initialEmotions); //debug

/* ---------------------------------------------------------- */
// GO BACK BUTTON SETUP
/* ---------------------------------------------------------- */

foundEmotionDisplayDiv.innerHTML = "";
foundEmotionDisplayDiv.innerHTML += '<button class="goBackBtn" id="goBackBtn">go back</button><button class="goBackBtn" id="resetBtn">reset</button>'
const goBackBtn = document.getElementById("goBackBtn");
const resetBtn = document.getElementById("resetBtn");

goBackBtn.addEventListener("click", function () {
    waitStopGoBackPls();
})
resetBtn.addEventListener("click", function () {
    makeDefaultButtons();
})

/* ---------------------------------------------------------- */
// EMOTION BUTTON SETUP
/* ---------------------------------------------------------- */

/*
    make the 7 base emotion buttons & disable go back btn
    this also serves as a full reset for the div
*/
function makeDefaultButtons() {
    //reset everything
    initialSubEmotions = [];
    subEmotions = [];
    displayedEmotions = [];
    currentEmotionIndex = 0;
    emotionSelectorDiv.innerHTML = "";
    goBackBtn.disabled = true;
    resetBtn.disabled = true;

    //initialize
    let i = 1;
    initialEmotions.forEach((emotion) => {
        emotionSelectorDiv.innerHTML += '<button class="initialEmotionButton jsInitialEmotionButton" value="' + emotion + '">' + emotion + '</button>'
        i++;
    })
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
            //console.log("user selected: " + this.value)
            goBackBtn.disabled = false;
            resetBtn.disabled = false;

            //check if there's any sub-emotions currently
            if (!subEmotions || !subEmotions.length) {
                console.log("there's no sub-emotions!!  fetching...")
                goLayerDeeper(this.value);
            }
            else {
                updateButtons(this.value);
            }
        })
    }
}

/* ---------------------------------------------------------- */
/* function calls */
/* ---------------------------------------------------------- */

/* 
    Display the previous two emotions to the user, or if there are none display the default emotion buttons
*/
function waitStopGoBackPls() {
    //check to see if you're able to go back at all first
    if (currentEmotionIndex > 1) {
        // console.log("currently displaying: " + displayedEmotions[currentEmotionIndex - 1]);
        // console.log("previous emotions: " + displayedEmotions[currentEmotionIndex - 2]);

        //remove the last item stored
        //console.log("have displayed: " + displayedEmotions);
        displayedEmotions = displayedEmotions.slice(0, -1)
        //console.log("new displayed: " + displayedEmotions);
        //decrease the current index to get the previous emotions
        currentEmotionIndex--;

        //FIX(?): update the buttons accordingly
        emotionSelectorDiv.innerHTML = "";
        let i = 1;
        displayedEmotions[currentEmotionIndex - 1].forEach(emotion => {
            emotionSelectorDiv.innerHTML += '<button class="initialEmotionButton jsInitialEmotionButton" value="' + emotion + '">' + emotion + '</button>';
            i++;
        });
        makeEventListeners();
    }
    else {
        //if there's nothing to go back to just do defaults
        goBackBtn.disabled = true;
        resetBtn.disabled = true;
        makeDefaultButtons();
    }
}

/* 
    Given an initial emotion, find the corresponding sub-emotions
*/
function goLayerDeeper(selectedEmotion) {
    //look into the object for the key of given emotion & store the relevant sub-emotions
    initialSubEmotions = geoffreyEmotionWheel.emotions.find(obj => obj[selectedEmotion]);
    //TODO: find a clearer fix for this because good LORD what the fuck is this
    //go through the relevant emotion object, get the keys of the next set of sub emotions to sort through
    Object.values(initialSubEmotions)[0].forEach(function (item) {
        Object.keys(item).forEach((j) => {
            //console.log(j); //debug
            subEmotions.push(j);
        });
    })
    //display the sub-emotions to the user
    console.log("Sub emotions for " + selectedEmotion + " : " + subEmotions) //debug
    updateButtons(selectedEmotion);

    //TODO: fallback in case you can't go a layer deeper
}

/*
    Once the user has selected an emotion, update the buttons so that a new emotion is displayed and the unselected emotion is put away.
*/

function updateButtons(selectedEmotion) {

    //check if there are still emotions left to display to the user
    if (currentEmotionIndex >= (subEmotions.length)) {
        //if there isn't any display the result
        displayFinalEmotion(selectedEmotion);
        return;
    }
    else {
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
}

/*
    display the final emotion to the user
*/

function displayFinalEmotion(selectedEmotion) {
    emotionSelectorDiv.innerHTML = ""
    foundEmotionDisplayDiv.innerHTML = "";
    foundEmotionDisplayDiv.innerHTML += '<p class="finalEmotion">Your emotion is ' + selectedEmotion + '!</p><button class="goBackBtn" id="resetBtn">reset</button>';

    const resetBtn = document.getElementById("resetBtn");

    resetBtn.addEventListener("click", function () {
        location.reload();
        //TODO: make a cleaner way of resetting, current method keeps breaking things :(        
        //makeDefaultButtons();
    })
}