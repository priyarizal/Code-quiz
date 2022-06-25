
const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');

function buildQuiz() { }

function showResults() { }

// display quiz right away
buildQuiz();

// on submit, show results
submitButton.addEventListener('click', showResults);

const myQuestions = [
    {
        question1: "Commonly used data type DO NOT include",
        answers: {
            a: "Numbers",
            b: "Booleans",
            c: "Alerts",
            d: "Strings"
        },
        correctAnswer: "c"
    },
    {
        question2: "Condition in an if/else statement is enclosed with ",
        answers: {
            a: "Quotes",
            b: "Curly Brackets",
            c: "Parentheses",
            d: "Square Brackets"
        },
        correctAnswer: "c"
    },
    {
        question3: "A very useful tool used during development and debugging for printing conten to the debugger is:",
        answers: {
            a: "Javascript",
            b: "Terminal Bash",
            c: "For Loops",
            d: "Console.log"
        },
        correctAnswer: "d"
    },
    {
        question4: "Arrays in javascript can be used to store",
        answers: {
            a: "numbers and strings",
            b: "other arrays",
            c: "Booleans",
            d: "All of the above"
        }
    }
];
