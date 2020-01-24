var titleDiv = document.getElementById("title");
var gameInfoDiv = document.getElementById("game-info");
var startQuiz = document.getElementById("start-quiz");
var timerDisplay = document.getElementById("timer");

//questions
var questDiv = document.getElementById("question");
var listDiv = document.getElementById("questions");
var choiceA = document.getElementById("choice1");
var choiceB = document.getElementById("choice2");
var choiceC = document.getElementById("choice3");
var choiceD = document.getElementById("choice4");
var resultDiv = document.getElementById("result");
// var questDiv = document.getElementsByClassName("options")


//Set countdown timer(score) at 75
var secondsLeft = 75;

function setTime() {
    var timerInterval = setInterval(function() {
      secondsLeft--;
      timerDisplay.textContent = "Time: " + secondsLeft;
  
      if(secondsLeft === 0) {
        clearInterval(timerInterval);
        sendMessage();
      }
  
    }, 1000);
  }


//Counter to cycle through questions object
var i = 0;

function checkAnswer(userChoice) {
    var correctAnswer = questions[i].answer;
    if (userChoice === correctAnswer) {
        console.log("Correct!")
    } else {
        console.log("Incorrect!")
    }
    i++;
    getQuestion(i);
}


startQuiz.addEventListener("click", function() {
    listDiv.setAttribute("style", "visbility: visible; list-style: none;");
    setTime();
    gameInfoDiv.remove();
    startQuiz.remove();
    getQuestion();
    });

function getQuestion() {
    questDiv.textContent = questions[i].title;
    choiceA.textContent = "A. " + questions[i].choices[0];
    choiceB.textContent = "B. " + questions[i].choices[1];
    choiceC.textContent = "C. " + questions[i].choices[2];
    choiceD.textContent = "D. " + questions[i].choices[3];
}



// checkAnswer();
        

//Display question
//If user guess correctly
//Get next question
//Else minus from time(score)
//Get next question

