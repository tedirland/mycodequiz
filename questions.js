
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

// let lastQuestionIndex = questions.length - 1;
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
var timerInterval = setInterval(function(){

  secondsLeft--;
  $("#seconds").text(secondsLeft)

  if(secondsLeft === 0) {
    clearInterval(timerInterval)
  }

}, 1000);
}


// Rendering Questions

function renderQuestions() {

  $(".jumbotron").append("<card>" + 
  
  "<h1>" + questions[0].title + "</h1>" +

    "<ul>" +

    "<li>" + "<button>" + questions[0].choices[0] + "</button>" + "</li>" +

    "<li>" + "<button>" + questions[0].choices[1] + "</button>" + "</li>" +

    "<li>" + "<button>" + questions[0].choices[2] + "</button>" + "</li>" +

    "<li>" + "<button>" + questions[0].choices[3] + "</button>" + "</li>" +

    "</ul>" +


    "</card>");

};


// Score Functions

function answerIsCorrect() {


}

function answerisWrong() {

}