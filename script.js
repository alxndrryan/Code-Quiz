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

//Starts quiz, sets timer, grabs first question
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


function checkAnswer() {
if (choiceA.textContent === "A. " + questions[i].answer) {
    console.log("A is correct!");
    i++;
    getQuestion();
} else if (choiceB.textContent === "B. " + questions[i].answer) {
    console.log("B is correct!");
    i++;
    getQuestion();
    console.log(i);
} else if (choiceC.textContent === "C. " + questions[i].answer) {
    console.log("C is correct!");
    i++;
    getQuestion();
} else if (choiceD.textContent === "D. " + questions[i].answer) {
    console.log("D is correct!");
    i++;
    getQuestion();
} else {
    console.log("wtf");
    console.log(i);
};
}


// if (questions[1].choices[3] === questions[1].answer) {
//     console.log("this works");
// }

// console.log(questions[1].choices[3]);

// console.log(questions);

// switch(questions[i].answer) {
//     case w:
//       choiceA.textContent = "A. " + questions[i].answer;
//     case x:
//       choiceB.textContent = "B. " + questions[i].answer;
//       break;
//     case y:
//         choiceC.textContent = "C. " + questions[i].answer;
//       break;
//     case z:
//         choiceD.textContent = "D. " + questions[i].answer;
//   }

  

//   if (choiceA.textContent === "A. " + questions[0].answer) {
//       console.log(true);
//   } else {
//       console.log(false);
//   }

choiceA.addEventListener("click", function() {
    checkAnswer();
});

choiceB.addEventListener("click", function() {
    checkAnswer();
});

choiceC.addEventListener("click", function() {
    checkAnswer();
});

choiceD.addEventListener("click", function() {
    checkAnswer();
});



//start quiz and get first question

