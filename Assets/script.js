// Selects element by class
var timeEl = document.querySelector(".time");

// Selects element by id
var mainEl = document.getElementById("main");

var secondsLeft = 10;

function startTimer() {
  // Sets interval in variable
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = secondsLeft + " seconds left till quiz is over.";

    if(secondsLeft === 0) {
      // Stops execution of action at set interval
      clearInterval(timerInterval);
      // Calls function to create and append image
      sendMessage();
    }

  }, 1000);

  function generateQuiz (questions, quizContainer, resultsContainer, submitButton) {
    

    function rapidQuestions (questions, quizContainer) {


    }

    function answers (questions, quizContainer, resultsContainer) {

      
    }

  }
}


// Function to end game
function sendMessage() {
  timeEl.textContent = " ";
  var imgEl = document.createElement("img");
  imgEl.setAttribute("src", "images/gameOver.jpeg");
  mainEl.appendChild(imgEl);

}
function begin() {
  document.getElementById("count");
  startTimer();
}