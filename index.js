// "use strict";
// /* importing json */
// // https://stackoverflow.com/questions/70349865/how-to-store-fetch-response-in-javascript-variable
// // https://stackoverflow.com/questions/50417982/js-fetch-api-access-return-value

// //DONT USE IMPORT!! THAT SHIT IS BROKEN IN VANILLA JS FOR SOME REASON :(
// let data = await fetch("./emotions.json")
//     .then(response => response.json())
//     .then(data => { return data; })
//     .catch((error) => console.log(error));

// console.log(data)

/* TO DO: move this to its own file (hell) */

// const emotionsData = {
//     "emotions": {
//         "Happy": {
//             "Playful": [
//                 "Aroused",
//                 "Cheeky"
//             ],
//             "Content": [
//                 "Free",
//                 "Joyful"
//             ],
//             "Interested": [
//                 "Curious",
//                 "Inquisitive"
//             ],
//             "Proud": [
//                 "Successful",
//                 "Confident"
//             ],
//             "Accepted": [
//                 "Respected",
//                 "Valued"
//             ],
//             "Powerful": [
//                 "Courageous",
//                 "Creative"
//             ],
//             "Peaceful": [
//                 "Loving",
//                 "Thankful"
//             ],
//             "Trusting": [
//                 "Sensitive",
//                 "Intimate"
//             ],
//             "Optimistic": [
//                 "Hopeful",
//                 "Inspired"
//             ]
//         },
//         "Surprised": {
//             "Startled": [
//                 "Shocked",
//                 "Dismayed"
//             ],
//             "Confused": [
//                 "Disillusioned",
//                 "Perplexed"
//             ],
//             "Amazed": [
//                 "Astonished",
//                 "Awe"
//             ],
//             "Excited": [
//                 "Eager",
//                 "Energetic"
//             ]
//         },
//         "Bad": {
//             "Bored": [
//                 "Indifferent",
//                 "Apathetic"
//             ],
//             "Busy": [
//                 "Presured",
//                 "Rushed"
//             ],
//             "Stressed": [
//                 "Overwhelmed",
//                 "Out of Control"
//             ],
//             "Tired": [
//                 "Sleepy",
//                 "Unfocused"
//             ]
//         },
//         "Fearful": {
//             "Scared": [
//                 "Helpless",
//                 "Frightened"
//             ],
//             "Anxious": [
//                 "Overwhelmed",
//                 "Worried"
//             ],
//             "Insecure": [
//                 "Inadequate",
//                 "Inferior"
//             ],
//             "Weak": [
//                 "Worthless",
//                 "Insignificant"
//             ],
//             "Rejected": [
//                 "Exclused",
//                 "Persecuted"
//             ],
//             "Threatened": [
//                 "Nervous",
//                 "Exposed"
//             ]
//         },
//         "Angry": {
//             "Let Down": [
//                 "Betrayed",
//                 "Resentful"
//             ],
//             "Humiliated": [
//                 "Disrespected",
//                 "Ridiculed"
//             ],
//             "Bitter": [
//                 "Indignant",
//                 "Violated"
//             ],
//             "Mad": [
//                 "Furious",
//                 "Jealous"
//             ],
//             "Aggressive": [
//                 "Provoked",
//                 "Hostile"
//             ],
//             "Frustrated": [
//                 "Infuriated",
//                 "Annoyed"
//             ],
//             "Distant": [
//                 "Withdrawn",
//                 "Numb"
//             ],
//             "Critical": [
//                 "Sceptical",
//                 "Dismissive"
//             ]
//         },
//         "Disgusted": {
//             "Disapproving": [
//                 "Judgmental",
//                 "Embarrassed"
//             ],
//             "Disappointed": [
//                 "Appalled",
//                 "Revolted"
//             ],
//             "Awful": [
//                 "Nauseated",
//                 "Detestable"
//             ],
//             "Repelled": [
//                 "Horrified",
//                 "Hesitant"
//             ]
//         },
//         "Sad": {
//             "Lonely": [
//                 "Isolated",
//                 "Abandoned"
//             ],
//             "Vulnerable": [
//                 "Victimised",
//                 "Fragile"
//             ],
//             "Despair": [
//                 "Grief",
//                 "Powerless"
//             ],
//             "Guilty": [
//                 "Ashamed",
//                 "Remorseful"
//             ],
//             "Depressed": [
//                 "Empty",
//                 "Inferior"
//             ],
//             "Hurt": [
//                 "Embarassed",
//                 "Disappointed"
//             ]
//         }
//     }
// };

const dummyData = {
    "emotions": [
        "Happy", "Surprised", "Bad", "Fearful", "Angry", "Disgusted", "Sad"
    ]
}

/* testing with accessing data */

// for (var emotion in dummyData.emotions) {
//     //one layer deep
//     console.log(dummyData.emotions[emotion]);
// }

/* ---------------------------------------------------------- */
/* initializing buttons & variables*/
/* ---------------------------------------------------------- */
let unusedEmotions = dummyData.emotions;
let storedEmotion = '';
let usedEmotions = []

let firstEmotion = document.getElementById('firstEmotionBtn');
firstEmotion.textContent = unusedEmotions[0];

let secondEmotion = document.getElementById('secondEmotionBtn');
secondEmotion.textContent = unusedEmotions[1];

let placeHolder = document.getElementById('placeholderSelection');

//anything that has already been displayed to the user goes into usedEmotions
usedEmotions = unusedEmotions.splice(0, 2);
console.log("Used emotions: " + usedEmotions)

/* ---------------------------------------------------------- */
/* event handlers & function declaration */
/* ---------------------------------------------------------- */

// both buttons will do the same thing, the second button's text gets placed in the first button upon selection.
firstEmotion.addEventListener('click', function () {
    //alert(this.textContent)
    selectEmotion(this) //TO DO: pass both emotions through ??
})

secondEmotion.addEventListener('click', function () {
    //this needs some kind of flag to show it's the second option
    //alert(this.textContent)
    selectEmotion(this)
})

/*
    record the emotion that was selected and display the next set of relevant emotions.
*/
function selectEmotion(emotion) {
    // store the current emotion + replace first button with it
    storedEmotion = emotion.textContent;
    //console.log("User selected: " + storedEmotion);
    firstEmotion.innerHTML = storedEmotion;
    placeHolder.innerHTML = storedEmotion;

    //update used emotions list to no longer include the selected emotion.  if emotion list empty then display "you found the emotion you be feelin" or somethin like that
    usedEmotions = unusedEmotions.shift();
    secondEmotion.textContent = unusedEmotions[0];
}