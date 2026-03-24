const questions = [
    {
        question: "which is the largest animal in the world?",
        answers: [
            { text: "shark", correct: false},
            { text: "blue whale", correct: true},
            { text: "elephant", correct: false},
            { text: "giraffe", correct: false}
        ]
    },
    {
        question: "which is the smallest country in the world?",
        answers: [
            { text: "vatican city", correct: true},
            { text: "bhutan", correct: false},
            { text: "nepal", correct: false},
            { text: "shri lanka", correct: false}

        ]
    },
    {
        question: "which is the largest desert in the world?",
        answers: [
            { text: "kalhari", correct: false},
            { text "Gobi", correct: false},
            { text: "sahra", correct: false},
            { text: "antarctica", correct: true,}
        ]
    },
    {
        question: "which is the smallest continent in the world?",
        answers: [
            { text: "asia", correct: false},
            { text: "australia", correct: true},
            { text: "europe", correct: false},
            { text: "antarctica", correct: false},
        ]
    }
];
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
let currentQuestionIndex = 0;
let score = 0;
function startQuiz() {
    currentQuestionIndexQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}
function showQuestion() {
    resetStste();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer  => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;

        }
        button.addEventListener("click", selectAnswer);

    });
}
startQuiz();
function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}
function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");

    }else{
        selectedBtn.classList.add("incorrect");
    }
}