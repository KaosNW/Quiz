//List of Questions
var questions = [{question: "Who is Prime Minister of the UK?", choices: ["David Cameron", "Boris Johnson", "Osama Bin Laden", "Barry Obama"], correctAnswers: 0},
                {question: "Who is President of the USA?", choices: ["Obama", "Trump", "Clinton", "Lucas"], correctAnswers: 1},
                {question: "How much wood could a woood chuck chuck", choices: ["if a wood chuck could chuck wood", "Hello", "Wong", "not me"], correctAnswers: 0},
                {question: "This time next year, we'll be ... ", choices: ["Millionaires", "Sweet home Alabama", "America's Most Wanted", "In space"], correctAnswers: 0}];

var answers = [];
var page = 0;
var score = 0;
//used to capture the current page before submitt() is called so it can be used for back()
var previousAns;

//Function to start quiz by populating first Q and answer list
function initQuiz() {
    page=0;
    score=0;
  if(page === 0){
      document.getElementById('next').style.display = "block";
      document.getElementById('start').style.display = "none";
      nextQuestion();
     }
  }

//Function to deal with nextQuestion and answer radio buttons - takes optional callBack function to reset the checked button when user clicks back
function nextQuestion(callBackAnsSetter){
    if(page < questions.length){ //makes sure the user isnt on the final q
      var currentQ = document.getElementById("question"); //captures current Q p element
      var nextQ = questions[page]; //gets next question from using page as index (0 based array means page nums will correlate to the correct q)
      currentQ.innerHTML = "<p>" + questions[page].question + "</p>"; // replaces answers <P> with a new P containing the question from the array of question objects
      //code for answer radio button list
      var currentAns = document.getElementById("answers");
      currentAns.innerHTML = ""; // blanks current answer form
      var nextAns = nextQ.choices; //gets a copy of the next set of answers from array
      //loop that goes through each of the choices in question array and creates a radio button for it in the answers HTML div.
      for (ans in nextAns) {
        currentAns.innerHTML += '<input type="radio" name="answers">' + nextAns[ans] + "</input><br/>"; // populates the blank answer form with answers, appending each one on a new line as a new element
      }
    //increment the question counter to know what Q/Ans to display next
    page++;
    //validation check to see if a Callback function was provided (via back button) - if so it is invoked
      if(typeof callBackAnsSetter === "function"){
          callBackAnsSetter();
      }
    }
  else{
      var endText = "<p> Congratulations! your score is: </p>";
      document.getElementById('answers').innerHTML = score + " out of " + questions.length ;
      document.getElementById('question').innerHTML = endText;
      document.getElementById('next').style.display = "none";
      document.getElementById('start').style.display = "block";
    }
}

function submitt(){
  var hasAnswered = 0;
  for(var j = 0; j<document.form1.answers.length; j++){
      if(document.form1.answers[j].checked){
          hasAnswered = 1;
          //updates global var with the current answer (via form document)
          previousAns = j;
          break;
      }
    }
    //if user selected an answer it is checked and score is incremented as needed. NextQuestion/Answer is then called
  if(hasAnswered ===1){
      //previousAns which can be used to go back
    var myForm = document.form1;
    var answer = myForm.answers;
      for(var i=0;i<answer.length;i++){
          //the below is page-1 as the questions index is 0 based but questions start from page 1.
          var correctAnswer = questions[page-1].correctAnswers;
          //this returns T or F as expected
          if(answer[i].checked){
            //this code compares the checked radiobox index with the correct ans index.
            if(i === correctAnswer){
                score++;
                break;
            }
          }
      }
    //if question has been 'marked' the next question is setup by the below call.
    nextQuestion();
  }
  //if no answer was selected.
  else{
      alert("Please select an answer!");
  }
}

function back(){
  var prevChecked = previousAns;
  if(page>=2){
      //decrements by 2 to as this will be called when you are the page ahead of where you want to be - and the array is 0 based whereas the page 0 is an intro page. e.g. second question = page 2, there for -- would be page/question at array index 1. so we will need to decrement again to get it to index 0 which is the first question. We could get around this by putting the intro text at Index 1
    page--;
    page--;
      //this calls the Next question function with a callback function that takes the previous checked radioButton index and rechecks it.
    nextQuestion(function(){
        document.getElementById("answers")[previousAns].checked = true}
                );
   }
  else{
    alert("You are at the first Question!");
  }
}

$(document).ready(function(){
    $('#next').click(function(){
       $('#QuestionBlock').fadeOut(500);
       $('#answerBlock').fadeOut(500);
       $('#QuestionBlock').fadeIn(500);
       $('#answerBlock').fadeIn(500);
    })
})
    