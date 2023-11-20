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

// const dummyData = {
//     "emotions": [
//         { "Happy": [] },
//         { "Surprised": [] },
//         { "Bad": [] },
//         { "Fearful": [] },
//         { "Angry": [] },
//         { "Disgusted": [] },
//         { "Sad": [] }
//     ]
// }

// /* ---------------------------------------------------------- */
// /* initializing buttons & variables*/
// /* ---------------------------------------------------------- */
// let unusedEmotions = dummyData.emotions;
// let storedEmotion = '';
// let currentEmotions = [];
// let previousEmotions = [];
// let notTheVibeEmotions = [];

// //setting up divs
// let emotionSelectorDiv = document.getElementById("emotionSelector");
// let foundEmotionDisplayDiv = document.getElementById("foundEmotionDisplay");
// foundEmotionDisplayDiv.innerHTML = ""; //hides from view

// //button setup - Happy & surprised are default emotions
// let firstEmotion = document.getElementById('firstEmotionBtn');
// console.log(objArray.map(dummyData.emotions => dummyData.emotions.foo))
// // currentEmotions.push(dummyData.emotions[0])
// // firstEmotion.innerHTML = dummyData.emotions[0].values(unusedEmotions);


// let secondEmotion = document.getElementById('secondEmotionBtn');
// secondEmotion.textContent = dummyData.emotion["Surprised"];

// currentEmotions.push(unusedEmotions[0])
// currentEmotions.push(unusedEmotions[1])
// console.log("Current emotions: " + currentEmotions) //debug
// console.log("Previous emotions: " + previousEmotions)

// //anything that has already been displayed to the user goes into usedEmotions
// unusedEmotions.splice(0, 2);
// // console.log("Unused emotions: " + unusedEmotions)

// const goBackBtn = document.getElementById("goBackBtn");
// goBackBtn.disabled = true;

// /* ---------------------------------------------------------- */
// /* event handlers & function declaration */
// /* ---------------------------------------------------------- */

// // both buttons will do the same thing, the second button's text gets placed in the first button upon selection.
// firstEmotion.addEventListener('click', function () {
//     selectEmotion(this)
// })

// secondEmotion.addEventListener('click', function () {
//     selectEmotion(this)
// })
// goBackBtn.addEventListener('click', function () {
//     pleaseGodGoBack();
// })

// /*
//     return to the previous two emotions that were displayed.  If back at initial emotions, disable the button again.
// */

// function pleaseGodGoBack() {
//     const defaultEmotions = ["Happy", "Surprised"] //these are the initial ones you always start with
//     if (currentEmotions === defaultEmotions) {
//         goBackBtn.disabled = true;
//     }
//     //figure out what emotion what removed and add it back into the right place
//     //if the first emotion was removed, add it back to the first spot
//     console.log("before updating")
//     console.log("previous: " + previousEmotions);
//     console.log("current: " + currentEmotions);
//     console.log("unused: " + unusedEmotions)

//     // currentEmotions = previousEmotions;
//     // firstEmotion.innerHTML = previousEmotions[0];
//     // secondEmotion.innerHTML = previousEmotions[1];

//     console.log("after updating")
// }


// /* swaps out the display and removes the buttons so that the user only sees the final emotion */
// function displayFoundEmotion(emotion) {
//     emotionSelectorDiv.innerHTML = "";
//     emotionSelectorDiv.innerHTML = '<p class="finalEmotion">Your emotion is <span style="font-weight: bold;" id="selectedEmotion">' + emotion + '</span>!</p>';
// }

// /*
//     record the emotion that was selected and display the next set of relevant emotions.
// */
// function selectEmotion(emotion) {
//     goBackBtn.disabled = false;

//     console.log("--------------------------")
//     //store the currently displayed emotions
//     previousEmotions = []
//     previousEmotions.push(firstEmotion.innerHTML)
//     previousEmotions.push(secondEmotion.innerHTML)
//     console.log('previous emotions: ' + previousEmotions)

//     //update the emotions so that the selected emotion is kept but the non-selected emotion is removed

//     let tisTheFeel = emotion
//     currentEmotions.splice(currentEmotions.indexOf(emotion), 1)
//     let notThevibe = currentEmotions

//     //store the remove emotion's index in the original array AND its value (in case we need to go back and put it in!)

//     let notTheVibeIndex = dummyData.emotions.findIndex(item => item === notThevibe)
//     notTheVibeEmotions.push([notTheVibeIndex, notThevibe])
//     console.log("sorted in not the vibes: " + notTheVibeEmotions)



//     // // // store the current emotion + replace first button with it
//     // // previousEmotions.push(firstEmotion.innerHTML)
//     // // previousEmotions.push(secondEmotion.innerHTML)
//     // // console.log('previous emotions: ' + previousEmotions)

//     // storedEmotion = emotion.textContent;
//     // firstEmotion.innerHTML = storedEmotion;

//     // //update used emotions list to no longer include the selected emotion
//     // //TO DO: fix this to actually remove specific emotions from the list
//     // currentEmotions.forEach((i) => {
//     //     const unusedIndex = unusedEmotions.indexOf(i);
//     //     if (unusedIndex > -1) {
//     //         unusedEmotions.splice(unusedIndex, 1);
//     //     }
//     // })

//     // //are there emotions left in the list?  If no show the final emotion
//     // if (unusedEmotions.length === 0) {
//     //     displayFoundEmotion(storedEmotion)
//     //     return 0;
//     // }

//     // secondEmotion.textContent = unusedEmotions[0];
//     // currentEmotions.push(firstEmotion.innerHTML)
//     // currentEmotions.push(secondEmotion.innerHTML)
// }

