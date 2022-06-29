
var quizContainer

//I defined and declared the loadPage function
function loadPage() {

    quizContainer = document.querySelector("#quizcontainer")

    //I'm hiding the questions, options, rightanswer, & wronganswer from the user until the function is triggered
    quizContainer.style.display = 'none'
    // rightanswer.style.hidden='none'
    // wronganswer.style.hidden='none'
    endpage.style.display = 'none'


    //defining introtext, telling it to grab it & display this msg 
    var introText
    introText = document.querySelector("#introtext")
    introText.innerHTML = "Try to answer the following code-related questions within the time limit. Keep in mind that incorrect answers will penalize your score/time by ten seconds."

}
//this is triggering the function to loadPage
loadPage()

//this is storing my sequence of question
var currentQuestion
currentQuestion = 0

function startQuiz() {
    //now that I know the function works, i want it to show my quizcontainer I hid
    var quizContainer
    quizContainer = document.querySelector("#quizcontainer")

    //making my quizcontainer visible that I hid it on my page
    quizContainer.style.display = 'block'

    //hiding my intro container that was visible when loading the page
    var introContainer
    introContainer = document.querySelector("#introcontainer");
    introContainer.style.display = 'none'

    startTimer()
    // updateTimer(timeleft)
    getNextQuestion()
}


var timeleft = 60;
var myTimer;

function startTimer() {
    myTimer = setInterval(function () {
        timeleft -= 1
        updateTimer(timeleft)
    }, 1000)
};

function updateTimer(time) {
    document.querySelector("#timer-input").innerText = time;
    if (time === 0) {
        alert("Quiz over! You're out of time!");
        clearInterval(myTimer);
    }
}

document.getElementById("start-btn").addEventListener("click", startQuiz);


var question
function getNextQuestion() {

    //displaying question 
    quiz = document.querySelector("#quiz")
    quiz.innerHTML = myQuestions[currentQuestion]['question']


    //deconstructing the above 'object' for clarity
    // const { question, answers, correctAnswer } = myQuestions[currentQuestion]



    //assigning possible answers (options) to their buttons

    btn1 = document.querySelector("#btn1")
    btn1.innerText = myQuestions[currentQuestion]['answers']['a']

    btn1 = document.querySelector("#btn2")
    btn1.innerText = myQuestions[currentQuestion]['answers']['b']

    btn1 = document.querySelector("#btn3")
    btn1.innerText = myQuestions[currentQuestion]['answers']['c']

    btn1 = document.querySelector("#btn4")
    btn1.innerText = myQuestions[currentQuestion]['answers']['d']

    //telling it what question to show next

}


//checks the user's input
document.getElementById("btn1").addEventListener("click", checkAnswerA);
document.getElementById("btn2").addEventListener("click", checkAnswerB);
document.getElementById("btn3").addEventListener("click", checkAnswerC);
document.getElementById("btn4").addEventListener("click", checkAnswerD);

//I'm assigning the correct answer to each question by telling it where to find the correct answer

var correctAnswer;

function checkAnswer(answer) {
    console.log(answer)
    myQuestions[currentQuestion]['correctAnswer']
    console.log(myQuestions[currentQuestion]['correctAnswer'])
    var correctAnswer = myQuestions[currentQuestion]['correctAnswer']

    //I'm telling it what to display if user answers the right answer or wrong answer 
    if (answer === correctAnswer) {
        // rightanswer.style.visibility = 'visible'
        console.log('answercorrect')
    }
    else if (answer != correctAnswer) {
        // wronganswer.style.visibility = 'visible'
        timeleft -= 10;
        console.log('answerincorrect')

    }
    currentQuestion = currentQuestion + 1

    console.log(currentQuestion, myQuestions.length)

    // last question, end the quiz
    if (currentQuestion === myQuestions.length) {
        endQuiz()
        console.log("i am here")
    } else {
        getNextQuestion()
    }

    console.log(currentQuestion)

}

// var endQuiz
// endQuiz = document.querySelector("#endpage")
// endQuiz.innerHTML = "All done"


function endQuiz() {
    clearInterval(myTimer);
    const score = timeleft

    endpage.style.display = 'block'
    quizContainer.style.display = 'none'
    document.querySelector("#timer").style.display = 'none'
    document.querySelector("#score").innerHTML = score


    console.log(score)



}

function checkAnswerA(answer) {
    checkAnswer("a")
}

function checkAnswerB(answer) {
    checkAnswer("b")
}

function checkAnswerC(answer) {
    checkAnswer("c")
}

function checkAnswerD(answer) {
    checkAnswer("d")
}



// my questions and answers

const myQuestions = [
    {
        question: "Commonly used data type DO NOT include",
        answers: {
            a: "Numbers",
            b: "Booleans",
            c: "Alerts",
            d: "Strings"
        },
        correctAnswer: "c"
    },
    {
        question: "Condition in an if/else statement is enclosed with ",
        answers: {
            a: "Quotes",
            b: "Curly Brackets",
            c: "Parentheses",
            d: "Square Brackets"
        },
        correctAnswer: "c"
    },
    {
        question: "A very useful tool used during development and debugging for printing conten to the debugger is:",
        answers: {
            a: "Javascript",
            b: "Terminal Bash",
            c: "For Loops",
            d: "Console.log"
        },
        correctAnswer: "d"
    },
    {
        question: "Arrays in javascript can be used to store",
        answers: {
            a: "numbers and strings",
            b: "other arrays",
            c: "Booleans",
            d: "All of the above"
        },
        correctAnswer: "d"

    }

];


//if users want to play again : store time 
//end the quiz

