//List of Questions
var questions = [{question: "Who is Prime Minister of the UK?", choices: ["David Cameron", "Boris Johnson", "Osama Bin Laden", "Barry Obama"], correctAnswers: 0},
                {question: "Who is President of the USA?", choices: ["Obama", "Trump", "Clinton", "Lucas"], correctAnswers: 1},
                {question: "How much wood could a woood chuck chuck", choices: ["if a wood chuck could chuck wood", "Hello", "Wong", "not me"], correctAnswers: 0},
                {question: "This time next year, we'll be ... ", choices: ["Millionaires", "Sweet home Alabama", "America's Most Wanted", "In space"], correctAnswers: 0}];

var answers = [];
var page = 0;
var score = 0;

//Function to deal with nextQuestion and answer radio buttons
function nextQuestion() {
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
    //call to submitt function which tests if answer given is right
    submitt();
    //increment the question counter to know what Q/Ans to display next
    page++;
  }

function submitt(){
  var myForm = document.form1;
  var answer = myForm.answers;
  var correctAnswer = questions[page].correctAnswers;
    for(var i=0;i<answer.length;i++){
        if(answer[i].checked){
          if(answer[i] === correctAnswer){
              score++;
          }
        }
    }
}
    
    