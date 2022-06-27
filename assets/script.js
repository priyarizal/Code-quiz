
//I defined and declared a function, then tiggered it to load the page with following sentence.
function loadPage() {

    var quizContainer
    quizContainer = document.querySelector("#quizcontainer")
    quizContainer.style.visibility = 'hidden'

    var introText
    introText = document.querySelector("#introtext")
    introText.innerHTML = "Try to answer the following code-related questions within the time limit. Keep in mind that incorrect answers will penalize your score/time by ten seconds."

}

loadPage()

var currentQuestion
currentQuestion = 0

function startQuiz() {
    //now that I know the function works, i want it to show my quizcontainer I hid
    var quizContainer
    quizContainer = document.querySelector("#quizcontainer")

    quizContainer.style.visibility = 'visible'

    var introContainer
    introContainer = document.querySelector("#introcontainer");
    introContainer.style.visibility = 'hidden'

    getQuestions()

}

function getQuestions() {

    //displaying question 
    quiz = document.querySelector("#quiz")
    quiz.innerHTML = myQuestions[currentQuestion]['question']

    //deconstructing the above 'object' for clarity
    // const { question, answers, correctAnswer } = myQuestions[currentQuestion]

    currentQuestion = currentQuestion + 1

    //assigning answers to their buttons

    btn1 = document.querySelector("#btn1")
    btn1.innerText = myQuestions[currentQuestion]['answers']['a']

    btn1 = document.querySelector("#btn2")
    btn1.innerText = myQuestions[currentQuestion]['answers']['b']

    btn1 = document.querySelector("#btn3")
    btn1.innerText = myQuestions[currentQuestion]['answers']['c']

    btn1 = document.querySelector("#btn4")
    btn1.innerText = myQuestions[currentQuestion]['answers']['d']

}

document.getElementById("start-btn").addEventListener("click", startQuiz);

document.getElementById("btn1").addEventListener("click", checkAnswer);
document.getElementById("btn2").addEventListener("click", checkAnswer);
document.getElementById("btn3").addEventListener("click", checkAnswer);
document.getElementById("btn4").addEventListener("click", checkAnswer);






//writing my questions

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
        }
    }
];


