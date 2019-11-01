var titleDiv = document.getElementById("title");
var gameInfoDiv = document.getElementById("game-info");
var startQuiz = document.getElementById("start-quiz");
var timerDisplay = document.getElementById("timer");

//questions
var testDiv = document.getElementById("test");
var listDiv = document.getElementById("questions");
var questA = document.getElementById("a");
var questB = document.getElementById("b");
var questC = document.getElementById("c");
var questD = document.getElementById("d");



var questions = [
    {
      title: "What are variables used for in JavaScript Programs?",
      choices: ["Varying randomly", "Storing numbers, dates, or other values", "Causing high-school algebra flashbacks", "None of the above"],
      answer: "Storing numbers, dates, or other values"
    },
    {
      title: "Which is the correct way to write a JavaScript array?",
      choices: ["var txt = (1:'tim',2:'kim',3:'jim'", "var txt = 1=('tim')2=('kim')3=('jim')", "var txt = 'tim','kim','jim'", "var txt = ['tim','kim','jim']"],
      answer: "var txt = ['tim','kim','jim']"
    },
    {
      title: "Which of the following is not a valid Javascript variable name?",
      choices: ["2names", "_first_and_last_names", "FirstAndLast", "None of the above"],
      answer: "2names"
    },
    {
        title: "The _______ method of an Array object adds and/or removes elements from an array.",
        choices: ["Reverse", "Splice", "Slice", "Shift"],
        answer: "Splice"
      },
      {
        title: "JavaScript is interpreted by _________.",
        choices: ["Server", "Object", "Client", "None of the above"],
        answer: "Client"
      }
  ];

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

  //starts timer, removes start page elements, and displays first question
  startQuiz.addEventListener("click", function() {
    
        var timerInterval = setInterval(function() {
          secondsLeft--;
          timerDisplay.textContent = "Time: " + secondsLeft;
      
          if(secondsLeft === 0) {
            clearInterval(timerInterval);
            sendMessage();
          }
      
        }, 1000);
        title.remove();
        gameInfoDiv.remove();
        startQuiz.remove();
        
        testDiv.textContent = questions[0].title;
        listDiv.setAttribute("style", "visbility: visible; list-style: none;");
        questA.textContent = "A. " + questions[0].choices[0];
        questB.textContent = "B. " + questions[0].choices[1];
        questC.textContent = "C. " + questions[0].choices[2];
        questD.textContent = "D. " + questions[0].choices[3];
  });

  //question 1
  if (questA.textContent = "A. " + questions[0].choices[0]) {
  questA.addEventListener("click", function() {

    

    testDiv.textContent = questions[1].title;
    questA.textContent = "A. " + questions[1].choices[0];
    questB.textContent = "B. " + questions[1].choices[1];
    questC.textContent = "C. " + questions[1].choices[2];
    questD.textContent = "D. " + questions[1].choices[3];

    if (questD.textContent = "D. " + questions[1].choices[3]) {
        questD.addEventListener("click", function() {
      
          
      
          testDiv.textContent = questions[2].title;
          questA.textContent = "A. " + questions[2].choices[0];
          questB.textContent = "B. " + questions[2].choices[1];
          questC.textContent = "C. " + questions[2].choices[2];
          questD.textContent = "D. " + questions[2].choices[3];
      
        })}

        if (questA.textContent = "A. " + questions[2].choices[0]) {
            questA.addEventListener("click", function() {
          
              
          
              testDiv.textContent = questions[3].title;
              questA.textContent = "A. " + questions[3].choices[0];
              questB.textContent = "B. " + questions[3].choices[1];
              questC.textContent = "C. " + questions[3].choices[2];
              questD.textContent = "D. " + questions[3].choices[3];
          
            })}

  })};

  //question 2
  



  


  