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
    }
];
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
let currentQuestionIndex = 0;
let score = 0;