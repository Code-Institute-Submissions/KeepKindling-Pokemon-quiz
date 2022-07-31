const startButton = document.getElementById('start');

startButton.addEventListener('click', runGame())

let questions = [{
    question: 'How old was Ashe when he began his journey?',
    answers: [
        { text: '12', correct: true},
        { text: '10', correct: false},
        { text: '11', correct: false}
    ]
},
{
    question: 'What is Mistys favorite Pokemon?',
    answers: [
        { text: 'Staryu', correct: true},
        { text: 'Seel', correct: false},
        { text: 'Starmie', correct: false}
    ]
},
{
    question: 'How many siblings does Brock have?',
    answers: [
        { text: '9', correct: true},
        { text: '5', correct: false},
        { text: '3', correct: false}
    ]
},
{
    question: "Who is Ashe's rival?",
    answers: [
        { text: 'Gary', correct: true},
        { text: 'Brock', correct: false},
        { text: 'Misty', correct: false}
    ]
},
{
    question: 'What was the first Pokemon that Ashe caught?',
    answers: [
        { text: 'Caterpie', correct: true},
        { text: 'Mankey', correct: false},
        { text: 'Pidgey', correct: false}
    ]
},
{
    question: 'Which giant Pokemon attacked the city Porta Vista?',
    answers: [
        { text: 'Tentacruel', correct: true},
        { text: 'Kangaskhan', correct: false},
        { text: 'Rhydon', correct: false}
    ]
},
{
    question: 'How does Pikachu evolve into Riachu?',
    answers: [
        { text: 'Thunder stone', correct: true},
        { text: 'Lightning stone', correct: false},
        { text: 'Electric stone', correct: false}
    ]
},
{
    question: 'Why was Ashe late to picking his first Pokemon?',
    answers: [
        { text: 'He overslept', correct: true},
        { text: 'His mums car would not start', correct: false},
        { text: 'He was ambushed by team rocket', correct: false}
    ]
},
{
    question: 'What did Ashe steal from Misty?',
    answers: [
        { text: 'A Bike', correct: true},
        { text: 'A Gym Badge', correct: false},
        { text: 'A Scooter', correct: false}
    ]
},
{
    question: 'How many Pokemon are there?',
    answers: [
        { text: '151', correct: true},
        { text: '162', correct: false},
        { text: '157', correct: false}
    ]
},
]

function runGame() {
    console.log("started game");
}

function selectNextQuestion() {

}

function selectAnswer() {

}

function checkAnswer() {

}

function incrementScore() {

}

function incrementIncorrect() {

}

function runTime() {

}