
//[{question: "Who is Prime Minister of the United Kingdom?", choices: ["David Cameron", "Gordon Brown", "Winston Churchill", "Tony Blair"], correctAnswer:0}];
var questions = [{question: "Who is Prime Minister of the UK?", choices: ["David Cameron", "Boris Johnson", "Osama Bin Laden", "Barry Obama"], correctAnswers: 0},
                {question: "Who is President of the USA?", choices: ["Obama", "Trump", "Clinton", "Lucas"], correctAnswers: 1},
                {question: "How much wood could a woood chuck chuck", choices: ["if a wood chuck could chuck wood", "Hello", "Wong", "not me"], correctAnswers: 0},
                {question: "This time next year, we'll be ... ", choices: ["Millionaires", "Sweet home Alabama", "America's Most Wanted", "In space"], correctAnswers: 0}];

var answers = [];
var page = 0;
var score = 0;

function nextQuestion() {
  var currentQ = document.getElementById("question");
  var nextQ = questions[page];
  currentQ.innerHTML = "<p>" + questions[page].question + "</p>";
    
  var currentAns = document.getElementById("answers");
  currentAns.innerHTML = "";
  var nextAns = nextQ.choices;
  
    for (ans in nextAns) {
        currentAns.innerHTML += '<input type="radio" name="answers">' + nextAns[ans] + "</input><br/>";
    }
    submitt();
    page++;
  }

function submitt(){
  var response = document.getElementsByName("answers");
//console.log(response);
    if(response === questions[page].correctAnswers) {
      score++;
    }
}