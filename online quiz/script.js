/* declaration of table */
const questions = [
    {
        question: "What is the capital of France?",
        answers: [
            {text: "Lille", correct: false},
            {text: "Paris", correct: true},
            {text: "Marseille", correct: false},
            {text: "Monaco", correct: false},
        ]
    },
    {
        question: "What is the largest planet in our solar system?",
        answers: [
            {text: "Earth", correct: false},
            {text: "Jupiter", correct: true},
            {text: "Saturn", correct: false},
            {text: "Mars", correct: false},
        ]
    },
    {
        question: "Who wrote 'Romeo and Juliet'?",
        answers: [
            {text: "William Shakespeare", correct: true},
            {text: "Mark Twain", correct: false},
            {text: "Jane Austen", correct: false},
            {text: "Charles Dickens", correct: false},
        ]
    },
    {
        question: "What is the chemical symbol for water?",
        answers: [
            {text: "H2O", correct: true},
            {text: "O2", correct: false},
            {text: "CO2", correct: false},
            {text: "HO", correct: false},
        ]
    },
    {
        question: "In which year did the Titanic sink?",
        answers: [
            {text: "1912", correct: true},
            {text: "1905", correct: false},
            {text: "1920", correct: false},
            {text: "1898", correct: false},
        ]
    }
];
/* variables and const */
const questionElement = document.getElementById("question");
const answersButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("btn-next");

let questionCurrentIndex = 0;
let score = 0;
let timeElapsed = 0;
let timeInterval;
const timerElement = document.getElementById("timer-counter");

/* fucntions declaration */
function startTimer() {
    timeInterval = setInterval(() => { 
        timeElapsed++;
        console.log("Time Elapsed:", timeElapsed); 
        timerElement.innerHTML = timeElapsed; 
    }, 1000);
}

function stopTimer() {
    clearInterval(timeInterval);
}
function startQuiz(){
    questionCurrentIndex = 0;
    score = 0;
    timeElapsed = 0;
    nextButton.innerHTML = "Next";
    startTimer();
    showQuestion();
}
function showQuestion(){
    let currentQuestion = questions[questionCurrentIndex];
    let questionNO = questionCurrentIndex + 1;
    questionElement.innerHTML =  questionNO + "." + currentQuestion.question;

    resetState();
    currentQuestion.answers.forEach(answer =>  {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answersButtons.appendChild(button);

        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState(){
    nextButton.style.display = "none";
    answersButtons.innerHTML = "";

}

function selectAnswer(s){
    const selectedbtn = s.target;
    const isCorrect = selectedbtn.dataset.correct === "true";
    
    if(isCorrect){
        selectedbtn.classList.add("correct");
        score++;
    }
    else{
        selectedbtn.classList.add("incorrect");
    }
    Array.from(answersButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
             button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function totheNextQuestion(){
    questionCurrentIndex++;
    if(questionCurrentIndex < questions.length){
        showQuestion();
    }
    else{
        showScore();
    }
}

function showScore(){
    stopTimer();
    resetState();
    questionElement.innerHTML = `You scored ${score} ou of ${questions.length}`
    nextButton.innerHTML = "play again";
    nextButton.style.display = "block";
}

nextButton.addEventListener("click", ()=>{
     if(questionCurrentIndex < questions.length){
        totheNextQuestion();
     }
     else{
        startQuiz();
     }
});
/* call functions for start the quiz */
startQuiz();