
// DOM Elements
var startButton = document.getElementById('#mybutton');
var displayPane = document.getElementById("display");
var secondsEl = document.getElementById('seconds');
var quizEl = document.getElementById('#quiz');
// var startButton = document.querySelector(".myButton");

// Timer Variables

var secondsLeft = 75;
var interval;

//Score and Question Index Variables

var score = 0;

let runningQuestionIndex = 0;



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

  }

];


function startTimer() {

}

// Gets formatted seconds to plug into the seconds element

function setTime() {
  var timerInterval = setInterval(function () {

    secondsLeft--;
    $("#seconds").text(secondsLeft)

    if (secondsLeft === 0) {
      clearInterval(timerInterval)
    } else if (runningQuestionIndex > 4) {
      $('#seconds').text("");

    }
    
  

  }, 1000);
}

function allDone() { //Start of allDone Function

  $('#seconds').html(
    "<h3>" + "Quiz Complete!" + "</h3>"

  );

  $(".jumbotron").html("<card>" +

    "<h3>" + "All Done!" + "</h3>" +

    "<h6>" + "Your final score is : " + score + "</h6>" +


    "<form> " + "Enter Initials: " + "<input type='text name='initials' class='initials'>" + "<p>" + ' ' + "</p>" + "<button class = 'submit btn btn-primary'>" + "Submit" + "</button>" +

    "</card>"
  )


  var targetedInitials = document.querySelector(".initials")


  // Event Listener to generate final screen

  $(".submit").on("click", () => {

    var s = 0


    var userDetials = {

      initials: $(targetedInitials).val(),
      finalscore: score
    };

    console.log(userDetials);


    localStorage.setItem("User Details", JSON.stringify(userDetials));

    //   initials: userInitials.nodeValue.trim(),
    //   userScore: score 

    // };


    var highScores = JSON.parse(localStorage.getItem("User Details"));
    // **//Add Initials to Local Memory - still need to add this code
    
    $(".jumbotron").html("<card>" +
    
    "<h1>" + "High Scores" + "</h1>" + " <hr>" +
    "<ol class='leaderboard'>" + "<li>" +
    
    "<h3 class='highscore'>" + highScores.initials + ": " + highScores.finalscore + "</h3>" +
    
    "</li>" + "</ol>" +
    
    // ** Display Items from Local memory to a new ul inside card - still need to add this code
    
    "<button id='goBack' class = 'btn btn-primary goback'>" + "Go Back" + "</button>" + "<button id='clearScores' class = 'clear btn btn-primary'>" + "Clear Scores" + "</button>" +
    
    "</card>");
    
    
    $(".goback").on("click", () => {
      
      location.reload();
      
    })
    
    $('.clear').on("click", () => {
      
      localStorage.clear()
      
    })
      


  })

};//End of Alldone Function

// setTimeout(fade_out, 500);
// Start of Render Questions Function
function renderQuestions() {

  let lastQuestionIndex = questions.length - 1;
  let choiceIndex = 0;

  // Code that dynamically renders questions based on runningQuesitonIndex variable and choice index variable

  $(".jumbotron").html("<card class= 'quizPane'>" +

    "<h1>" + questions[runningQuestionIndex].title + "</h1>" +

    "<ul>" +

    "<li>" + "<button id= 'choiceA' class='answer btn btn-outline-dark'>" + questions[runningQuestionIndex].choices[choiceIndex] + "</button>" + "</li>" +

    "<li>" + "<button id= 'choiceB' class= 'answer btn btn-outline-dark'>" + questions[runningQuestionIndex].choices[choiceIndex + 1] + "</button>" + "</li>" +

    "<li>" + "<button  id= 'choiceC'class=  'answer btn btn-outline-dark'>" + questions[runningQuestionIndex].choices[choiceIndex + 2] + "</button>" + "</li>" +

    "<li>" + "<button id= 'choiceD' class= 'answer btn btn-outline-dark'>" + questions[runningQuestionIndex].choices[choiceIndex + 3] + "</button>" + "</li>" +

    // "<li>" + "<button id= 'choiceD' class= 'btn btn-outline-dark'>" + questions[runningQuestionIndex].answer + "</button>" + "</li>" +

    "</ul>" +


    "</card>");

  // console.log(event.target);

  //Event listener when an option is clicked
  $('.btn').on("click", () => {

    console.log($(event.target).text() === questions[runningQuestionIndex].answer);
    console.log("score", score);


    // checkAnswers();

    console.log(questions[runningQuestionIndex].answer);
    console.log($(event.target).text());



    if ($(event.target).text() === questions[runningQuestionIndex].answer) {

      score += 20;

      $("#resultsPane").html("<hr>" + "<h1>" + "Correct!" + "</h1>")


    }

    else {

      score -= 10;
      secondsLeft -= 15;
      $("#resultsPane").html("<hr>" + "<h1>" + "wrong" + "</h1>")
    }


    runningQuestionIndex++;

    if (runningQuestionIndex > 4) {
      allDone();
    } else {
      renderQuestions()
    };






  })


};
//End of Render Questions Function

// }



// Score Functions

// function answerIsCorrect() {


// }

// function answerisWrong() {

// }