const startButton = document.getElementById('startButton');
const questionContainerElement = document.getElementById('question-container');
const answerElement = document.getElementById('answer');
const questionElement = document.getElementById('question')
const answerButtonElement = document.getElementById('answer-button')
const answerBoxElement = document.getElementById('answer-box')
const scoreElement = document.getElementById('score')
 
let integer = 0
let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    selectNextQuestion()
  })

function displayQuestion (question) {
    questionElement.innerText = question.question
    answerBoxElement.innerHTML = ''
    question.answers.forEach(answer => {
        console.log(answerButtonElement)
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('button')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerBoxElement.appendChild(button)
    }) 
}

function selectNextQuestion() {
    displayQuestion(shuffledQuestions[currentQuestionIndex])
}

function startGame() {
    console.log("Game Started!")
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    integer = 0
    displayScore()
    selectNextQuestion()
}

function selectAnswer(e) {
    let clickedButton = e.target
    console.log(clickedButton)
    let classToAdd
    if (clickedButton.dataset.correct == 'true') {
        incrementScore()
        classToAdd = 'correct'
    } else {
        incrementIncorrect()
        classToAdd = 'incorrect'
    }
    // selectNextQuestion()
    clickedButton.classList.add(classToAdd)
    setTimeout(() => {
        currentQuestionIndex++
        selectNextQuestion()
    }, 1000)

}

function displayScore () {
    document.getElementById("score").innerText = integer + "/10";
}

function incrementScore() {
    console.log('score + 1')
    integer++
	displayScore()
}

function incrementIncorrect() {
    console.log('score incorrect')
    let oldScore = parseInt(document.getElementById("score").innerText);
	document.getElementById("score").innerText = oldScore + "/10";
}



const questions = [{
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

startGame();