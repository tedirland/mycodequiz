
// DOM Elements
var startButton = document.getElementById('#mybutton');
var displayPane = document.getElementById("display");
var secondsEl = document.getElementById('seconds');
var quizEl = document.getElementById('#quiz');
// var startButton = document.querySelector(".myButton");

// Timer Variables

var secondsLeft = 75;
var timeLeft = 0;
var secondsElapsed = 0;
var interval;

//Score and Question Index Variables

var score = 0;

let runningQuestionIndex = 0;

// var score = 0;
// // var lastQuestionIndex = questions.length - 1;
// var runningQuestionIndex = 0;




// Questions Stored in an Object
var questions = [
  {
    title: "Commonly used data types DO NOT include:",
    choices: ["strings", "booleans", "alerts", "numbers"],
    answer: "alerts"
  },
  {
    title: "The condition in an if / else statement is enclosed within ____.",
    choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
    answer: "parentheses"
  },
  {
    title: "The lightweight, do less version of Javascript is called _____",
    choices: ["JQuery", "Javalyte", "JSON", "Ruby on Rails"],
    answer: "JQuery"

  },

  {
    title: "What method will store a value in local storage?",
    choices: ["localStorage.store()", "localStorage.set()", "localMemory.setItem()", "localStorage.setItem()"],
    answer: "localStorage.setItem()"

  },

  {
    title: "What does JSON stand for?",
    choices: ["Java on Node", "Javascript Object Notation", "JQuery Obtain Nanodata", "JavaScript Orientation Notation"],
    answer: "Javascript Object Notation"

  },

];

//Timer Function

// function renderQuestions() {
//   let q = questions[runningQuestionIndex];
//   $('.jumbotron').innerHTML = 

// //   };
// for (var i = 0; i < questions.length; i++) {

// }



// Creating Functions here

// Clears jumbotron content on click
function startQuiz() {

  $(".jumbotron").empty();



}

function startTimer() {

}

// Gets formatted seconds to plug into the seconds element

function setTime() {
  var timerInterval = setInterval(function () {

    secondsLeft--;
    $("#seconds").text(secondsLeft)

    if (secondsLeft === 0) {
      clearInterval(timerInterval)
    }

  }, 1000);
}


// function checkAnswers() {

//   if (questions[runningQuestionIndex].answer == )



//     // }
// Rendering Questions

function renderQuestions() {

  let lastQuestionIndex = questions.length - 1;
  let choiceIndex = 0;

  
  function allDone() {
  
    $(".jumbotron").html(

      "<h3>" + "All Done!" + "</h3>" +

      "<h6>" + "Your final score is : " + score + "</h6>" +


      "<form> " + "Enter Initials: " + "<input type='text name='initials'>" + "<button id='submitInitials' class = 'btn btn-primary'>" + "Submit" + "</button>"
    )


  }

  // for (var i = 0; i < questions.length; i++) {


  $(".jumbotron").html("<card>" +

    "<h1>" + questions[runningQuestionIndex].title + "</h1>" +

    "<ul>" +

    "<li>" + "<button id= 'choiceA' class='btn btn-outline-dark'>" + questions[runningQuestionIndex].choices[choiceIndex] + "</button>" + "</li>" +

    "<li>" + "<button id= 'choiceB' class= 'btn btn-outline-dark'>" + questions[runningQuestionIndex].choices[choiceIndex + 1] + "</button>" + "</li>" +

    "<li>" + "<button  id= 'choiceC'class= 'btn btn-outline-dark'>" + questions[runningQuestionIndex].choices[choiceIndex + 2] + "</button>" + "</li>" +

    "<li>" + "<button id= 'choiceD' class= 'btn btn-outline-dark'>" + questions[runningQuestionIndex].choices[choiceIndex + 3] + "</button>" + "</li>" +

    "</ul>" +


    "</card>");

  // console.log(event.target);

  $('.btn').on("click", () => {

    // checkAnswers();
    runningQuestionIndex++;

    // checkanswers();
    if (runningQuestionIndex > 4) {
      allDone();
    }

    else (renderQuestions()); 
   






  })



};

// }



// Score Functions

function answerIsCorrect() {


}

function answerisWrong() {

}