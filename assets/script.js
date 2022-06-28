
//I defined and declared the loadPage function
function loadPage() {

    var quizContainer
    quizContainer = document.querySelector("#quizcontainer")

    //I'm hiding the questions, options, rightanswer, & wronganswer from the user until the function is triggered
    quizContainer.style.visibility = 'hidden'
    rightanswer.style.visibility = 'hidden'
    wronganswer.style.visibility = 'hidden'
    endpage.style.visibility = 'hidden'

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
    quizContainer.style.visibility = 'visible'

    //hiding my intro container that was visible when loading the page
    var introContainer
    introContainer = document.querySelector("#introcontainer");
    introContainer.style.visibility = 'hidden'


    updateTimer(timeleft)
    getQuestions()


}

document.getElementById("start-btn").addEventListener("click", startQuiz);


function getQuestions() {

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


    updateTimer(timeleft);
    getQuestions()
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

function updateTimer(time) {
    document.querySelector("#timer-input").innerText = time;

}

var timeleft = 60;

setInterval(function () {
    timeleft -= 1
    updateTimer(timeleft)
}, 1000)


//if users want to play again : store time 
//end the quiz

