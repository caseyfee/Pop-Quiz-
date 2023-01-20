// STEP ONE!!!!
// When you click the start button, the timer starts and you are presented with a question
// Create a button using HTML - Done 

// Create timer function that starts when button is pressed
// Create timer counting down from 75 seconds - DONE?
const timer = function () {
    var timeEl = document.querySelector(".time");
    var secondsLeft = 75;
    secondsLeft--;
    timeEl.textContent = "Time Left: " + secondsLeft + ".";
}
const startTimer = function () {
    setInterval(timer, 1000);
}

// if(secondsLeft === 0) { -don't forget }
// Stops execution of action at set interval
// clearInterval();
// Calls function to create and append image
// sendMessage();



// Add an event listener for the start buttom - onclick? - that starts questions AND TIMER, Likely a query selector - on click
var startQuiz = document.querySelector("#start-button");
startQuiz.addEventListener("click", startTimer());


// Check that startQuiz worked
// console.log()

// Once quiz starts - hide button

// STEP TWO!!!!

// Create list of questions and assign correct - true and incorrect - false to them  
// variables - String match string
// if statement
// Question should pop up
// When you answer incorrectly, time is subtracted from the clock
// Create if statement that if incorrect is chosen, subtract 10 seconds from clock
// If clock time === 0 . return out of entire quiz and timer function

// STEP THREE!!!!
// When you answer the question, you are presented with another question
// 



// When all questions are answered or the timer reaches 0, game is over


// Whent the game is over, initials and score is saved







// Function to create and game over image
function sendMessage() {
    timeEl.textContent = " ";
    var imgEl = document.createElement("img");
    imgEl.setAttribute("src", "images/image_1.jpg");
    mainEl.appendChild(imgEl);

}
