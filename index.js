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