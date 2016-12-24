//List of Questions
var questions = [{question: "Who is Prime Minister of the UK?", choices: ["David Cameron", "Boris Johnson", "Osama Bin Laden", "Barry Obama"], correctAnswers: 0},
                {question: "Who is President of the USA?", choices: ["Obama", "Trump", "Clinton", "Lucas"], correctAnswers: 1},
                {question: "How much wood could a woood chuck chuck", choices: ["if a wood chuck could chuck wood", "Hello", "Wong", "not me"], correctAnswers: 0},
                {question: "This time next year, we'll be ... ", choices: ["Millionaires", "Sweet home Alabama", "America's Most Wanted", "In space"], correctAnswers: 0}];

var answers = [];
var page = 0;
var score = 0;

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

//Function to deal with nextQuestion and answer radio buttons
function nextQuestion(){
    if(page < questions.length){
      var currentQ = document.getElementById("question");
      var nextQ = questions[page];
      currentQ.innerHTML = "<p>" + questions[page].question + "</p>";
      //code for answer radio button list
      var currentAns = document.getElementById("answers");
      currentAns.innerHTML = "";
      var nextAns = nextQ.choices;
      //loop that goes through each of the choices in question array and creates a radio button for it in the answers HTML div.
      for (ans in nextAns) {
        currentAns.innerHTML += '<input type="radio" name="answers">' + nextAns[ans] + "</input><br/>";
      }
    //increment the question counter to know what Q/Ans to display next
    page++;
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
      }
    }
    //if user selected an answer it is checked and score is incremented as needed. NextQuestion/Answer is then called
  if(hasAnswered ===1){
      //previousAns which can be used to go back
    var previousAns = document.form1;
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
  if(page>=0){
    page--;
    nextQuestion();
   }
  else{
    alert("You are at the first Question!");
  }
}

    